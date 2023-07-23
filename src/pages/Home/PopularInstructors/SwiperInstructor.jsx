
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import Instructor from './Instructor';
import SectionTitle from '../../../components/SectionTitle';


const SwiperInstructor = ({ instructors }) => {
    // console.log(instructors);
    const one = instructors.slice(0, 1)
    const two = instructors.slice(1, 2)
    const three = instructors.slice(2, 3)
    const four = instructors.slice(3, 4)
    const five = instructors.slice(4, 5)
    const six = instructors.slice(5, 6)

    return (
        <div className='text-center w-3/4 mx-auto'>
            <div>
                <SectionTitle heading="Our Popular" specialWord="Instructors" subHeading="Here is some of our amazing instructors, so popular among the students."></SectionTitle>
            </div>
            <Swiper
                slidesPerView={3}
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
                        one.map(one => <Instructor
                            key={one.name}
                            one={one}
                        ></Instructor>)
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        two.map(one => <Instructor
                            key={one.name}
                            one={one}
                        ></Instructor>)
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        three.map(one => <Instructor
                            key={one.name}
                            one={one}
                        ></Instructor>)
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        four.map(one => <Instructor
                            key={one.name}
                            one={one}
                        ></Instructor>)
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        five.map(one => <Instructor
                            key={one.name}
                            one={one}
                        ></Instructor>)
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        six.map(one => <Instructor
                            key={one.name}
                            one={one}
                        ></Instructor>)
                    }
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default SwiperInstructor;