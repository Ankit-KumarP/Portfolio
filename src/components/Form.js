import React from 'react'
import './FormStyles.css';

const Form = () => {
    return (
        <>
            <div className="form">
                <form name='submit-to-google-sheet' id='fff'>
                    <label htmlFor='name'>Your Name</label>
                    <input type='text' id='name' name='Name' required></input>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='Email' required></input>
                    <label htmlFor='subject'>Subject</label>
                    <input type='text' id='subject' name='Subject' required></input>
                    <label htmlFor='message'>Message</label>
                    <textarea name="Message" id="message" cols="6" rows="5" placeholder='Type your message here'  ></textarea>
                    <button type='submit' className='btn'>Submit</button>
                </form>
            </div>

        </>
    )
}

export default Form
