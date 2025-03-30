import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { EmailService } from '../../services/EmailService/email.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent{

  contactForm = new FormGroup({
    mail: new FormControl(''),
    name: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl('')
  });

  constructor(private emailService: EmailService) {}

  onSubmit() {
    this.emailService.sendEmail(this.contactForm.value.mail,this.contactForm.value.name, this.contactForm.value.subject, this.contactForm.value.message);
  }

}
