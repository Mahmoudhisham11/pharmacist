"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdKeyboardArrowLeft } from "react-icons/md";
import logo from "../../../public/images/images medical.png"
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { db } from "@/app/firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";


function Products() {
    const [products, setProducts] = useState([])

    useState(() => {
        const getAllProducts = async() => {
            const productsSnapshot = await getDocs(collection(db, "products"))
            const productsData = productsSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            setProducts(productsData)
        }
        getAllProducts()
    }, [])

    const handleDelete = async(id) => {
        const delValue = doc(collection(db, "products"), id)
        await deleteDoc(delValue)
    }

    return(
        <div className="main">
            <header className={styles.header}>
                <div className={styles.rightSide}>
                    <Link href={"/"} onClick={() => typeof window !== "undefined" ? localStorage.removeItem("email") : ""} className={styles.headerLink}><RiLogoutCircleLine/></Link>
                </div>
                <div className={styles.middleSide}>
                    <h2>المنتجات</h2>
                </div>
                <div className={styles.leftSide}>
                    <Link href={"/"} className={styles.headerLink}><MdKeyboardArrowLeft/></Link>
                </div>
            </header>
            <div className={styles.productsContent}>
            {products.map(product => {
                return (
                    <div className="card" key={product.id}>
                        <div className="cardHead">
                            <Image src={product.image} fill style={{objectFit: "cover"}} alt="product-image" />
                        </div>
                        <div className="cardBody">
                            <div className="bodyText">
                                <p>{product.name}</p>
                                <strong>{product.price}</strong>
                            </div>
                            <button className={styles.btn} onClick={() => handleDelete(product.id)}>حذف</button>
                        </div>
                    </div>
                )
            })}
            <Link href={"/admin/add"} className={styles.addBtn}>
                <span>اضف منتج جديد</span>
                <span><FaPlus/></span>
            </Link>
            </div>
        </div>
    )
}

export default Products;