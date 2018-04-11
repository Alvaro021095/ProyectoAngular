import { TodoAppService } from './todo-app.service';
import {
	AngularFirestoreModule,
	AngularFirestore,
	AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Todo } from './todo.interface';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	todos: Todo[];
	actives: Todo[];
	total: number;
	item: string;
	constructor(private service: TodoAppService) {
		service.getTodos().subscribe((content) => {
			this.todos = content;
			this.actives = this.todos.filter((todo) => todo.status === 'Active');
			this.total = this.actives.length;
			if (this.total === 0) {
				this.item = '';
			} else if (this.total === 1) {
				this.item = this.total + ' item left';
			} else {
				this.item = this.total + ' items left';
			}
		});
	}
	addToTodos(nameTwo: HTMLInputElement) {
		if (nameTwo.value !== '') {
			this.service.addToTodos(nameTwo.value);
			nameTwo.value = '';
		}
	}
	changeToStatus(event, id: string, status: string) {
		if (event.target.checked) {
			console.log(this.todos);
			this.service.changeToStatus(id, status);
		}
	}
	deleteTodo(id: string) {
		this.service.deleteTodo(id);
	}
	changeTable(status: string) {
		this.todos = [];
		this.service.getTodos().subscribe((content) => {
			this.todos = content;
			if (status === 'actives') {
				this.todos = this.todos.filter((todo) => todo.status === 'Active');
			} else if (status === 'completes') {
				this.todos = this.todos.filter((todo) => todo.status === 'Complete');
			} else if (status === 'showAll') {
				this.service.getTodos();
			}
		});
	}
	clearCompletes() {
		this.service.getTodos().subscribe((content) => {
			this.todos = content;
		});
		this.todos = this.todos.filter((todo) => todo.status === 'Complete');
		this.service.clearCompletes(this.todos);
	}
	changeToCompletes() {
		console.log('Entro a cmbiar por compeltes');
		this.service.getTodos().subscribe((content) => {
			this.todos = content;
		});
		console.log(this.todos);
		this.service.changeToCompletes(this.todos, 'Complete');
	}
}
