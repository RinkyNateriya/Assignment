
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminLoginService } from '../service/RegistrationService';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let isValidForm = true;

        if (!email) {
            setEmailError('Email is required');
            isValidForm = false;
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('Password is required');
            isValidForm = false;
        } else {
            setPasswordError('');
        }

        if (isValidForm) {
            const data = {
                email: email,
                password: password
            };
            const user = await AdminLoginService(data);
            if (user.message === "you are not allowed to login from here") {
                setIsValid(true);
                setMessage("you are not allowed to login from here");
            } else {
                setIsValid(true);
                setMessage("login success");
                navigate('/'); // Navigate to home component upon successful login
            }
            setEmail('');
            setPassword('');
        }
    };

    return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title text-center">Admin Login</h4>
                            <form onSubmit={handleSubmit}>
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
                                <button type="submit" className="btn btn-primary mb-4 mt-1 btn-block">Login</button>
                                {isValid && <div className="text-danger">{message}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
