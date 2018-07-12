import { Component } from '@angular/core';

import { StudentDetailsComponent } from './student-details/student-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Welcome to MBBLabs ClassRoom!!"; 
  
  StudentsMenu(){
    console.log("StudentsMenu");
  }

  CoursesMenu(){
    console.log("Courses");
  }
}
