import { Component, OnInit } from '@angular/core';
import {Group} from '../../group';
import {GroupService} from '../../group.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  group: Group = new Group();
  submitted = false;

  constructor(private groupService: GroupService,private router: Router) { }

  ngOnInit(): void {
  }

  newGroup(): void{
    this.submitted = false;
    this.group = new Group();
  }

  save(){
    this.groupService.createGroup(this.group).subscribe((data:any) => {
      this.group = new Group();
      this.gotoList();
    })
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/groups']);
  }
}
