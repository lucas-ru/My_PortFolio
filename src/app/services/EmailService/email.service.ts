import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  sendEmail(mail: any, subject: any, message: any) {
    emailjs.init('ZrzGGgr_tf-6hdWsj')
    emailjs.send("service_6dgp8xi","template_p6tjf3u",{
      mail: mail,
      subject: subject,
      message: message
      });
      return emailjs.EmailJSResponseStatus
    }
}