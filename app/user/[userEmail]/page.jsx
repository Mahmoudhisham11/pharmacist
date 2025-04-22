"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { db } from "@/app/firebase";
import { collection, getDocs, query, where,deleteDoc, doc } from "firebase/firestore";

function UserEmail({params}) {
    const userEmail = decodeURIComponent(params.userEmail)
    const [userData, setUserData] = useState([])
    const [userProducts, setUserProducts] = useState([])

    useEffect(() => {
        const getUserData = async() => {
            const q = query(collection(db, "users"), where("email", "==", userEmail))
            const querySnapshot = await getDocs(q)
            const userList = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            setUserData(userList)
        }
        const getUserProducts = async() => {
            const q = query(collection(db, "userProducts"), where("email", "==", userEmail))
            const querySnapshot = await getDocs(q)
            const userList = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            setUserProducts(userList)
        }
        getUserData()
        getUserProducts()
    }, [userEmail])

        const handleDelete = async(id) => {
            const delValue = doc(collection(db, "userProducts"), id)
            await deleteDoc(delValue)
        }

    return(
        <div className="main">
            <header className={styles.header}>
                <div className={styles.rightSide}>
                    <Link href={"/"} onClick={() => typeof window !== "undefined" ? localStorage.removeItem("email") : ""} className={styles.headerLink}><RiLogoutCircleLine/></Link>
                </div>
                <div className={styles.middleSide}>
                    {userData.map(user => {return(<h2 key={user.id}>مرحبا : {user.userName}</h2>)})}
                </div>
                <div className={styles.leftSide}>
                    <Link href={"/"} className={styles.headerLink}><MdKeyboardArrowLeft/></Link>
                </div>
            </header>
            <div className={styles.productsContent}>
                {userProducts.map(product => {
                    return(
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
            </div>
            <Link href={`/userAdd/${encodeURIComponent(userEmail)}`} className={styles.addBtn}>
                <span>اضف منتج جديد</span>
                <span><FaPlus/></span>
            </Link>
        </div>
    )
}

export default UserEmail;