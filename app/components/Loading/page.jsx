"use client";
import styles from "./styles.module.css";
import Image from "next/image";
import animationImage from "../../../public/images/buy-medicine.gif"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Loading() {
    const textOneRef = useRef(null)
    const textTwoRef = useRef(null)
    const loadingRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(textOneRef.current, {opacity: 0, y: 20}, {opacity: 1, y: 0, delay: .5, duration: 1})
        gsap.fromTo(textTwoRef.current, {opacity: 0, y: 20}, {opacity: 1, y: 0, delay: 1, duration: 1})
        gsap.fromTo(loadingRef.current, {y: 0}, {y: -1000, delay: 3.5, duration: 1})
    } ,[])

    return(
        <div ref={loadingRef} className={styles.loading}>
            <Image src={animationImage} className={styles.animationImage} alt="animationImage"/>
            <div className={styles.text}>
                <p ref={textOneRef}>صيدلاني</p>
                <p ref={textTwoRef}>الصيدلية بين ايديك</p>
            </div>
        </div>
    )
}

export default Loading;