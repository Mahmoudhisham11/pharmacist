"use client";
import styles from "./styles.module.css"
import Link from "next/link";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaImage } from "react-icons/fa6";
import { db } from "@/app/firebase";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

function UserAdd({params}) {
    const userEmail = decodeURIComponent(params.userEmail)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    const  handleUploadImage = async(event) => {
        const file = event.target.files[0]
        if(!file) return
        const data = new FormData()
        data.append("file", file)
        data.append("upload_preset", "pharmastic")
        data.append("cloud_name", "drtdv4iyr")
        const res = await fetch("https://api.cloudinary.com/v1_1/drtdv4iyr/image/upload", {
            method: "POST",
            body: data
        })
        const uploadedImageUrl = await res.json()
        setImage(uploadedImageUrl.url)
    }

    const handleAddProduct = async() => {
        if(name !== "" && description !== "") {
            await addDoc(collection(db, "userProducts"), {
                description,
                name,
                image,
                email: userEmail
            })
            alert("تم اضافة المنتج بنجاح")
            setName("")
            setDescription("")
        }
    }

    return(
        <div className="main">
            <header className={styles.header}>
                <div className={styles.rightSide}>
                    <Link href={"/"} onClick={() => typeof window !== "undefined" ? localStorage.removeItem("email") : ""} className={styles.headerLink}><RiLogoutCircleLine/></Link>
                </div>
                <div className={styles.middleSide}>
                    <h2>اضف منتج للتبادل</h2>
                </div>
                <div className={styles.leftSide}>
                    <Link href={`/user/${encodeURIComponent(userEmail)}`} className={styles.headerLink}><MdKeyboardArrowLeft/></Link>
                </div>
            </header>
            <div className={styles.addContent}>
                <div className={styles.imageInput}>
                    <label htmlFor="productImage">
                        <span><FaImage/></span>
                        <span>اضف صورة المنتج</span>
                    </label>
                    <input type="file" id="productImage" hidden onChange={handleUploadImage} />
                </div>
                <div className="inputContainer">
                    <label>اسم المنتج :</label>
                    <input value={name} type="text" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="inputContainer">
                    <label>وصف المنتج :</label>
                    <input value={description} type="text" onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <button className={styles.addBtn} onClick={handleAddProduct}>اضف المنتج</button>
            </div>
        </div>
    )
}

export default UserAdd;