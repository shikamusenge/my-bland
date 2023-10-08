import emailjs from "emailjs-com";
import { Temail } from "./Types";
export const SendMail = (e: any, data: Temail) => {
  e.preventDefault();
  const { email, names, phone, message } = data;
  emailjs
    .send(
      "service_ogo77a1", // Replace with your EmailJS email service ID
      "template_ssr9nw9", // Replace with your EmailJS template ID
      {
        to_email: "codeexp77@gmail.com", // Replace with the recipient's email address
        names: names,
        phone: phone,
        email: email,
        message: message,
      },
      "0Kt8fX--XlBiyNWBO" // Replace with your EmailJS user ID
    )
    .then(
      (response) => {
        console.log("Email sent successfully:", response);
        // return "Message sent successfully!";
      },
      (error) => {
        console.error("Error sending email:", error);
      }
    );
};
