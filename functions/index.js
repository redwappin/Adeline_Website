const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const sendgrid = require('sendgrid')
const client = sendgrid("AIzaSyCeEWlDEO3-XkUyBGB86_8OlLdn8IiSjSM")
const cors = require('cors')({origin: true});
function parseBody(body) {
    var helper = sendgrid.mail;
    var fromEmail = new helper.Email(body.from);
    var toEmail = new helper.Email(body.to);
    var subject = body.subject;
    var content = new helper.Content('text/html', body.content);
    var mail = new helper.Mail(fromEmail, subject, toEmail, content);
    return  mail.toJSON();
  }
  
  
  exports.httpEmail = functions.https.onRequest((req, res) => {
    return Promise.resolve()
      .then(() => {
        if (req.method !== 'POST') {
          const error = new Error('Only POST requests are accepted');
          error.code = 405;
          throw error;
        }
        res.se
  
  
        const request = client.emptyRequest({
          method: 'POST',
          path: '/v3/mail/send',
          body: parseBody(req.body)
        });
  
        return client.API(request)

      })

      .then((response)=>{
          if(response.body){
            cors( () => {
                //res.send(response.body);
            });
           
          }
          else{
            cors(() => {
                //res.end()
            });
              
          }
            return
      })     
      .catch((err) => {
        console.error(err);
        return Promise.reject(err);
      });
  
  
  })
