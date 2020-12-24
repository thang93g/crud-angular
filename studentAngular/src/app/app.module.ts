import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupListComponent } from './groups/group-list/group-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateGroupComponent } from './groups/create-group/create-group.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateGroupComponent } from './groups/update-group/update-group.component';
import { GroupDetailsComponent } from './groups/group-details/group-details.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { UpdateStudentComponent } from './students/update-student/update-student.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupListComponent,
    CreateGroupComponent,
    NavbarComponent,
    UpdateGroupComponent,
    GroupDetailsComponent,
    StudentListComponent,
    StudentDetailsComponent,
    AddStudentComponent,
    UpdateStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
