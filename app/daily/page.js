'use client';
import { collection, getDocs, docs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { IoIosArrowDropleftCircle } from "react-icons/io";

function Test() {
    const [totalMoney, setTotalMoney] = useState(0)
    const [totalReset, setTotalReset] = useState(0)
    const [resetdb, setResetdb] = useState([])

    // GET DATA FROM FIREBASE
    useEffect(() => {
        const getData = async() => {
            const resetCollection = collection(db, 'resetdb')
            const resetSnapshot = await getDocs(resetCollection)
            const resetInfo = resetSnapshot.docs.map(doc => ({...doc.data(), id:doc.id}))
            setResetdb(resetInfo)
            const resetsTotal = resetSnapshot.size
            setTotalReset(resetsTotal)
            let subTotal = 0
            resetSnapshot.forEach((doc) => {
                subTotal += doc.data().total 
            })
            setTotalMoney(subTotal)
        }
        getData()
    }, [])

    return(
        <div className="daily-container">
            <div className="daily-header">
                <div className="right-side">
                    <h2>كُفتجي</h2>
                </div>
                <div className="left-side">
                    <div className="total-resets">
                        <p>{totalReset}</p>
                    </div>
                    <div className="total-money">
                        <p>LE <span>{totalMoney}</span></p>
                    </div>
                    <a href="/"><IoIosArrowDropleftCircle /></a>
                </div>
            </div>
            <div className="title-container">
                <h2 className="title">الجرد اليومي</h2>
            </div>
            <div className="daily-content">
                {
                    resetdb.map(reset => {
                        return(
                            <table key={reset.id}>
                                <thead>
                                    <tr>
                                        <th>الصنف</th>
                                        <th>الكمية</th>
                                        <th>السعر</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        reset.cart.map((item, index) => {
                                            return(
                                                <tr key={index}>
                                                    <th>{item.itemName}</th>
                                                    <th>{item.itemQty}</th>
                                                    <th>{item.itemPrice}</th>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th colSpan="2">الاجمالي</th>
                                        <th>{reset.total}</th>
                                    </tr>
                                </tfoot>
                            </table>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Test;