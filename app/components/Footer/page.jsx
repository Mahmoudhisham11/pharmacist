"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import logoImage from "../../../public/images/logo-removebg-preview.png"

function Footer() {
    return(
        <footer className={styles.footer}>
        <div className={styles.top}>
            <div className={styles.rightSide}>
            <div className={styles.footerTitle}>
                <Link href={"/"} className={styles.footerLink}>
                <span>
                    <Image src={logoImage} className={styles.logoImage} alt="logo image"/>
                </span>
                <span>صيدلاني</span>
                </Link>
            </div>
            <div className={styles.rightContent}>
                <p>اطلب الان ادويتك من الصيدلية بسهولة اطلب ادويتك من صيدلية اونلاين في مصر</p>
            </div>
            </div>
            <div className={styles.middleSide}>
            <div className={styles.title}>
                <h2>المزيد عنا</h2>
            </div>
            <div className={styles.middleContent}>
                <Link href={"/"} className={styles.footerLinks}>عن صيدلاني</Link>
                <Link href={"/"} className={styles.footerLinks}>المدونة</Link>
                <Link href={"/"} className={styles.footerLinks}>تواصل معنا</Link>
                <Link href={"/"} className={styles.footerLinks}>هل تملك صدلية؟</Link>
            </div>
            </div>
            <div className={styles.leftSide}>
            <div className={styles.title}>
                <h2>سهلنا عليك</h2>
            </div>
            <div className={styles.middleContent}>
                <Link href={"/"} className={styles.footerLinks}>ارسال الروشتة</Link>
                <Link href={"/"} className={styles.footerLinks}>الروشتة الشهرية</Link>
            </div>
            </div>
        </div>
        <hr />
        <div className={styles.bottom}>
            <h2>&copy; - 2025 صيدلاني</h2>
        </div>
        </footer>
    )
}

export default Footer;