import "./App.css";
import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import SignIn from "./components/SigIn/SigIn";
import SignUp from "./components/SignUp/SignUp";
import Dentist from "./components/Dentist/DentistRegister";
import Footer from "./components/Footer/Footer";
import { PatientRegister } from "./components/Patient/PatientRegister";
import TurnRegister from "./components/Turn/TurnRegister";
import TablePatientes from "./components/Patient/TablePatientes";
import { TableDentist } from "./components/Dentist/TableDentist";
import TableTurn from "./components/Turn/TableTurn";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dentist-register" element={<Dentist />} />
        <Route path="/patient-register" element={<PatientRegister />} />
        <Route path="/turn-register" element={<TurnRegister />} />
        <Route path="/patients" element={<TablePatientes />} />
        <Route path="/dentist" element={<TableDentist />} />
        <Route path="/turn" element={<TableTurn />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
