import { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = ({getFormData}) => {

    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleButton = (e) => {
        e.preventDefault();

        if(message !== '' && name !== '' && email !== '') {
            getFormData({
                review: message,
                name: name,
                rating: 5
            });

            setName('');
            setEmail('');
            setMessage('');
        }
    }

    return(
        <div className='review-form-holder'>
            <div>
                <label>Your comment...</label>
                <textarea
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
            </div>
            <div className='two-columns'>
                <div className='input-holder'>
                    <label htmlFor='user-name'>Your name</label>
                    <input
                        type='text'
                        id='user-name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='input-holder'>
                    <label htmlFor='user-email'>Your email</label>
                    <input
                        type='email'
                        id='user-email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>
            <button onClick={(e) => handleButton(e)}>Send</button>
        </div>
    );
}

export default ReviewForm;