import { Component } from '@angular/core';
import { faHome, faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular-springboot-recipe';
  faHome = faHome;
  faBook = faBook;
}
