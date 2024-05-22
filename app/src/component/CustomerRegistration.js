
import React, { useState } from 'react';
import {  RegistrationService } from '../service/RegistrationService';

function AdminRegistration() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValidForm = true;
        if (!firstName.trim()) {
            setFirstNameError('First Name is required');
            isValidForm = false;
        } else {
            setFirstNameError('');
        }

        if (!lastName.trim()) {
            setLastNameError('Last Name is required');
            isValidForm = false;
        } else {
            setLastNameError('');
        }

        if (!email.trim()) {
            setEmailError('Email is required');
            isValidForm = false;
        } else {
            setEmailError('');
        }

        if (!password.trim()) {
            setPasswordError('Password is required');
            isValidForm = false;
        } else {
            setPasswordError('');
        }

        if (isValidForm) {
            const data = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                role: "Customer",
            };
            const user = await  RegistrationService(data);
            console.log({
                firstName,
                lastName,
                email,
                password,
            });

            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');

            window.alert('Registration successful!');
        }
    };

    return (
      <div className="container mt-3">
      <div className="row justify-content-center">
          <div className="col-md-5">
              <div className="card">
                  <div className="card-body">
                      <h4 className="card-title text-center">Customer Registration
</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3"  style={{ textAlign: 'start' }}>
                            <label htmlFor="firstName" className="form-label" >First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            {firstNameError && <div className="text-danger">{firstNameError}</div>}
                        </div>
                        <div className="mb-3" style={{ textAlign: 'start' }}>
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            {lastNameError && <div className="text-danger">{lastNameError}</div>}
                        </div>
                        <div className="mb-3" style={{ textAlign: 'start' }}>
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {emailError && <div className="text-danger">{emailError}</div>}
                        </div>
                        <div className="mb-3" style={{ textAlign: 'start' }}>
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {passwordError && <div className="text-danger">{passwordError}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary mb-3 btn-block">Register</button>
                    </form>
                   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminRegistration;
