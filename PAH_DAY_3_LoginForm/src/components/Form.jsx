import React, { useState } from 'react';
import '../assets/css/Form.css';

const LoginForm = () => {
    // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // const phoneRegex = /^[6789]\d{9}$/;
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$%*?])[a-zA-Z\d@$%*?]{8,}$/;
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        password: ''
    });

    // const [error, setError] = useState({
    //     email: '',
    //     phone: '',
    //     password: ''
    // })

    const handleChangeEvent = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })

        // setError({
        //     ...error,
        //     [name]: isValidateValue(name, value)
        // })
    }

    // const isValidateValue = (name, value) => {
    //     switch (name) {
    //         case 'email':
    //             return emailRegex.test(value) ? "" : "Invalid email address";
    //         case 'phone':
    //             return phoneRegex.test(value) ? "" : "Invalid phone number"
    //         case 'password':
    //             return passwordRegex.test(value) ? "" : "Invalid password"
    //         default:
    //             break;
    //     }
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div className='form__container'>
            <form className='register__form' method='POST' onSubmit={handleSubmit}>
                <div className="input__fields">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" data-testid="useremail-input" required onChange={handleChangeEvent} />
                    {/* {error.email && <p style={{ color: 'red' }}>*{error.email}</p>} */}
                </div>
                {/* <div className="input__fields">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" id="phone" data-testid="userphone-input" required onChange={handleChangeEvent} />
                    {error.phone && <p style={{ color: 'red' }}>*{error.phone}</p>}
                </div> */}
                <div className="input__fields">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" data-testid="userpassword-input" required minLength={8} maxLength={15} onChange={handleChangeEvent} />
                    {/* {error.password && <p style={{ color: 'red' }}>*{error.password}</p>} */}
                </div>
                <button className='submit__btn' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;