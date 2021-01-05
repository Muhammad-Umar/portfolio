import React, { useState } from 'react'

const initialData = {
    name: "",
    email: "",
    phone: "",
    message: "",
} 

const Contact = () => {    
    const [contactData, setContactData] = useState(initialData)

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log({...contactData, name: value})
        setContactData({...contactData, name: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section className="contact">
            <div className="container">
                <div className="contact__form">
                    <form action="" method="POST" onSubmit={(event) => handleSubmit(event)}>
                        <h1>Send me a message</h1>
                        <div className="input-field">
                            <input type="text" name="name" placeholder="Full Name" value={contactData.name} onChange={(event) => handleChange(event)}/>    
                        </div>
                        <div className="input-field">
                            <input type="email" name="email" placeholder="Email" value={contactData.email} onChange={(event) => handleChange(event)}/>    
                        </div>
                        <div className="input-field">
                            <input type="text" name="phone" placeholder="Phone (Optional)" value={contactData.phone} onChange={(event) => handleChange(event)}/>    
                        </div>
                        <div className="input-field">
                            <textarea rows="4" name="message" placeholder="Your Message" value={contactData.message} onChange={(event) => handleChange(event)}></textarea>
                        </div>
                        <div className="input-submit">
                            <input type="submit" value="Send"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
