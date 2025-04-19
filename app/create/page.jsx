"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import Nav from "../components/Nav/page";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import { db } from "../firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/router";

function Create() {
    const [openNav, setOpenNav] = useState(false)
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleAddUser = async() => {
        if(userName !== "" && email !== "" && password !== "") {
            const userRef = collection(db, "users")
            const q = query(userRef, where("email", "==", email))
            const querySnapshot = await getDocs(q)  
            if(querySnapshot.empty) {
                await addDoc(userRef, {userName, email, password})
                alert("تم اضافة المستخدم بنجاح")
                setUserName("")
                setEmail("")
                setPassword("")
            }else {
                alert("المستخدم موجود بالفعل")
                setUserName("")
                setEmail("")
                setPassword("")
            }
        }
    }

    return(
        <div className="main">
            <Nav openNav={openNav} setOpenNav={setOpenNav}/>
            <Header openNav={openNav} setOpenNav={setOpenNav}/>
            <div className="formContent">
                <div className="inputContainer">
                    <label>الاسم :</label>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="inputContainer">
                    <label>البريد الالكتروني :</label>
                    <input type="text" value={email}  onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="inputContainer">
                    <label>كلمة المرور :</label>
                    <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button onClick={handleAddUser} className={styles.btn}>انشاء حساب جديد</button>
            </div>
            <Footer/>
        </div>
    )
}

export default Create;