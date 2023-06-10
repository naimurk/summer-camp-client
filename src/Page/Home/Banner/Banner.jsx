import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import img from "../../../assets/football.jpg";
import img1 from "../../../assets/basketball.jpg";
import img2 from "../../../assets/tennis.jpg";
// style={{ backgroundImage: `url(${img})`,backgroundSize: "cover", backgroundPosition: "center" }}

const Banner = () => {
    return (

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
                <div className="hero h-[700px]  lg:min-h-screen" style={{ backgroundImage: `url(${img})`,backgroundSize: "cover", backgroundPosition: "center" }}  >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-slate-50">
                        <div className="max-w-2xl">
                            <h1 className="mb-5 text-5xl lg:text-7xl font-bold">Experience the Thrill of Sports</h1>
                            <p className="mb-5"> Embark on an exhilarating journey, discover your passion, and embrace the challenges that come with the world of sports</p>
                            <button className="btn btn-warning">Get Started</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero  h-[700px]   lg:min-h-screen" style={{ backgroundImage: `url(${img1})`,backgroundSize: "cover", backgroundPosition: "center" }}  >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-slate-50">
                        <div className="max-w-2xl">
                            <h1 className="mb-5 text-5xl lg:text-7xl font-bold">Unlock Your Potential</h1>
                            <p className="mb-5">Train with top-notch coaches, unleash your true capabilities, and soar to unprecedented heights of athletic excellence.</p>
                            <button className="btn btn-warning">Get Started</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero  h-[700px]  lg:min-h-screen" style={{ backgroundImage: `url(${img2})`,backgroundSize: "cover", backgroundPosition: "center" }}  >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-slate-50">
                        <div className="max-w-2xl">
                            <h1 className="mb-5 text-5xl lg:text-7xl font-bold">Join Our Winning Team</h1>
                            <p className="mb-5">Become part of a supportive community that fosters growth, celebrates achievements, and propels you towards victory.</p>
                            <button className="btn btn-warning">Get Started</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>

    );
};

export default Banner;
