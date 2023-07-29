
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

import SectionTitle from "../../../components/SectionTitle"
import Instructor from '../../../components/Instructor';
import { useEffect, useState } from 'react';


const SwiperInstructor = ({ instructors }) => {
    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setSlidesPerView(3);
            } else {
                setSlidesPerView(1);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [])


    const first = instructors.slice(0, 1)
    const second = instructors.slice(1, 2)
    const third = instructors.slice(2, 3)
    const fourth = instructors.slice(3, 4)
    const fifth = instructors.slice(4, 5)
    const sixth = instructors.slice(5, 6)

    return (
        <div className='text-center w-9/12 mx-auto'>
            <div>
                <SectionTitle heading="Our Popular" specialWord="Instructors" subHeading="Here is some of our amazing instructors, so popular among the students."></SectionTitle>
            </div>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}
                autoplay={{
                    delay: 3500,
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
                        first.map(instructor => <Instructor
                            key={instructor._id}
                            instructor={instructor}
                        ></Instructor>)
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        second.map(instructor => <Instructor
                            key={instructor._id}
                            instructor={instructor}
                        ></Instructor>)
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        third.map(instructor => <Instructor
                            key={instructor._id}
                            instructor={instructor}
                        ></Instructor>)
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        fourth.map(instructor => <Instructor
                            key={instructor._id}
                            instructor={instructor}
                        ></Instructor>)
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        fifth.map(instructor => <Instructor
                            key={instructor._id}
                            instructor={instructor}
                        ></Instructor>)
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        sixth.map(instructor => <Instructor
                            key={instructor._id}
                            instructor={instructor}
                        ></Instructor>)
                    }
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default SwiperInstructor;