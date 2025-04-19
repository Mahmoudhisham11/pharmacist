"use client"; 
import { useState } from "react";
import styles from "./styles.module.css";
import Header from "../components/Header/page";
import Nav from "../components/Nav/page";

function Cart() {
    const [openNav, setOpenNav] = useState(false)

    return(
        <div className="main">
            <Header openNav={openNav} setOpenNav={setOpenNav}/>
            <Nav openNav={openNav} setOpenNav={setOpenNav}/>
            <div className={styles.cartContent}>
                <div className={styles.title}>
                    <h2>عربة التسوق</h2>
                </div>
            </div>
        </div>
    )
}

export default Cart;