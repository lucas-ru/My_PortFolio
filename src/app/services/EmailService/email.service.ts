import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  sendEmail(mail: any, name: any, subject: any, message: any) {
    emailjs.init('ZrzGGgr_tf-6hdWsj')
    emailjs.send("service_6dgp8xi","template_p6tjf3u",{
      name: name,
      subject: mail,
      message: subject,
      mail: message,
      });
      return emailjs.EmailJSResponseStatus
    }
}