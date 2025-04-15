"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import Nav from "../components/Nav/page";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";

function Create() {
    const [openNav, setOpenNav] = useState(false)

    return(
        <div className="main">
            <Nav openNav={openNav} setOpenNav={setOpenNav}/>
            <Header openNav={openNav} setOpenNav={setOpenNav}/>
            <div className="formContent">
                <div className="inputContainer">
                    <label>الاسم :</label>
                    <input type="text" />
                </div>
                <div className="inputContainer">
                    <label>البريد الالكتروني :</label>
                    <input type="text" />
                </div>
                <div className="inputContainer">
                    <label>كلمة المرور :</label>
                    <input type="password" />
                </div>
                <button className={styles.btn}>انشاء حساب جديد</button>
            </div>
            <Footer/>
        </div>
    )
}

export default Create;