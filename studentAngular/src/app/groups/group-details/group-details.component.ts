import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Group } from 'src/app/group';
import { GroupService } from 'src/app/group.service';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {

  id!: number;
  group!: any;
  students!: Iterable<any>;
  data!: any;

  constructor(private route: ActivatedRoute, private groupService: GroupService,private router: Router) { }

  ngOnInit(): void {
    this.group = new Group();
    this.id = this.route.snapshot.params['group-id'];
    this.groupService.getGroup(this.id).subscribe(data => {
      this.data = data;
      this.group = this.data.group;
      this.students = this.data.students;
    },error => console.log(error));
  }
}
