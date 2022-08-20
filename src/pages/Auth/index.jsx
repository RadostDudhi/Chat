import React from "react";
import {
    Routes,
    Route
  } from 'react-router-dom';


import { LoginForm, RegisterForm } from "../../modules";

import './Auth.scss';

const Auth = () => ( 
    
    <section className="auth">
            <Routes>
                <Route exact path="/" element={<LoginForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
            </Routes>
    </section>
    
);

export default Auth;