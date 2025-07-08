// import Swiper core and required modules
import {Navigation, Pagination, Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// If importing local images
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';
import img4 from '../assets/image4.jpg';
import img5 from '../assets/image5.jpg';
import img6 from '../assets/image6.jpg';

function Carousel() {
  return (
      <div className="max-w-[768px] w-full">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop={true}
          autoplay={{
            delay:3000,
            disableOnInteraction: true,
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <img src={img1} alt="Slide 1" className="w-[768px] aspect-[755/300] object-cover rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="Slide 2" className="w-[768px] aspect-[755/300] object-cover rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="Slide 3" className="w-[768px] aspect-[755/300] object-cover rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="Slide 1" className="w-[768px] aspect-[755/300] object-cover rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="Slide 2" className="w-[768px] aspect-[755/300] object-cover rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} alt="Slide 3" className="w-[755px] aspect-[755/300] object-cover rounded-lg" />
          </SwiperSlide>
        </Swiper>
      </div>

  );
};

export default Carousel
