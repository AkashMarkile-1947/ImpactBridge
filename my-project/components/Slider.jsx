import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./tailwind.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper custom-slider"
      >
        <SwiperSlide>
          <Slide Picture={BannerPhotos.img1} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            Picture={BannerPhotos.img2}
            Mission="Empower Young Minds"
            Subtext="Unlock their full potential"
            tagline="Empowering Children through Quality Education"
            path="/Educate-Child"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            Picture={BannerPhotos.img3}
            Mission="Embrace Abilities, Inspire Change"
            Subtext="Uplift disabled individuals"
            tagline="Let's Make a Difference in the Lives of Disabled Individuals"
            path="Support-Exceptional"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            Picture={BannerPhotos.img4}
            Mission="Caring for Our Seniors"
            Subtext="Bring comfort and happiness to our elderly"
            tagline="Promoting Aging with Dignity and Independence"
            path="/Senior-Care"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            Picture={BannerPhotos.img5}
            Mission="Hope and Healing Together"
            Subtext="Bring healing to those in need"
            tagline="Raising Funds for Health and Well-being"
            path="/Heal-Together"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

const BannerPhotos = {
  img1: "hungry_child.png",
  img2: "child-1.jpg",
  img3: "ability-2.jpg",
  img4: "elder4.jpeg",
  img5: "heal-1.jpg",
};

const Slide = ({ Picture, Mission, Subtext, tagline, path }) => {
  const navigate = useNavigate();
  return (
    <div className="" style={{ boxShadow: "0 0 200px rgba(0,0,0,0.7) inset", zIndex: "0" }}>
      <div
        className="section-container flex justify-between items-center"
        style={{
          marginBlock: "0",
          paddingBlock: "2rem",
          maxWidth: "none",
          width: "100%",
          zIndex: "0"
        }}
      >
        <div className="section-img">
          <img
            src={`/${Picture}`}
            alt={`${Picture}`}
            style={{ maxHeight: "350px", position: "relative" }}
          />
        </div>
        <div className="section-info">
          <h1 className="section-heading">Mission:</h1>
          <h1 className="section-heading">
            {Mission ? Mission : "No Child Hungry"}
          </h1>
          <h3 className="section-subheading">
            {Subtext ? Subtext : "Provide them with regular nutrition"}
          </h3>
          <div className="container-info">
            {tagline
              ? tagline
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          </div>
          <button
            type="button"
            className="focus:outline-none text-white focus:ring-4 focus:ring-green-300  font-medium rounded-md  text-sm px-5 py-2.5"
            style={{
              backgroundColor: "#c2410c",
              marginBlock: "1rem",
              fontSize: "1.1rem",
              width: "50%",
            }}
            onClick={!path ?  () => navigate("/No-child-Hungry", {replace: true}) : () => navigate(path, {replace: true})}
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};
