import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpDataService } from '../http-data.service';

@Component({
  selector: 'mbs-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userdata: any
  
  @ViewChild('f', { static: false }) signupForm: NgForm;
  user = {
    firstname: '',
    lastname: '',
    user_Email: '',
    user_password: ''
  }

  constructor(private http: HttpDataService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.user.firstname = this.signupForm.value.firstname;
    this.user.lastname = this.signupForm.value.lastname;
    this.user.user_Email = this.signupForm.value.user_Email;
    this.user.user_password = this.signupForm.value.user_password;
    console.log(this.user.firstname,this.user.lastname,this.user.user_Email,this.user.user_password);
    //  post details
      this.http.post('/user',this.user).subscribe(()=> {
            // get details
    this.http.get('/user').subscribe((data)=> {
      this.userdata = data
      console.log("Check Data",this.userdata);
    })
    })
  }

}
