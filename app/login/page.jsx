"use client";
import { useState } from "react";
import Header from "../components/Header/page";
import Nav from "../components/Nav/page";
import styles from "./styles.module.css";
import Link from "next/link";
import Footer from "../components/Footer/page";
import { useRouter } from "next/navigation";

function Login() {
    const [openNav, setOpenNav] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleLogin = () => {
        localStorage.setItem("email", email)
        if(email === "admin" && password === "admin") {
            router.push('/admin/products')
        }
    }

    return(
        <div className="main">
            <Nav openNav={openNav} setOpenNav={setOpenNav}/>
            <Header openNav={openNav} setOpenNav={setOpenNav}/>
            <div className="formContent">
                <div className="inputContainer">
                    <label>البريد الالكتروني :</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="inputContainer">
                    <label>كلمة المرور :</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className={styles.btnContainer}>
                    <button onClick={handleLogin}>تجسيل الدخول</button>
                    <Link href={"/create"} className={styles.btn}>انشاء حساب جديد</Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Login;