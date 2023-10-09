import LargeCard from "../Components/LargeCard";
import icon1 from "/icons8-contact-100.png";
import icon2 from "/getconnect.png";
import icon3 from "/intouch.png";
import { SendMail } from "../libs/Email";
import { Button1 } from "../Components/Buttons";
import { FaEnvelope, FaMessage, FaPhone, FaUser } from "react-icons/fa6";
import TextField from "../Components/TextField";
import loader from "/ld.gif";
import { useState } from "react";
function Contact() {
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSetSending] = useState(false);
  return (
    <div className="grid min-h-screen items-center p-4 md:px-12">
      <LargeCard>
        <div className="px-4 pt-8 text-white md:w-3/12 font-extrabold shadow-sky-200 shadow-md ">
          <img
            src={icon1}
            alt="Skills"
            width="50%"
            className="md:w-1/2 w-10 m-auto mx-w-1/2"
            loading="lazy"
          />
          <p className="text-center text-[30px] tracking-wider mt-4">
            Contuct Us
          </p>
        </div>
        <div className="md:w-9/12 p-4 bg-[#013853] md:px-12 text-white items-center">
          <div className="md:flex items-center mb-10">
            <picture className="">
              <img
                src={icon2}
                alt=""
                className="w-[18rem] h-[14rem]"
                loading="lazy"
              />
            </picture>
            <div>
              <p>MY CONTACTS</p>
              <p>
                <b>Email: </b> codeexp77@gmail.com shikamusenge720@gmail.com
              </p>
              <div>
                <b>Tel:</b> +(250) 784 589 448
                <p className="px-8">+(250) 784 589 448</p>
                <p>Whats App: +(250) 784 589 44</p>
              </div>
            </div>
          </div>
          <div className="md:flex items-center mb-10">
            <picture>
              <img
                src={icon3}
                alt=""
                className="w-20 md:w-[13rem] mb-2 md:-rotate-45"
              />
            </picture>
            <div className="md:w-7/12">
              <form className="w-full">
                <TextField
                  fieldType="text"
                  fieldId="names"
                  fieldLabel="Names"
                  message=""
                  fieldHolder="Enter Your Names"
                  changeHandler={(e) => {
                    setNames(e.target.value);
                  }}
                >
                  <FaUser />
                </TextField>
                <TextField
                  fieldType="text"
                  fieldId="phone"
                  fieldLabel="Phone Number"
                  message=""
                  fieldHolder="Enter Your Phone Number"
                  changeHandler={(e) => {
                    setPhone(e.target.value);
                  }}
                >
                  <FaPhone />
                </TextField>
                <TextField
                  fieldType="text"
                  fieldId="email"
                  fieldLabel="Email"
                  message=""
                  fieldHolder="Enter Your email address"
                  changeHandler={(e) => {
                    setEmail(e.target.value);
                  }}
                >
                  <FaEnvelope />
                </TextField>
                <TextField
                  fieldType="textarea"
                  fieldId="message"
                  fieldLabel="Message"
                  message=""
                  fieldHolder="Enter Your Message"
                  changeHandler={(e) => {
                    setMessage(e.target.value);
                  }}
                >
                  <FaMessage />
                </TextField>
                <Button1>
                  {sending ? (
                    <img src={loader} alt="loader" className="w-10 m-auto" />
                  ) : (
                    <p
                      className="w-full"
                      onClick={(e) => {
                        e.preventDefault();
                        const data = {
                          email: email,
                          names: names,
                          phone: phone,
                          message: message,
                        };
                        setSetSending(true);
                        const SendNewMail = async () => {
                          await SendMail(e, data);
                          setSetSending(false);
                          alert("Email sent success fully");
                        };
                        SendNewMail();
                        setNames("");
                        setEmail("");
                        setMessage("");
                        setPhone("");
                        document.querySelectorAll("input").forEach((inp) => {
                          inp.value = "";
                        });
                      }}
                    >
                      Send
                    </p>
                  )}
                </Button1>
              </form>
            </div>
          </div>
        </div>
      </LargeCard>
    </div>
  );
}

export default Contact;
