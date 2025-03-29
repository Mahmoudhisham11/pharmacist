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
import { FaMarker } from "react-icons/fa";

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
        <Loading/>
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
        <section className={styles.prands}>
          <div className={styles.productsTitle}>
            <h2>الماركات</h2>
          </div>
          <div className={styles.prandsContent}>
            <Link className={styles.prandLink} href={"/"}><Image src={logoImage} alt="logoImage" className={styles.categorieImage}/></Link>
            <Link className={styles.prandLink} href={"/"}><Image src={logoImage} alt="logoImage" className={styles.categorieImage}/></Link>
            <Link className={styles.prandLink} href={"/"}><Image src={logoImage} alt="logoImage" className={styles.categorieImage}/></Link>
            <Link className={styles.prandLink} href={"/"}><Image src={logoImage} alt="logoImage" className={styles.categorieImage}/></Link>
            <Link className={styles.prandLink} href={"/"}><Image src={logoImage} alt="logoImage" className={styles.categorieImage}/></Link>
            <Link className={styles.prandLink} href={"/"}><Image src={logoImage} alt="logoImage" className={styles.categorieImage}/></Link>
            <Link className={styles.prandLink} href={"/"}><Image src={logoImage} alt="logoImage" className={styles.categorieImage}/></Link>
            <Link className={styles.prandLink} href={"/"}><Image src={logoImage} alt="logoImage" className={styles.categorieImage}/></Link>
            <Link className={styles.prandLink} href={"/"}><Image src={logoImage} alt="logoImage" className={styles.categorieImage}/></Link>
          </div>
          <div className={styles.btnContainer}>
            <Link href={"/"} className={styles.btnLink}>عرض الكل</Link>
          </div>
        </section>
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
        <footer className={styles.footer}>
          <div className={styles.top}>
            <div className={styles.rightSide}>
              <div className={styles.footerTitle}>
                <Link href={"/"} className={styles.footerLink}>
                  <span>
                    <Image src={logoImage} className={styles.logoImage} alt="logo image"/>
                  </span>
                  <span>صيدلاني</span>
                </Link>
              </div>
              <div className={styles.rightContent}>
                <p>اطلب الان ادويتك من الصيدلية بسهولة اطلب ادويتك من صيدلية اونلاين في مصر</p>
              </div>
            </div>
            <div className={styles.middleSide}>
              <div className={styles.title}>
                <h2>المزيد عنا</h2>
              </div>
              <div className={styles.middleContent}>
                <Link href={"/"} className={styles.footerLinks}>عن صيدلاني</Link>
                <Link href={"/"} className={styles.footerLinks}>المدونة</Link>
                <Link href={"/"} className={styles.footerLinks}>تواصل معنا</Link>
                <Link href={"/"} className={styles.footerLinks}>هل تملك صدلية؟</Link>
              </div>
            </div>
            <div className={styles.leftSide}>
              <div className={styles.title}>
                <h2>سهلنا عليك</h2>
              </div>
              <div className={styles.middleContent}>
                <Link href={"/"} className={styles.footerLinks}>ارسال الروشتة</Link>
                <Link href={"/"} className={styles.footerLinks}>الروشتة الشهرية</Link>
              </div>
            </div>
          </div>
          <hr />
          <div className={styles.bottom}>
            <h2>&copy; - 2025 صيدلاني</h2>
          </div>
        </footer>
      </main>
  );
}
