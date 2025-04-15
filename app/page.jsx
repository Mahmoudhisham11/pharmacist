"use client";
import styles from "./styles.module.css"
import Header from "./components/Header/page";
import Image from "next/image";
import Link from "next/link";
import heroSlider from "../public/images/images.png"
import medicalImage from "./../public/images/images medical.png"
import ashwagandha from "../public/images/ashwagandha.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BsPinAngleFill } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import logoImage from "../public/images/logo-removebg-preview.png"
import roshitaImage from "../public/images/roshitaImage.png"
import { useEffect, useState } from "react";
import Nav from "./components/Nav/page";
import Loading from "./components/Loading/page";
import map from "../public/images/map.gif"
import medicine from "../public/images/medicine (1).gif"
import snack from "../public/images/snacke.gif"
import chat from "../public/images/chat.gif"
import bnadol1 from "../public/images/bnadol1.PNG"
import momImage from "../public/images/mom1.PNG"
import heareCare from "../public/images/heareCare1.PNG"
import skenCare from "../public/images/skenCare1.PNG"
import dayleCare from "../public/images/dayleCare1.PNG"
import makeup from "../public/images/makeup1.PNG"
import sub from "../public/images/sub1.PNG"
import { FaMarker } from "react-icons/fa";
import Footer from "./components/Footer/page";
import { db } from "./firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function Home() {
  const productsCollection = collection(db, "products")
  const [openNav, setOpenNav] = useState(false)
  const [products, setProducts] = useState([])
  const [sections, setSections] = useState([
    {
      id: 1,
      text: "الادوية",
      image: bnadol1
    },
    {
      id: 2,
      text: "العناية بالشعر",
      image: heareCare
    },
    {
      id: 3,
      text: "العناية بالبشرة",
      image: skenCare
    },
    {
      id: 4,
      text: "العناية اليومية",
      image: dayleCare
    },
    {
      id: 5,
      text: "الام و الطفل",
      image: momImage
    },
    {
      id: 6,
      text: "المكياج و الاكسسوارات",
      image: makeup
    },
    {
      id: 6,
      text: "الفيتامينات و المكملات",
      image: sub
    },
  ])
  
  useEffect(() => {
    const getAllProducts = async() => {
      const productsSnapshot = await getDocs(productsCollection)
      const productsList = productsSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
      setProducts(productsList)
    }
    getAllProducts()
  }, [productsCollection])

  return (
      <main className="main">
        {/* <Loading/> */}
        <Nav openNav={openNav} setOpenNav={setOpenNav}/>
        <Header openNav={openNav} setOpenNav={setOpenNav}/>
        <div className="mainContainer">
          <section className={styles.hero}>
            <div className={styles.sliderContainer}>
              <Swiper
                autoplay={{delay: 2000, disableOnInteraction: false}}
                cssMode={true}
                navigation={false}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className={styles.swiper}
              >
                <SwiperSlide className={styles.swiperSlider}>
                  <div className={styles.swiperContent}>
                    <Image src={heroSlider} fill style={{objectFit: "cover", borderRadius: "8px"}} alt="heroSlider"/>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlider}>
                  <div className={styles.swiperContent}>
                    <Image src={medicalImage} fill style={{objectFit: "cover", borderRadius: "8px"}} alt="heroSlider"/>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlider}>
                  <div className={styles.swiperContent}>
                    <Image src={ashwagandha} fill style={{objectFit: "cover", borderRadius: "8px"}} alt="heroSlider"/>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className={styles.heroImages}>
              <Image src={heroSlider} style={{borderRadius: "8px", width: "300px", height: "150px"}} alt="heroSlider"/>
              <Image src={medicalImage} style={{borderRadius: "8px", width: "300px", height: "150px"}} alt="heroSlider"/>
            </div>
          </section>
          <div className={styles.textContainer}>
            <div className={styles.textInfo}>
              <p>جميع الادوية التي يتم صرفها من صيدليات مرخصة من وزارة الصحة و بوجود وصفة طبية من طبيب مختص</p>
            </div>
          </div>
          <section className={styles.bannerContainer}>
            <div className={styles.banner}>
              <div className={styles.bannerHeader}>
                <h2>
                  <span><AiFillThunderbolt/></span>
                  <span>توصيل فوري <span>90 دقيقة</span></span>
                </h2>
              </div>
              <div className={styles.content}>
                <div className={styles.info}>
                  <h2>اطلب بالروشتة</h2>
                  <p>توصيل فوري و امن من الصيدلية</p>
                  <button>
                    <span><BsPinAngleFill/></span>
                    <span>ارفع</span>
                  </button>
                </div>
                <Image src={roshitaImage} className={styles.roshitaImage} alt="roshita"/>
              </div>
            </div>
          </section>
          <section className={styles.categorieContainer}>
            <div className={styles.title}>
              <h2>الاقسام</h2>
            </div>
            <div className={styles.categorieContent}>
              {sections.map(section => {
                return (
                <div className={styles.categorieCard} key={section.id}>
                  <div className={styles.cardHeader}>
                    <Image src={section.image} className={styles.categorieImage} alt="logoImage"/>
                  </div>
                  <div className={styles.cardBody}>
                    <Link href={`/product/${section.text}`} className={styles.categorieLink}>{section.text}</Link>
                  </div>
                </div>
                )
              })}
            </div>
          </section>
          {sections.map(section => {
            return(
              <section className={styles.products} key={section.id}>
                <div className={styles.productsTitle}>
                  <h2>{section.text}</h2>
                  <Link href={`/product/${section.text}`} className={styles.titleLink}>
                    <span>عرض الكل</span>
                    <span><IoIosArrowBack/></span>
                  </Link>
                </div>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={80}
                  slidesPerView={1.5}
                  navigation
                  breakpoints={{
                    640: {slidesPerView: 2},
                    768: {slidesPerView: 3},
                    1024: {slidesPerView: 4}
                  }}
                  className={styles.swiper}
                >
                {products.filter((product) => product.type === section.text).map(product => {
                  return(
                  <SwiperSlide className={styles.swiperSlider} key={product.id}>
                    <div className="card">
                        <div className="cardHead">
                          <Image src={product.image} fill style={{objectFit: "cover"}}  alt="logoImgae"/>
                        </div>
                        <div className="cardBody">
                          <div className="bodyText">
                            <Link href={`/info/${encodeURIComponent(product.id)}`} className={styles.cardLink}>
                              <p>{product.name}</p>
                            </Link>
                            <strong>{product.price} جنية</strong>
                          </div>
                          <button className={styles.btn}>اضف الى العربة</button>
                        </div>
                    </div>
                  </SwiperSlide>
                  )
                })}
                </Swiper>
            </section>
            )
          })}
          <section className={styles.imagesContainer}>
            <div className={styles.imagesTitle}>
              <h2>نحن نغطي كل احتياجاتك من الصيدلية</h2>
            </div>
            <div className={styles.imagesContent}>
              <div className={styles.card}>
                <div className={styles.cardHeade}>
                  <Image src={map} className={styles.cardImage} alt="card iamge" />
                  
                </div>
                <div className={styles.cardBody}>
                  <h2>25</h2>
                  <p>مدينة</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardHeade}>
                  <Image src={snack} className={styles.cardImage} alt="card iamge" />
                  
                </div>
                <div className={styles.cardBody}>
                  <h2>1000+</h2>
                  <p>صيدلية</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardHeade}>
                  <Image src={medicine} className={styles.cardImage} alt="card iamge" />
                </div>
                <div className={styles.cardBody}>
                  <h2>41K+</h2>
                  <p>منتج مرخص</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardHeade}>
                  <Image src={chat} className={styles.cardImage} alt="card iamge" />
                  
                </div>
                <div className={styles.cardBody}>
                  <h2>24/7</h2>
                  <p>تواصل مع صيدلي</p>
                </div>
              </div>
            </div>
          </section>
        </div>
          <section className={styles.reviews}>
            <div className={styles.reviewsTitle}>
              <h2>ما رائي عملاء صيدلي في خدماتنا</h2>
            </div>
            <div className={styles.reviewsContent}>
              <Swiper 
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                breakpoints={{
                  640: {slidesPerView: 1},
                  768: {slidesPerView: 3},
                  1024: {slidesPerView: 4}
                }}
                className={styles.swiper}
              >
                <SwiperSlide className={styles.swiperSlider}>
                  <div className={styles.reviewCard}>
                    <div className={styles.cardIcon}>
                      <p><FaMarker/></p>
                    </div>
                    <div className={styles.cardHeade}>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus deleniti eum alias, magnam corrupti hic vitae, nisi, ea quia tempore dignissimos exercitationem animi ipsum adipisci necessitatibus quibusdam ab quas error!</p>
                    </div>
                    <hr />
                    <div className={styles.cardBody}>
                      <h2>mahmoud hisham</h2>
                      <p>29/3/2025</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlider}>
                  <div className={styles.reviewCard}>
                    <div className={styles.cardIcon}>
                      <p><FaMarker/></p>
                    </div>
                    <div className={styles.cardHeade}>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus deleniti eum alias, magnam corrupti hic vitae, nisi, ea quia tempore dignissimos exercitationem animi ipsum adipisci necessitatibus quibusdam ab quas error!</p>
                    </div>
                    <hr />
                    <div className={styles.cardBody}>
                      <h2>mahmoud hisham</h2>
                      <p>29/3/2025</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlider}>
                  <div className={styles.reviewCard}>
                    <div className={styles.cardIcon}>
                      <p><FaMarker/></p>
                    </div>
                    <div className={styles.cardHeade}>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus deleniti eum alias, magnam corrupti hic vitae, nisi, ea quia tempore dignissimos exercitationem animi ipsum adipisci necessitatibus quibusdam ab quas error!</p>
                    </div>
                    <hr />
                    <div className={styles.cardBody}>
                      <h2>mahmoud hisham</h2>
                      <p>29/3/2025</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlider}>
                  <div className={styles.reviewCard}>
                    <div className={styles.cardIcon}>
                      <p><FaMarker/></p>
                    </div>
                    <div className={styles.cardHeade}>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus deleniti eum alias, magnam corrupti hic vitae, nisi, ea quia tempore dignissimos exercitationem animi ipsum adipisci necessitatibus quibusdam ab quas error!</p>
                    </div>
                    <hr />
                    <div className={styles.cardBody}>
                      <h2>mahmoud hisham</h2>
                      <p>29/3/2025</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlider}>
                  <div className={styles.reviewCard}>
                    <div className={styles.cardIcon}>
                      <p><FaMarker/></p>
                    </div>
                    <div className={styles.cardHeade}>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus deleniti eum alias, magnam corrupti hic vitae, nisi, ea quia tempore dignissimos exercitationem animi ipsum adipisci necessitatibus quibusdam ab quas error!</p>
                    </div>
                    <hr />
                    <div className={styles.cardBody}>
                      <h2>mahmoud hisham</h2>
                      <p>29/3/2025</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlider}>
                  <div className={styles.reviewCard}>
                    <div className={styles.cardIcon}>
                      <p><FaMarker/></p>
                    </div>
                    <div className={styles.cardHeade}>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus deleniti eum alias, magnam corrupti hic vitae, nisi, ea quia tempore dignissimos exercitationem animi ipsum adipisci necessitatibus quibusdam ab quas error!</p>
                    </div>
                    <hr />
                    <div className={styles.cardBody}>
                      <h2>mahmoud hisham</h2>
                      <p>29/3/2025</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlider}>
                  <div className={styles.reviewCard}>
                    <div className={styles.cardIcon}>
                      <p><FaMarker/></p>
                    </div>
                    <div className={styles.cardHeade}>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus deleniti eum alias, magnam corrupti hic vitae, nisi, ea quia tempore dignissimos exercitationem animi ipsum adipisci necessitatibus quibusdam ab quas error!</p>
                    </div>
                    <hr />
                    <div className={styles.cardBody}>
                      <h2>mahmoud hisham</h2>
                      <p>29/3/2025</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlider}>
                  <div className={styles.reviewCard}>
                    <div className={styles.cardIcon}>
                      <p><FaMarker/></p>
                    </div>
                    <div className={styles.cardHeade}>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus deleniti eum alias, magnam corrupti hic vitae, nisi, ea quia tempore dignissimos exercitationem animi ipsum adipisci necessitatibus quibusdam ab quas error!</p>
                    </div>
                    <hr />
                    <div className={styles.cardBody}>
                      <h2>mahmoud hisham</h2>
                      <p>29/3/2025</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlider}>
                  <div className={styles.reviewCard}>
                    <div className={styles.cardIcon}>
                      <p><FaMarker/></p>
                    </div>
                    <div className={styles.cardHeade}>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus deleniti eum alias, magnam corrupti hic vitae, nisi, ea quia tempore dignissimos exercitationem animi ipsum adipisci necessitatibus quibusdam ab quas error!</p>
                    </div>
                    <hr />
                    <div className={styles.cardBody}>
                      <h2>mahmoud hisham</h2>
                      <p>29/3/2025</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlider}>
                  <div className={styles.reviewCard}>
                    <div className={styles.cardIcon}>
                      <p><FaMarker/></p>
                    </div>
                    <div className={styles.cardHeade}>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus deleniti eum alias, magnam corrupti hic vitae, nisi, ea quia tempore dignissimos exercitationem animi ipsum adipisci necessitatibus quibusdam ab quas error!</p>
                    </div>
                    <hr />
                    <div className={styles.cardBody}>
                      <h2>mahmoud hisham</h2>
                      <p>29/3/2025</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlider}>
                  <div className={styles.reviewCard}>
                    <div className={styles.cardIcon}>
                      <p><FaMarker/></p>
                    </div>
                    <div className={styles.cardHeade}>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus deleniti eum alias, magnam corrupti hic vitae, nisi, ea quia tempore dignissimos exercitationem animi ipsum adipisci necessitatibus quibusdam ab quas error!</p>
                    </div>
                    <hr />
                    <div className={styles.cardBody}>
                      <h2>mahmoud hisham</h2>
                      <p>29/3/2025</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlider}>
                  <div className={styles.reviewCard}>
                    <div className={styles.cardIcon}>
                      <p><FaMarker/></p>
                    </div>
                    <div className={styles.cardHeade}>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus deleniti eum alias, magnam corrupti hic vitae, nisi, ea quia tempore dignissimos exercitationem animi ipsum adipisci necessitatibus quibusdam ab quas error!</p>
                    </div>
                    <hr />
                    <div className={styles.cardBody}>
                      <h2>mahmoud hisham</h2>
                      <p>29/3/2025</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlider}>
                  <div className={styles.reviewCard}>
                    <div className={styles.cardIcon}>
                      <p><FaMarker/></p>
                    </div>
                    <div className={styles.cardHeade}>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus deleniti eum alias, magnam corrupti hic vitae, nisi, ea quia tempore dignissimos exercitationem animi ipsum adipisci necessitatibus quibusdam ab quas error!</p>
                    </div>
                    <hr />
                    <div className={styles.cardBody}>
                      <h2>mahmoud hisham</h2>
                      <p>29/3/2025</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlider}>
                  <div className={styles.reviewCard}>
                    <div className={styles.cardIcon}>
                      <p><FaMarker/></p>
                    </div>
                    <div className={styles.cardHeade}>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus deleniti eum alias, magnam corrupti hic vitae, nisi, ea quia tempore dignissimos exercitationem animi ipsum adipisci necessitatibus quibusdam ab quas error!</p>
                    </div>
                    <hr />
                    <div className={styles.cardBody}>
                      <h2>mahmoud hisham</h2>
                      <p>29/3/2025</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlider}>
                  <div className={styles.reviewCard}>
                    <div className={styles.cardIcon}>
                      <p><FaMarker/></p>
                    </div>
                    <div className={styles.cardHeade}>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus deleniti eum alias, magnam corrupti hic vitae, nisi, ea quia tempore dignissimos exercitationem animi ipsum adipisci necessitatibus quibusdam ab quas error!</p>
                    </div>
                    <hr />
                    <div className={styles.cardBody}>
                      <h2>mahmoud hisham</h2>
                      <p>29/3/2025</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </section>
        <Footer/>
      </main>
  );
}
