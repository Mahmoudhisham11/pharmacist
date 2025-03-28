"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiHome } from "react-icons/fi";
import { GrNotes } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

function Nav({openNav, setOpenNav}) {
    const [categorieLinks, setCategorieLinks] = useState([
        {   id: 1,
            text: 'الادوية',
            link: "/test"
        },
        {   id: 2,
            text: 'العناية بالشعر',
            link: "/test"
        },
        {   id: 3,
            text: 'العناية بالبشرة',
            link: "/test"
        },
        {   id: 4,
            text: 'العناية اليومية',
            link: "/test"
        },
        {   id: 5,
            text: 'الام و الطفل',
            link: "/test"
        },
        {   id: 6,
            text: 'المكياج و الاكسسوارات',
            link: "/test"
        },
        {   id: 7,
            text: 'المستلزمات الطبية',
            link: "/test"
        },
        {   id: 8,
            text: 'الفيتامينات و المكملات',
            link: "/test"
        },
        {   id: 9,
            text: 'الصحة الجنسية',
            link: "/test"
        },
    ])
    const handleCloseNav = () => {
        setOpenNav(false)
    }

    return(
        <nav className={openNav ? `${styles.nav} ${styles.open}` : `${styles.nav}`}>
            <div className={styles.top}>
                <Link href={"/"} className={styles.loginLink}>
                    <span><IoPersonOutline/></span>
                    <span>تسجيل الدخول</span>
                </Link>
                <button onClick={handleCloseNav}><IoIosCloseCircleOutline/></button>
            </div>
            <hr />
            <div className={styles.homeContainer}>
                <Link href={"/"} className={styles.homeLink}>
                    <span><FiHome/></span>
                    <span>الرئيسية</span>
                </Link>
                <Link href={"/"} className={styles.homeLink}>
                    <span><GrNotes/></span>
                    <span>الروشتة</span>
                </Link>
                <Link href={"/"} className={styles.homeLink}>
                    <span><GrNotes/></span>
                    <span>من نحن</span>
                </Link>
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
                                <Link href={link.link} className={styles.categorieLink}>
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