import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      Email: new FormControl(null, {
        validators: [Validators.required, Validators.email]
      }),
      Fullname: new FormControl(null, { 
        validators: [Validators.required, Validators.minLength(3)]
      }),
      message: new FormControl(null, { 
        validators: [Validators.required, Validators.maxLength(300)]
      }) 
    });
  }

  onSubmit(){
    if(this.form.invalid){
        console.log('form invalid');
    }

    console.log(this.form.value);
    
  }
}
