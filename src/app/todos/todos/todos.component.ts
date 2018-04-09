import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-todos',
	templateUrl: './todos.component.html',
	styleUrls: [ './todos.component.css' ]
})
export class TodosComponent implements OnInit {
	@Output() resp = new EventEmitter();
	@Output() clear = new EventEmitter();
	constructor() {}
	showTodos(value: string) {
		if (value === 'showAll') {
			this.resp.emit(value);
		} else if (value === 'actives') {
			this.resp.emit(value);
		} else if (value === 'completes') {
			this.resp.emit(value);
		}
	}
	clearCompletes(value: string) {
		this.clear.emit(value);
	}
	ngOnInit() {}
}
