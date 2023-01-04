import React from "react";
import styled from "styled-components"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

const Container =styled.div`
background-color:red;
`
const Box =styled.div`
background-color:green;
display:flex;
justify-content:center;
`
const Title = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    background-color:yellow;
    width:600px;
    height:30px;
`
const Image = styled.img`
    width:300px;
    height:300px;
    border-radius:150px;
`


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