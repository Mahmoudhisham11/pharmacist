"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiHome } from "react-icons/fi";
import { GrNotes } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";

function Nav({openNav, setOpenNav}) {
    const [login, setLogin] = useState(false)
    const [name, setName] = useState('')
    const [categorieLinks, setCategorieLinks] = useState([
        {   id: 1,
            text: 'الادوية',
        },
        {   id: 2,
            text: 'العناية بالشعر',
        },
        {   id: 3,
            text: 'العناية بالبشرة',
        },
        {   id: 4,
            text: 'العناية اليومية',
        },
        {   id: 5,
            text: 'الام و الطفل',
        },
        {   id: 6,
            text: 'المكياج و الاكسسوارات',
        },
        {   id: 7,
            text: 'الفيتامينات و المكملات',
        },
    ])
    
    const handleCloseNav = () => {
        setOpenNav(false)
    }
    useEffect(() => {
        if(typeof window !== "undefined") {
            const email = localStorage.getItem("email")
            const userName = localStorage.getItem("name")
            if(userName) {
                setName(userName)
            }
            if(email) {
                setLogin(true)
            }else {
                setLogin(false)
            }
        }
    }, [])

    return(
        <nav className={openNav ? `${styles.nav} ${styles.open}` : `${styles.nav}`}>
            <div className={styles.top}>
                {login ? 
                    <h2>مرحبا: {name}</h2>
                    :
                    <Link href={"/login"} className={styles.loginLink}>
                        <span><IoPersonOutline/></span>
                        <span>تسجيل الدخول</span>
                    </Link>
                }
                <button onClick={handleCloseNav}><IoIosCloseCircleOutline/></button>
            </div>
            <hr />
            <div className={styles.homeContainer}>
                <Link href={"/"} className={styles.homeLink}>
                    <span><FiHome/></span>
                    <span>الرئيسية</span>
                </Link>
                {login ? 
                    <Link href={"/"} className={styles.homeLink}>
                        <span><GrNotes/></span>
                        <span>الملف الشخصي</span>
                    </Link> :
                    ""
                }
            </div>
            <hr />
            <div className={styles.categories}>
                <div className={styles.title}>
                    <h2>كل الاقسام</h2>
                </div>
                <ul>
                    {categorieLinks.map(link => {
                        return (
                            <li key={link.id}>
                                <Link href={`/product/${encodeURIComponent(link.text)}`} className={styles.categorieLink}>
                                    <span>{link.text}</span>
                                    <span><IoIosArrowBack/></span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Nav