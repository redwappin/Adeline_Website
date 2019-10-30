import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/toPromise';
import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  fb: FormGroup;
  //options: email.ComposeOptions;

  constructor(private http: Http) {
   }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.fb = new FormGroup({
      surname: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
  }



  sendEmail() {

    let url = `https://us-central1-adeline-delbecq-website.cloudfunctions.net/httpEmail`
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

    params.set('to', 'adeline.delbecq@ynov.com');
    params.set('from', 'you@yoursupercoolapp.com');
    params.set('subject', 'test-email');
    params.set('content', 'Hello World');

    let test = new RequestOptions( {headers: headers});
    return this.http.post(url, params, test)
                    .toPromise()
                    .then( res => {
                      console.log(res)
                    })
                    .catch(err => {
                      console.log(err)
                    })

      // this.options = {
    //   to: [this.fb.get('email').value, 'mimili59.didine@hotmail.fr'],
    //   body: this.fb.get('message').value,
    //   subject: this.fb.get('surname').value + ' '+ this.fb.get('name').value
    // }
    // email.available().then(function(available) {
    //   if(available){
    //     email.compose(this.options).then( result=>{
    //       if(result)
    //         console.log("mail envoyé");
    //     })
    //   }
      
  // })


  }

}
