"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import logoImage from "../../public/images/logo-removebg-preview.png"
import { CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import CartBtn from "../components/CartBtn/page";
import Footer from "../components/Footer/page";

function Search() {
    const [login, setLogin] = useState(false) 
    const [userEmail, setUserEmail] = useState('')
    const [products, setProducts] = useState([])
    const [filterd, setFilterd] = useState([])
    const [search, setSearch] = useState('')
    
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
        const getAllData = async() => {
            const querySnapshot = await getDocs(collection(db, "products"))
            const productsData = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            setProducts(productsData)
        }
        const filterdData = async() => {
            const q = query(collection(db, "products"), where("name", "==", search))
            const querySnapshot = await getDocs(q)
            const productsData = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            setFilterd(productsData)
        }
        getAllData()
        filterdData()   
    }, [userEmail, search])

    return(
        <div className="main">
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
                    <div className={styles.middleSide}>
                        <p><CiSearch  /></p>
                        <input list="products" placeholder="ابحث عن المنتج" onChange={(e) => setSearch(e.target.value)}/>
                        <datalist id="products">
                            {products.map(product => {
                                return(
                                    <option key={product.id} value={product.name}/>
                                )
                            })}
                        </datalist>
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
        <div className={styles.searchContent}>
            {filterd.map(product => {
                return(
                    <div className="card" key={product.id}>
                        <div className="cardHead">
                            <Image src={product.image} fill style={{objectFit: "cover"}} alt="product-image" />
                        </div>
                        <div className="cardBody">
                            <div className="bodyText">
                                <Link href={`/info/${encodeURIComponent(product.id)}`} style={{color: "black", textDecoration: "none"}}>
                                    <p>{product.name}</p>
                                </Link>
                                <strong>{product.price} جنية</strong>
                            </div>
                            <CartBtn product={product}/>
                        </div>
                    </div>
                )
            })}
        </div>
        <Footer/>
        </div>
    )
}

export default Search;