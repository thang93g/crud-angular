import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  student: Student = new Student();
  submitted = false;
  groupId!: number;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.groupId = this.route.snapshot.params['group-id'];
    this.student.group_id = this.groupId;
  }

  newEmployee(): void {
    this.submitted = false;
    this.student = new Student();
  }

  save() {
    this.studentService.createStudent(this.student).subscribe((data: any) => {

        this.student = new Student();
        this.gotoList();
      },
        (error: any) => console.log(error));
  }

  addStudent() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/groups/' + this.groupId]);
  }
}
