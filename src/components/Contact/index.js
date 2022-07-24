import React, { useState } from "react";

//validate the email to see if it has the @ and .com

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function ContactForm() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState("");
    
 //error messages

    function handleChange(e) {
        if(e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if(!isValid) {
                setErrorMessage("Your email is invalid.");
            } else {
                if(!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage("");
                }
            }
        }
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        }
      
    }

    function handleSubmit(e) {
        e.preventDefault();
       
    }

    return (
        <section>
            <h2>Contact</h2>
            <div className="content" id="contact-box">
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" placeholder="Your name" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" name="email" placeholder="Your e-mail" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" rows="5" placeholder="Message for me!" defaultValue={message} onBlur={handleChange} />
                    </div>
                   
                    <button type="submit" data-testid="submit">Submit</button>
                </form>
                 </div>
        </section>
    );
}

export default ContactForm;