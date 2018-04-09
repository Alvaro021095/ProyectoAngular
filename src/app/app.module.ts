import { TodoAppService } from './todo-app.service';
import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos/todos.component';

@NgModule({
	declarations: [ AppComponent, TodosComponent ],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule.enablePersistence()
	],
	providers: [ TodoAppService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
