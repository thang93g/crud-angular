import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/group';
import { GroupService } from 'src/app/group.service';

@Component({
  selector: 'app-update-group',
  templateUrl: './update-group.component.html',
  styleUrls: ['./update-group.component.css']
})
export class UpdateGroupComponent implements OnInit {

  id!: number;
  group!: any;

  constructor(private router: Router,private route: ActivatedRoute,private groupService: GroupService) { }

  ngOnInit() {
    this.group = new Group();

    this.id = this.route.snapshot.params['group-id'];

    this.groupService.getGroup(this.id).subscribe(data => {
        this.group = data;
      }, error => console.log(error));
  }

  updateGroup() {
    console.log(1)
    this.groupService.updateGroup(this.id, this.group)
      .subscribe(data => {
        console.log(data);
        this.group = new Group();
        this.gotoList();
      }, error => console.log(error));
  }

  gotoList(){
    this.router.navigate(['/groups']);
  }

  onSubmit(){
    this.updateGroup();
  }
}
