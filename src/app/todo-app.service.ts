import { Todo } from './todo.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class TodoAppService {
	constructor(private db: AngularFirestore) {}
	getTodos() {
		return this.db.collection<Todo>('Todos').valueChanges();
	}
	addToTodos(name: string) {
		if (name !== '') {
			const id = this.db.createId();
			const status = 'Active';
			this.db.collection('Todos').doc(id).set({ id, name, status });
		}
	}
	changeToStatus(id: string, status: string) {
		this.db.collection('Todos').doc(id).update({ status });
	}
	deleteTodo(id: string) {
		this.db.collection('Todos').doc(id).delete();
	}
	changeTable() {
		return this.db.collection<Todo>('Todos').valueChanges();
	}
	clearCompletes(to: Todo[]) {
		for (const todoo of to) {
			this.db.collection('Todos').doc(todoo.id).delete();
		}
	}
	changeToCompletes(to: Todo[], status: string) {
		for (const todoo of to) {
			this.db.collection('Todos').doc(todoo.id).update({ status });
		}
	}
}
