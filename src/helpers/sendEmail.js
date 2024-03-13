
import emailjs from "@emailjs/browser";

export const sendEmail= (nombre, password, email)=>{
    emailjs.send("service_02i1sr1","template_srygbto",{
        to_name: nombre,
        message: password,
        from_name: "Nominacenter",
        reply_to: "idicent@sergioguzmansoft.com",
        email: email,
        },"sQhZDnAo-9X3JUjqg").then((result)=>{
          console.log(result);
      }, (error)=>{
         console.log(error);
      })
}

