import React from "react";
import erorr from "./../../assets/images/Oops.svg"; // Adjust the path as necessary

export default function Erorr() {
    return (
    <section className="min-vh-100 d-flex justify-content-center align-items-center">
        <img src={erorr} alt="erorr 404" className="w-50 mt-4" />
    </section>
    );
}