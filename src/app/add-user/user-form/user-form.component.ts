import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  allowedRoles: string[] = ["Admin", "Editor", "Viewer"]
  userCreationForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(3)]),
    email: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]),
    role: new FormControl('',Validators.required)
  })

  constructor(private userService: UserService, 
    private dialogRef: MatDialogRef<UserFormComponent>,
    private snackBar: MatSnackBar){}

  onSubmit(){
    this.userService.addUser({
      name: this.userCreationForm.get('name')?.value || '',
      email: this.userCreationForm.get('email')?.value || '',
      role: this.userCreationForm.get('role')?.value || ''
    });
    this.userCreationForm.reset();
    this.dialogRef.close();
    this.snackBar.open('User added successfully!','', {
      duration: 3000,
      verticalPosition: 'top', 
      horizontalPosition: 'center'
    });
  }
}
