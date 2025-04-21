"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import logoImage from "../../../public/images/logo-removebg-preview.png"
import { CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import { useState, useEffect } from "react";

function Header({openNav, setOpenNav}) {
    const [login, setLogin] = useState(false)
    const [userEmail, setUserEmail] = useState('') 
    const handleOpenNav = () => {
        setOpenNav(true)
    }

    useEffect(() => {
        if(typeof window !== "undefined") {
            const email = localStorage.getItem("email")
            if(email) {
                setUserEmail(email)
                setLogin(true)
            }else {
                setLogin(false)
            }
        }
    }, [])

    return(
        <div className={styles.headerContainer}>
            <div className={styles.banner}>
                <Link href="/" className={styles.bannerText}>
                    <span><IoLocationSharp/></span>
                    <span>تحديد الموقع معطل.. برجاء اضغط هنا لتفعيله قبل اختيار المنتجات </span>
                </Link>
                <p><IoIosArrowBack/></p>
            </div>
            <header className={styles.header}>
                <div className={styles.rightSide}>
                    <div className={styles.logoContainer}>
                        <Image src={logoImage} className={styles.logoImage} alt="LogoImage"/>
                        <Link href="/" className={styles.logo}>صيدلاني</Link>
                    </div>
                    <div className={styles.mobileIcons}>
                        <Link href="/" className={styles.mobileLinks}><IoMdHeartEmpty/></Link>
                        <Link href="/cart" className={styles.mobileLinks}><LuShoppingCart/></Link>
                    </div>
                </div>
                <div className={styles.container}>
                    <button onClick={handleOpenNav}><HiMiniBars3/></button>
                    <div className={styles.middleSide}>
                        <p><CiSearch  /></p>
                        <input type="text" placeholder="ابحث عن المنتج"/>
                    </div>
                </div>
                <div className={styles.leftSide}>
                    {login ? 
                        <Link href={userEmail === "admin" ? `/admin/products` : `/user/${encodeURIComponent(userEmail)}`} className={styles.link}>
                            <span><GrNotes/></span>
                            <span>الملف الشخصي</span>
                        </Link>
                            :
                        <Link href="/login" className={styles.link}>
                            <span><BsPerson/></span>
                            <span>تسجيل الدخول</span>
                        </Link> 
                    }
                    <Link href="/" className={styles.link}>
                        <span><IoMdHeartEmpty/></span>
                        <span>المفضلة</span>
                    </Link>
                    <Link href="/cart" className={styles.link}>
                        <span><LuShoppingCart/></span>
                        <span>السلة</span>
                    </Link> 
                </div>
            </header>
        </div>
    )
}

export default Header;