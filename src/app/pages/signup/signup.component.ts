import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(private userService:UserService, private snak: MatSnackBar){}
  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    profile:"profile",
  };

  formSubmit() {
    if(this.user.username.trim() == ''){
      this.snak.open("Username is required!!!","OK",{
        duration:3000,
        verticalPosition:"top"
      });
    }else{
this.userService.addUser(this.user).subscribe((data)=>{
      console.log(data);

    },err=>{
       this.snak.open("Something went wrong!!!","OK",{
        duration:3000,
        verticalPosition:"top"
      });
    }

    )
    }

  }
}
