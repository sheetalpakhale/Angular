import { Component, OnInit } from '@angular/core';

import { StudentListType } from '../StudentsDetails/Student-List-Type';
import { StudentList } from '../StudentsDetails/Students_Details-Data';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  studentList = StudentList;
  selectedStudentList : StudentListType;
  regcourses:Array<string>;
  constructor() {
    console.log(this.studentList);
    window.localStorage.setItem("stuDATA",JSON.stringify(this.studentList));
   }

  Students(student: StudentListType):void{
    this.selectedStudentList=student;
    console.log(this.selectedStudentList.id);
    window.localStorage.setItem("selID", JSON.stringify(student.id));
    let stuData = JSON.parse(window.localStorage.getItem("stuDATA"));
    console.log(stuData[student.id].courses);
    this.regcourses=stuData[student.id].courses;
  }
  
  ngOnInit() {
  }

}
