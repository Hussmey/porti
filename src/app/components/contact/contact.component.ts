import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { EmailJSResponseStatus } from 'emailjs-com'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  isAlert: boolean = false;
  isWrong: boolean = false;
  
 backForm(){
  this.isAlert = false;
}

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_67ut386',
        'template_4p52prp',
        e.target as HTMLFormElement,
        'F3BGdEZlTBF4hSnU5'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          this.isAlert = true;
        },
        (error) => {
          console.log(error.text);
          alert('it didnt sending email.');
        }
      );
  }

}
