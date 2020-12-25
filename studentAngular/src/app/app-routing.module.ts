import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateGroupComponent } from './groups/create-group/create-group.component';
import { GroupDetailsComponent } from './groups/group-details/group-details.component';
import { GroupListComponent } from './groups/group-list/group-list.component';
import { UpdateGroupComponent } from './groups/update-group/update-group.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { UpdateStudentComponent } from './students/update-student/update-student.component';

const routes: Routes = [
  {path: 'groups',component: GroupListComponent},
  {path: 'groups/create',component: CreateGroupComponent},
  {path: 'groups/update/:group-id',component: UpdateGroupComponent},
  {path: 'groups/:group-id',component: GroupDetailsComponent},
  {path: 'groups/:group-id/create',component: AddStudentComponent},
  {path: 'students',component: StudentListComponent},
  {path: 'groups/:group-id/students/:id',component: StudentDetailsComponent},
  {path: 'groups/:group-id/students/:id/edit',component: UpdateStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
