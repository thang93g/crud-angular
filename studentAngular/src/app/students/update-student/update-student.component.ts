import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
})
export class UpdateStudentComponent implements OnInit {
  id!: number;
  groupId!: number;
  student!: any;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.student = new Student();

    this.groupId = this.route.snapshot.params['group-id'];

    this.id = this.route.snapshot.params['id'];

    this.studentService.getStudent(this.id).subscribe(data => {
      this.student = data;
    },error => console.log(error))
  }

  updateStudent(){
    this.studentService.updateStudent(this.id,this.student).subscribe(data => {
      this.student = new Student();
      this.gotoList();
    },error => console.log(error))
  }

  gotoList(){
    this.router.navigate(['groups/' + this.groupId])
  }

  onSubmit(){
    this.updateStudent();
  }
}
