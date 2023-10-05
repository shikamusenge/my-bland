// import nodemailer from "nodemailer";
import { Temail } from "./Types";
export const SendMail = (data: Temail) => {
  console.log(data);
  //   const { email, names, phone, message } = data;
  //   const transporter = nodemailer.createTransport({
  //     service: "gmail",
  //     auth: {
  //       user: "intaretek@gmail.com",
  //       pass: import.meta.env.NODE_Mailer_PASSWORD,
  //     },
  //   });
  //   const body = `
  //  <div style="font-weight:bold">
  //  <h1>Names:${names}</h1>
  //  <h1>Phone:${phone}</h1>
  //  <p>Names:${message}</p>

  //  </div>
  //  `;
  //   const mailOptions = {
  //     from: email,
  //     to: "codeexp77@gmail.com",
  //     subject: `Portifolio ${names}`,
  //     html: body,
  //   };

  //   transporter.sendMail(mailOptions, function (error, info) {
  //     if (error) {
  //       console.log(error, info);
  //     } else {
  //     }
  //   });
};
