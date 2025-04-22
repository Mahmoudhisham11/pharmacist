"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Nav from "../components/Nav/page";
import Header from "../components/Header/page";
import CartBtn from "../components/CartBtn/page";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer/page";
import ChangeBtn from "../components/ChangeBtn/page";

function Change() {
    const [openNav, setOpenNav] = useState(false)
    const [changeData, setChangeData] = useState([])

    useEffect(() => {
        const getAddData = async() => {
            const querySnapshot = await getDocs(collection(db, "userProducts"))
            const productsData = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            setChangeData(productsData)
        }
        getAddData()
    }, [])

    return (
        <div className="main">
            <Nav openNav={openNav} setOpenNav={setOpenNav}/>
            <Header openNav={openNav} setOpenNav={setOpenNav}/>
            <section className={styles.categorySction}>
                <div className={styles.categoryTitle}>
                    <h2>منتجات التبادل</h2>
                </div>
                <div className={styles.categoryContent}>
                    {changeData.map(product => {
                        return(
                            <div className="card" key={product.id}>
                                <div className="cardHead">
                                    <Image src={product.image} fill style={{objectFit: "cover"}} alt="product-image" />
                                </div>
                                <div className="cardBody">
                                    <div className="bodyText">
                                        <Link href={`/changeInfo/${encodeURIComponent(product.id)}`} style={{color: "black", textDecoration: "none"}}>
                                            <p>{product.name}</p>
                                        </Link>
                                        <strong>{product.price} جنية</strong>
                                    </div>
                                    <ChangeBtn/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Change;