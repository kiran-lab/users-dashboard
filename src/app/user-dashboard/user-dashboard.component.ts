import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, Type, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../models/user.model';
import { UserFormComponent } from '../add-user/user-form/user-form.component';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent implements OnChanges, AfterViewInit {
  @Input() users!: User[];
  userTableColumns = ['name', 'email', 'role'];
  addUserComponent!: Promise<Type<UserFormComponent>>;
  pageSize = 5;
  pageIndex = 0; 
  totalItems = 0;
  dataSource = new MatTableDataSource<User>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['users'] && changes['users'].currentValue) {
      this.dataSource.data = this.users;
      this.totalItems = this.users.length;
    }
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<User>(this.users);
    this.dataSource.paginator = this.paginator;
    this.totalItems = this.users.length;
  }

  constructor(public dialog: MatDialog) {}

  async openDialog() {
    if (!this.addUserComponent) {
      this.addUserComponent = import(
        '../add-user/user-form/user-form.component'
      ).then(({ UserFormComponent }) => UserFormComponent);
    }
    this.addUserComponent.then((component: Type<UserFormComponent>) => {
      this.dialog.open(UserFormComponent, {
        width: '30vw',
        position: {top: '10%'}
      });
    });
  }
}
