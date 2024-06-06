
import emailjs from "@emailjs/browser";

export const sendEmail= (nombre, password, email, rnc)=>{
    emailjs.send("service_02i1sr1","template_srygbto",{
        to_name: nombre,
        message: password,
        rnc: rnc,
        from_name: "Nominacenter",
        reply_to: "soporte@sergioguzmansoft.com",
        email: email,
        },"sQhZDnAo-9X3JUjqg").then((result)=>{
          console.log(result);
      }, (error)=>{
         console.log(error);
      })
}

