import { Component, OnInit } from '@angular/core';
import {Group} from '../../group';
import {GroupService} from '../../group.service';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  groups!: Observable<any>;
  keyword!: string;

  constructor( private groupService: GroupService,router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    // this.groups = this.groupService.searchGroup('c');
    this.groups = this.groupService.getGroupList();
  }

  deleteGroup(id: number){
    this.groupService.deleteGroup(id).subscribe(
      data => { this.reloadData(); }
    )
  }

  searchGroup(keyword: string){
    this.groups = this.groupService.searchGroup(keyword);
  }

  onSubmit(){
    this.searchGroup(this.keyword);
  }
}
