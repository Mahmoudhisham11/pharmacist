"use client";
import Header from "@/app/components/Header/page";
import styles from "./styles.module.css";
import Nav from "@/app/components/Nav/page";
import Link from "next/link";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaImage } from "react-icons/fa6";
import { useState } from "react";
import { db } from "@/app/firebase";
import { addDoc, collection } from "firebase/firestore";

function Add() {
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [type, setType] = useState('الادوية')

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
        if(name !== "" && price > 0 && description !== "") {
            await addDoc(collection(db, "products"), {
                name,
                description,
                price,
                type,
                image,
            })
            alert("تم اضافة المنتج بنجاح")
            setName("")
            setDescription("")
            setPrice("")
            setType("الادوية")
        }else {
            alert("حدث خطاء اثناء اضافة المنتج")
        }
    }

    return(
        <div className="main">
            <header className={styles.header}>
                <div className={styles.rightSide}>
                    <Link href={"/"} onClick={() => localStorage.removeItem("email")} className={styles.headerLink}><RiLogoutCircleLine/></Link>
                </div>
                <div className={styles.middleSide}>
                    <h2>اضف منتج جديد</h2>
                </div>
                <div className={styles.leftSide}>
                    <Link href={"/admin/products"} className={styles.headerLink}><MdKeyboardArrowLeft/></Link>
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
                <div className="inputContainer">
                    <label>سعر المنتج :</label>
                    <input value={price} type="number" onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="inputContainer">
                    <label>تصنيف المنتج :</label>
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="الادوية">الادوية</option>
                        <option value="العناية بالبشرة">العناية بالبشرة</option>
                        <option value="العناية بالشعر">العناية بالشعر</option>
                        <option value="العناية اليومية">العناية اليومية</option>
                        <option value="الام و الطفل">الام و الطفل</option>
                        <option value="المكياج و الاكسسوارات">المكياج و الاكسسوارات</option>
                        <option value="الفيتامينات و المكملات">الفيتامينات و المكملات</option>
                    </select>
                </div>
                <button className={styles.addBtn} onClick={handleAddProduct}>اضف المنتج</button>
            </div>
        </div>
    )
}

export default Add;