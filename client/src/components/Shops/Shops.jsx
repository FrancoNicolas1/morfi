import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { Navigation } from "swiper";
import {
    Container,
    Box,
    Title,
    Image,
  } from './shop.styled';

export default function Shops (){
    return(
        <>
        <Container>
            <Box>
                <Title>
                <h1>Nuestros comercios </h1>
                </Title>
            </Box>
         <Swiper slidesPerView={4} spaceBetween={30} navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="boxSlider">
            <Image src="https://brandemia.org/contenido/subidas/2022/10/marca-mcdonalds-logo-1200x670.png"/>
        </SwiperSlide>
        <SwiperSlide className="boxSlider">
        <Image src="https://brandemia.org/contenido/subidas/2022/10/marca-mcdonalds-logo-1200x670.png"/>
        </SwiperSlide>
        <SwiperSlide className="boxSlider">
        <Image src="https://brandemia.org/contenido/subidas/2022/10/marca-mcdonalds-logo-1200x670.png"/>
        </SwiperSlide>
        <SwiperSlide className="boxSlider">
        <Image src="https://brandemia.org/contenido/subidas/2022/10/marca-mcdonalds-logo-1200x670.png"/>
        </SwiperSlide>
        <SwiperSlide className="boxSlider">
        <Image src="https://brandemia.org/contenido/subidas/2022/10/marca-mcdonalds-logo-1200x670.png"/>
        </SwiperSlide>
        <SwiperSlide className="boxSlider">
        <Image src="https://brandemia.org/contenido/subidas/2022/10/marca-mcdonalds-logo-1200x670.png"/>
        </SwiperSlide>
      </Swiper>
      </Container>
        </>
    )
}