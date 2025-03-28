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

export default function Home() {
  const [openNav, setOpenNav] = useState(false)
  const [products, setProducts] = useState([
    {
      id: 1,
      description: "دولي بران مسكن فعال للالم",
      price: 280,
      image: logoImage
    },
    {
      id: 2,
      description: "دولي بران مسكن فعال للالم",
      price:380,
      image: logoImage
    },
    {
      id: 3,
      description: "دولي بران مسكن فعال للالم",
      price: 120,
      image: logoImage
    },
    {
      id: 4,
      description: "دولي بران مسكن فعال للالم",
      price: 10,
      image: logoImage
    },
    {
      id: 5,
      description: "دولي بران مسكن فعال للالم",
      price: 180,
      image: logoImage
    },
  ])

  return (
      <main className="main">
        <Nav openNav={openNav} setOpenNav={setOpenNav}/>
        <Header openNav={openNav} setOpenNav={setOpenNav}/>
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
            <div className={styles.categorieCard}>
              <div className={styles.cardHeader}>
                <Image src={logoImage} className={styles.categorieImage} alt="logoImage"/>
              </div>
              <div className={styles.cardBody}>
                <Link href="/" className={styles.categorieLink}>الادوية</Link>
              </div>
            </div>
            <div className={styles.categorieCard}>
              <div className={styles.cardHeader}>
                <Image src={logoImage} className={styles.categorieImage} alt="logoImage"/>
              </div>
              <div className={styles.cardBody}>
                <Link href="/" className={styles.categorieLink}>العناية بالشعر</Link>
              </div>
            </div>
            <div className={styles.categorieCard}>
              <div className={styles.cardHeader}>
                <Image src={logoImage} className={styles.categorieImage} alt="logoImage"/>
              </div>
              <div className={styles.cardBody}>
                <Link href="/" className={styles.categorieLink}>العناية بالبشرة</Link>
              </div>
            </div>
            <div className={styles.categorieCard}>
              <div className={styles.cardHeader}>
                <Image src={logoImage} className={styles.categorieImage} alt="logoImage"/>
              </div>
              <div className={styles.cardBody}>
                <Link href="/" className={styles.categorieLink}>العناية اليومية</Link>
              </div>
            </div>
            <div className={styles.categorieCard}>
              <div className={styles.cardHeader}>
                <Image src={logoImage} className={styles.categorieImage} alt="logoImage"/>
              </div>
              <div className={styles.cardBody}>
                <Link href="/" className={styles.categorieLink}>الام و الطفل</Link>
              </div>
            </div>
            <div className={styles.categorieCard}>
              <div className={styles.cardHeader}>
                <Image src={logoImage} className={styles.categorieImage} alt="logoImage"/>
              </div>
              <div className={styles.cardBody}>
                <Link href="/" className={styles.categorieLink}>المكياج و الاكسسوارات</Link>
              </div>
            </div>
            <div className={styles.categorieCard}>
              <div className={styles.cardHeader}>
                <Image src={logoImage} className={styles.categorieImage} alt="logoImage"/>
              </div>
              <div className={styles.cardBody}> 
                <Link href="/" className={styles.categorieLink}>المستلزمات الطبية</Link>
              </div>
            </div>
            <div className={styles.categorieCard}>
              <div className={styles.cardHeader}>
                <Image src={logoImage} className={styles.categorieImage} alt="logoImage"/>
              </div>
              <div className={styles.cardBody}>
                <Link href="/" className={styles.categorieLink}>الفيتامينات و المكملات</Link>
              </div>
            </div>
            <div className={styles.categorieCard}>
              <div className={styles.cardHeader}>
                <Image src={logoImage} className={styles.categorieImage} alt="logoImage"/>
              </div>
              <div className={styles.cardBody}>
                <Link href="/" className={styles.categorieLink}>الصحة الجنسية</Link>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.products}>
          <div className={styles.productsTitle}>
            <h2>ادوية مسكنة 💊</h2>
            <Link href="/" className={styles.titleLink}>
              <span>عرض الكل</span>
              <span><IoIosArrowBack/></span>
            </Link>
          </div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={2}
            navigation
            breakpoints={{
              640: {slidesPerView: 2},
              768: {slidesPerView: 3},
              1024: {slidesPerView: 4}
            }}
            className={styles.swiper}
          >
          {products.map(product => {
            return(
              <SwiperSlide className={styles.swiperSlider} key={product.id}>
                  <div className={styles.productsCard}>
                    <Link href={`/test/${product.id}`} className={styles.cardLink}>
                      <div className={styles.cardHeader}>
                        <Image src={product.image} className={styles.categorieImage} alt="logoImgae"/>
                      </div>
                    </Link>
                    <div className={styles.cardBody}>
                      <p>{product.description}</p>
                      <h3>{product.price} جنية</h3>
                      <button>اضف الى العربة</button>
                    </div>
                  </div>
              </SwiperSlide>
            )
          })}
          </Swiper>
        </section>
        <section className={styles.products}>
          <div className={styles.productsTitle}>
            <h2>مكملات 💪</h2>
            <Link href="/" className={styles.titleLink}>
              <span>عرض الكل</span>
              <span><IoIosArrowBack/></span>
            </Link>
          </div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={2}
            navigation
            breakpoints={{
              640: {slidesPerView: 2},
              768: {slidesPerView: 3},
              1024: {slidesPerView: 4}
            }}
            className={styles.swiper}
          >
            <SwiperSlide className={styles.swiperSlider}>
              <Link href="/test" className={styles.cardLink}>
                <div className={styles.productsCard}>
                  <div className={styles.cardHeader}>
                    <Image src={logoImage} className={styles.categorieImage} alt="logoImgae"/>
                  </div>
                  <div className={styles.cardBody}>
                    <p>دولي بران مسكن فعال للالم</p>
                    <h3>108 جنية</h3>
                    <button>اضف الى العربة</button>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlider}>
              <Link href="/test" className={styles.cardLink}>
                <div className={styles.productsCard}>
                  <div className={styles.cardHeader}>
                    <Image src={logoImage} className={styles.categorieImage} alt="logoImgae"/>
                  </div>
                  <div className={styles.cardBody}>
                    <p>دولي بران مسكن فعال للالم</p>
                    <h3>108 جنية</h3>
                    <button>اضف الى العربة</button>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlider}>
              <Link href="/test" className={styles.cardLink}>
                <div className={styles.productsCard}>
                  <div className={styles.cardHeader}>
                    <Image src={logoImage} className={styles.categorieImage} alt="logoImgae"/>
                  </div>
                  <div className={styles.cardBody}>
                    <p>دولي بران مسكن فعال للالم</p>
                    <h3>108 جنية</h3>
                    <button>اضف الى العربة</button>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlider}>
              <Link href="/test" className={styles.cardLink}>
                <div className={styles.productsCard}>
                  <div className={styles.cardHeader}>
                    <Image src={logoImage} className={styles.categorieImage} alt="logoImgae"/>
                  </div>
                  <div className={styles.cardBody}>
                    <p>دولي بران مسكن فعال للالم</p>
                    <h3>108 جنية</h3>
                    <button>اضف الى العربة</button>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlider}>
              <Link href="/test" className={styles.cardLink}>
                <div className={styles.productsCard}>
                  <div className={styles.cardHeader}>
                    <Image src={logoImage} className={styles.categorieImage} alt="logoImgae"/>
                  </div>
                  <div className={styles.cardBody}>
                    <p>دولي بران مسكن فعال للالم</p>
                    <h3>108 جنية</h3>
                    <button>اضف الى العربة</button>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </section>
      </main>
  );
}
