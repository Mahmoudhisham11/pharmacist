"use client";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase/firebase";
import { useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { GoIssueClosed } from "react-icons/go";
import { FaTrash } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { BsThreeDots } from "react-icons/bs";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { IoCloseCircleSharp } from "react-icons/io5";

export default function Home() {
  const [headerText, setHeaderText] = useState('الصفحة الرئيسية')
  const [rocket, setRocket] = useState(true)
  const [abitiser, setAbitiser] = useState(false)
  const [active, setActive] = useState(false)
  const [boxShadow, setBoxShadow] = useState(false)
  const [menu, setMenu] = useState(false)
  const [itemName, setItemName] = useState('')
  const [itemprice, setItemprice] = useState('')
  const [itemType, setItemType] = useState('صواريخ')
  const [qty, setQty] = useState('1')
  const [total, setTotal] = useState(0)
  const [cartdb, setCartdb] = useState([])
  const [rocktData, setRocktData] = useState([])
  const [abitiserData, setAbitiserData] = useState([])

  const handelOpenMenu = () => {
    setMenu(true)
  }
  const handelCloseMenu = () => {
    setMenu(false)
  }
  const handelOpenRocket = () => {
    setAbitiser(false)
    setRocket(true)
  }
  const handelOpenAbitiser = () => {
    setRocket(false) 
    setAbitiser(true)
  }
  const handelActive = () => {
    if(active === false) {
      setActive(true)
      setHeaderText('اضف صنف جديد')
    }else {
      setActive(false)
      setHeaderText('الصفحة الرئيسية')
    }
  }

  // FIREBASE CONECTIONS
  const handelAddData = async() => {
    if(itemName !== "" && itemprice !== "") {
      const itemCollection = collection(db, 'itemdb')
      await addDoc(itemCollection, {
        name: itemName,
        price: itemprice,
        type: itemType
      })
      setBoxShadow(true)
    }
    setItemName('')
    setItemprice('')
  }
  // UPLOAD RESET DATA
  const handelAddReset = async() => {
    const resetCollection = collection(db, 'resetdb')
    await addDoc(resetCollection, {
      cart: cartdb,
      total: total
    })
    localStorage.removeItem('cartdb')
  }

  useEffect(() => {
    // GET CART DATA 
    const cart = JSON.parse(localStorage.getItem('cartdb')) || []
    setCartdb(cart)
    const totalPrice = cart.reduce((acc, item) => {return acc + item.itemPrice} , 0)
    setTotal(totalPrice)
    // GET DATA FROM FIREBASE
    const getRocketData = async() => {
      const itemCollection = collection(db, 'itemdb')
      const q = query(itemCollection, where('type', '==', 'صواريخ'))
      const itemSnapShot = await getDocs(q)
      const itemInfo = itemSnapShot.docs.map(doc => ({...doc.data(), id:doc.id}))
      setRocktData(itemInfo)
    }
    const getAbitiserData = async() => {
      const itemCollection = collection(db, 'itemdb')
      const q = query(itemCollection, where('type', '==', 'مقبلات'))
      const itemSnapShot = await getDocs(q)
      const itemInfo = itemSnapShot.docs.map(doc => ({...doc.data(), id:doc.id}))
      setAbitiserData(itemInfo)
    }
    getRocketData()
    getAbitiserData()
  }, [cartdb])
  // ADD ROCKET TO CART FUNCTION 
  const handelAddRocketToCart = (rocket) => {
    const cartArray = JSON.parse(localStorage.getItem('cartdb')) || []
    const finalPrice = (Number(rocket.price) * Number(qty))
    cartArray.push({itemName: rocket.name, itemPrice: finalPrice, itemQty: qty})
    localStorage.setItem('cartdb', JSON.stringify(cartArray))
    setQty('1')
  }
  // ADD ABITISER TO CART FUNCTION 
  const handelAddAbitiserToCart = (rocket) => {
    const cartArray = JSON.parse(localStorage.getItem('cartdb')) || []
    const finalPrice = (Number(rocket.price) * Number(qty))
    cartArray.push({itemName: rocket.name, itemPrice: finalPrice, itemQty: qty})
    localStorage.setItem('cartdb', JSON.stringify(cartArray))
    setQty('1')
  }
  // HANDEL DELETE ITEM FROM CART
  const handelDeletItem = (index) => {
    const updatedCartd = [...cartdb]
    updatedCartd.splice(index, 1)
    setCartdb(updatedCartd)
    localStorage.setItem('cartdb', JSON.stringify(updatedCartd))
    // UPDATE TOTAL 
    const updateTotal = updatedCartd.reduce((acc, item) => {return acc + item.itemPrice}, 0)
    setTotal(updateTotal)
  }
  const handelCloseBox = () => {
    setBoxShadow(false)
  }

  return (
      <main>
        <div className={menu ? "menu-container active" : "menu-container"}>
          <button onClick={handelCloseMenu}><IoCloseCircleSharp /></button>
          <ul>
            <li>
              <a href="/daily">
                <span><IoMdHome  /></span>
                <span>الصفحة الرئيسية</span>
              </a>
            </li>
            <li>
              <a href="/daily">
                <span><FaMoneyCheckDollar /></span>
                <span>الجرد اليومي</span>
              </a>
            </li>
            <li>
              <a href="/daily">
                <span><MdOutlineCalendarMonth  /></span>
                <span>الجرد الشهري</span>
              </a>
            </li>
          </ul>
        </div>
        <div className={boxShadow ? "box-shadow active" : "box-shadow"}>
          <div className="add-done">
            <p><GoIssueClosed /></p>
            <h2>تم اضافة المنتج بنجاح</h2>
            <button onClick={handelCloseBox}>تم</button>
          </div>
        </div>
        <div className="main-content">
          <div className="main-header">
            <div className="right-side">
              <h2>كُفتجي</h2>
            </div>
            <div className="middle-side">
              <ul>
                <li>
                  <a href="/daily" className="header-links">الجرد اليومي</a>
                </li>
                <li>
                  <a href="/" className="header-links">الجرد الشهري</a>
                </li>
              </ul>
            </div>
            <div className="left-side">
              <button onClick={handelActive} className={active ? "active" : ""}><IoIosAddCircle /></button>
              <button onClick={handelOpenMenu}><HiBars3BottomLeft /></button>
            </div>
          </div>
          <div className="title-container">
            <h2 className="title">{headerText}</h2>
          </div>
          <div className={active ? "home-page close" : "home-page"}>
            <div className="control-btn-container">
              <div className="control-btn">
                <button onClick={handelOpenRocket} className={rocket ? "rocket-active" : ""}>الصواريخ</button>
                <button onClick={handelOpenAbitiser} className={abitiser ? "abitiser-active" : ""}>المقبلات</button>
              </div>
            </div>
            <div className={rocket ? "rocket-container" : "rocket-container close"}>
              {
                rocktData.map(rocket => {
                  return(
                    <div className="box" key={rocket.id}>
                      <div className="box-head">
                        <button><BsThreeDots  /></button>
                        <p>LE <span>{rocket.price}</span></p>
                      </div>
                      <div className="box-center">
                        <h2>{rocket.name}</h2>
                      </div>
                      <div className="box-body">
                        <input type="number" value={qty} onChange={(e) => setQty(e.target.value)}/>
                        <button onClick={() => handelAddRocketToCart(rocket)}><FiShoppingBag /></button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className={abitiser ? "abitiser-container open" : "abitiser-container"}>
              {
                abitiserData.map(abitiser => {
                  return(
                    <div className="box" key={abitiser.id}>
                      <div className="box-head">
                        <button><BsThreeDots  /></button>
                        <p>LE <span>{abitiser.price}</span></p>
                      </div>
                      <div className="box-center">
                        <h2>{abitiser.name}</h2>
                      </div>
                      <div className="box-body">
                        <input type="number" value={qty} onChange={(e) => setQty(e.target.value)} placeholder="1"/>
                        <button onClick={() => handelAddAbitiserToCart(abitiser)}><FiShoppingBag /></button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className={active ? "add-page active" : "add-page"}>
            <div className="input-container">
              <label>اسم الصنف:</label>
              <div className="input-div">
                <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)}/>
                <h2><MdOutlineDriveFileRenameOutline /></h2>
              </div>
            </div>
            <div className="input-container">
              <label>سعر الصنف:</label>
              <div className="input-div">
                <input type="number" value={itemprice} onChange={(e) => setItemprice(e.target.value)}/>
                <h2><FaDollarSign /></h2>
              </div>
            </div>
            <div className="input-container">
              <label> نوع الصنف:</label>
              <select onChange={(e) => setItemType(e.target.value)}>
                <option value="صواريخ">صواريخ</option>
                <option value="مقبلات">مقبلات</option>
              </select>
            </div>
            <button onClick={handelAddData}>اضف</button>
          </div>
        </div>
        <div className="reset">
          <div className="title-container">
            <h2 className="title">الفاتورة</h2>
          </div>
          <div className="reset-content">
            <table>
              <thead>
                <tr>
                  <th>الصنف</th>
                  <th>الكمية</th>
                  <th>السعر</th>
                  <th>حذف</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartdb.map(cart => {
                    return(
                      <tr key={cart.index}>
                        <th>{cart.itemName}</th>
                        <th>{cart.itemQty}</th>
                        <th>{cart.itemPrice}</th>
                        <th><button onClick={() => handelDeletItem(cart.index)}><FaTrash /></button></th>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
            <div className="reset-controlse">
              <div className="reset-total">
                <h2>الاجمالي: <span>LE {total}</span></h2>
              </div>
              <div className="reset-btn">
                <button onClick={handelAddReset}>حفظ الفاتورة</button>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}
