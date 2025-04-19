"use client";
import styles from "./styles.module.css";
import Header from "@/app/components/Header/page";
import Nav from "@/app/components/Nav/page";
import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/app/components/Footer/page";
import Link from "next/link";
import { db } from "@/app/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import CartBtn from "@/app/components/CartBtn/page";

function CategoryName ({params}) {
    const [openNav, setOpenNav] = useState(false)
    const categoryName = decodeURIComponent(params.categoryName)
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getAllProducts = async() => {
            const q = query(collection(db, "products"), where("type", "==", categoryName))
            const querySnapshot = await getDocs(q)
            const productsData = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            setProducts(productsData)
        }
        getAllProducts()
    },[categoryName])

    return (
        <div className="main">
            <Nav openNav={openNav} setOpenNav={setOpenNav}/>
            <Header openNav={openNav} setOpenNav={setOpenNav}/>
            <section className={styles.categorySction}>
                <div className={styles.categoryTitle}>
                    <h2>{categoryName}</h2>
                </div>
                <div className={styles.categoryContent}>
                    {products.map(product => {
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
            </section>
            <Footer/>
        </div>
    )
}

export default CategoryName;