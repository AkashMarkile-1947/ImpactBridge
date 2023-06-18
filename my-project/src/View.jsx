import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChildHunger from "../components/ChildHunger";
import App from "./App";
import LoginForm from "../components/Login";
import SignUpForm from "../components/Signup";
import RegistrationForm1 from "../components/NgoForm";
import DocumentForm from "../components/NGOForm2";
import NgoLoginForm from "../components/NgoLogin";
import AdminSignUpForm from "../components/AdminSignup";
import ChildEmpowerment from "../components/ChildEmpowerment";
import EmbraceAbilities from "../components/EmbraceAbilities";
import SeniorCare from "../components/SeniorCare";
import HealingTogether from "../components/HealingTogether";

const View = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/No-child-Hungry" exact element={<ChildHunger />} />
                <Route path="/Educate-Child" exact element={<ChildEmpowerment />} />
                <Route path="/Support-Exceptional" exact element={<EmbraceAbilities />} />
                <Route path="/Senior-Care" exact element={<SeniorCare />} />
                <Route path="/Heal-Together" exact element={<HealingTogether />} />
                <Route path="/" exact element={<App />} />
                <Route path="/Login" exact element={<LoginForm />} />
                <Route path="/Signup" exact element={<SignUpForm />} />
                <Route path="/ngo-register-1" exact element={<RegistrationForm1 />} />
                <Route path="/ngo-register-2" exact element={<DocumentForm />} />
                <Route path="/ngo-login" exact element={<NgoLoginForm />} />
                <Route path="/admin-signup" exact element={<AdminSignUpForm />} />
                <Route path="*" exact element={<h1>404 Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default View;