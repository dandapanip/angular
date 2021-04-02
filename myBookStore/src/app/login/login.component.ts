import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpDataService } from '../http-data.service';

@Component({
  selector: 'mbs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // formData: {userName: string, password: string} = {userName: '', password: ''}
  userdata: any
  @ViewChild('f', { static: false }) signupForm: NgForm;
  user = {
    user_Email: '',
    user_password: ''
  }
  constructor(private http: HttpDataService) { }

  ngOnInit(): void {
    this.http.get('/user').subscribe((data)=> {
      this.userdata = data;
      console.log(this.userdata);
    })
  }
  onSubmit() {
    this.user.user_Email = this.signupForm.value.user_Email;
    this.user.user_password = this.signupForm.value.user_password;
    // console.log(this.user.username,this.user.password);
    const validation = this.userdata.filter(element => (this.user.user_Email == element.user_Email && this.user.user_password == element.user_password))
    console.log(validation);
      if(validation == ""){
        alert("Invalid Username or password");
      } else {
        alert("Successfull");
      }
      
  }



}
