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
	constructor(private service: TodoAppService) {
		service.getTodos().subscribe((content) => {
			this.todos = content;
		});
	}
	addToTodos(nameTwo: HTMLInputElement) {
		if (nameTwo.value !== '') {
			this.service.addToTodos(nameTwo.value);
			nameTwo.value = '';
		}
	}
	changeToComplete(event, id: string, status: string) {
		if (event.target.checked) {
			this.service.changeToComplete(id, status);
		}
	}
	deleteTodo(id: string) {
		this.service.deleteTodo(id);
	}
	changeTable(status: string) {
		this.todos = [];
		console.log(this.todos);
		this.service.getTodos().subscribe((content) => {
			this.todos = content;
		});
		console.log(this.todos);
		if (status === 'actives') {
			this.todos = this.todos.filter((todo) => todo.status === 'Active');
			console.log(this.todos);
		} else if (status === 'completes') {
			this.todos = this.todos.filter((todo) => todo.status === 'Complete');
			console.log(this.todos);
		} else if (status === 'showAll') {
			console.log('todos');
			this.service.getTodos();
		}
	}
	clearCompletes(status: string) {
		console.log(status);
		this.service.clearCompletes(status);
	}
}
