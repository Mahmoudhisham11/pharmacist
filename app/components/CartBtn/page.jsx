"use client";
import { useState } from "react";
import styles from "./styles.module.css"
import { useRouter } from "next/navigation";
import { db } from "@/app/firebase";
import { addDoc, collection } from "firebase/firestore";

function CartBtn({product}) {
    const [addedToCart, setAddedToCart] = useState(false)
    const router = useRouter()
    
    const handleAddToCart = async() => {
        if(typeof window !== "undefined") {
            const email = localStorage.getItem("email")
            if(email) {
                await addDoc(collection(db, "cart"), {
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    description: product.description,
                    email
                })
                alert("تم اضافة المنتج الى العربة")
                setAddedToCart(true)
            }else {
                alert("يجب تسجيل الدخول قبل طلب المنتجات")
                router.push("/login")
            }
        }
    }

    return(
        <>
            {!addedToCart ? 
                <button onClick={handleAddToCart} className={styles.btn}>اضف الى العربة</button> :
                <button className={styles.added}>تم اضافة المنتج</button>
            }
        </>
    )
}

export default CartBtn;