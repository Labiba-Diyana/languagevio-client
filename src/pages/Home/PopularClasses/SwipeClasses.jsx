import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

import SectionTitle from "../../../components/SectionTitle"
import SingleClass from '../../../components/SingleClass/SingleClass';



const SwipeClasses = ({ classes }) => {
    const first = classes.slice(0, 1)
    const second = classes.slice(1, 2)
    const third = classes.slice(2, 3)
    const fourth = classes.slice(3, 4)
    const fifth = classes.slice(4, 5)
    const sixth = classes.slice(5, 6)


    return (
        <div className='text-center w-9/12 mx-auto'>
            <div>
                <SectionTitle heading="Our Popular" specialWord="Classes" subHeading="Here is some of our top 6 most popular classes."></SectionTitle>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    {
                        first.length > 0 &&
                        first.map(singleClass => <SingleClass
                            key={singleClass._id}
                            singlesClass={singleClass}></SingleClass>)
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        second.length > 0 &&
                        second.map(singleClass => <SingleClass
                            key={singleClass._id}
                            singlesClass={singleClass}></SingleClass>)
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        third.length > 0 &&
                        third.map(singleClass => <SingleClass
                            key={singleClass._id}
                            singlesClass={singleClass}></SingleClass>)
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        fourth.length > 0 &&
                        fourth.map(singleClass => <SingleClass
                            key={singleClass._id}
                            singlesClass={singleClass}></SingleClass>)
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        fifth.length > 0 &&
                        fifth.map(singleClass => <SingleClass
                            key={singleClass._id}
                            singlesClass={singleClass}></SingleClass>)
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        sixth.length > 0 &&
                        sixth.map(singleClass => <SingleClass
                            key={singleClass._id}
                            singlesClass={singleClass}></SingleClass>)
                    }
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default SwipeClasses;