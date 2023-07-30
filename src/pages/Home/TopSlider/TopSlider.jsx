import { Swiper, SwiperSlide } from 'swiper/react';
import { RiCustomerService2Fill } from 'react-icons/Ri';
import { BiSolidMessageDetail } from 'react-icons/Bi';
import { ImUsers } from 'react-icons/Im';
import banner1 from '../../../assets/image/banner-1.png'
import banner2 from '../../../assets/image/banner-2.png'
import banner3 from '../../../assets/image/banner-3.png'
import banner4 from '../../../assets/image/banner-4.png'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const TopSlider = () => {
   
    return (
        <div className='text-center pt-32'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='relative'>
                        <img className='w-full h-[760px] contrast-75' src={banner1}alt="" />
                        <div className='absolute left-0 top-0 flex items-center pl-20 text-start h-full'>
                            <div className='space-y-10'>
                                <h3 className="text-4xl lg:text-6xl font-bold  text-white">Achieve your ultimate <br /> goal with our <span className='text-yellow-400'>innovative</span> <br /> courses.</h3>
                                <p className='text-white hidden lg:block text-xl border-l-4 border-white pl-5'>We are here to provide you, your most wanted language courses with exceptional <br /> quality, immersive experiences, and dedicated expert instructors.</p>
                                <div className='flex space-x-5'>
                                    <button className="btn rounded-full w-36 bg-[#CB4154] border-none text-white">Get Classes</button>
                                    <button className="btn btn-outline text-yellow-300 rounded-full w-36">Sing up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='w-full h-[760px] contrast-75' src={banner2} alt="" />
                        <div className='absolute left-0 top-0 flex items-center pl-20 text-start h-full'>
                            <div className='space-y-10'>
                                <h3 className="text-4xl lg:text-6xl font-bold text-white">We provide <span className='text-yellow-400'>certified</span> and <br /><span className='text-yellow-400'>experienced</span> teacher to <br /> teach our students.</h3>
                                <p className='text-white hidden lg:block text-xl border-l-4 border-white pl-5'>We are here to provide you, your most wanted language courses with exceptional <br /> quality, immersive experiences, and dedicated expert instructors.</p>
                                <div className='flex space-x-5'>
                                    <button className="btn rounded-full w-36 bg-[#CB4154] border-none text-white">Get Classes</button>
                                    <button className="btn btn-outline text-yellow-300 rounded-full w-36">Sing up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='w-full h-[760px] contrast-75' src={banner3} alt="" />
                        <div className='absolute left-0 top-0 flex items-center pl-20 text-start h-full'>
                            <div className='space-y-10'>
                                <h3 className="text-4xl lg:text-6xl font-bold text-white">We take joy in providing students <br /> with <span className='text-yellow-400'>scholarships</span>, enabling <br /> them to pursue their <br />dreams with ease.</h3>
                                <p className='text-white hidden lg:block text-xl border-l-4 border-white pl-5'>We are here to provide you, your most wanted language courses with exceptional <br /> quality, immersive experiences, and dedicated expert instructors.</p>
                                <div className='flex space-x-5'>
                                    <button className="btn rounded-full w-36 bg-[#CB4154] border-none text-white">Get Classes</button>
                                    <button className="btn btn-outline text-yellow-300 rounded-full w-36">Sing up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='w-full h-[760px] contrast-75' src={banner4} alt="" />
                        <div className='absolute left-0 top-0 flex items-center pl-20 text-start h-full'>
                            <div className='space-y-10'>
                                <h3 className="text-4xl lg:text-6xl font-bold text-white">There are amazing fun <br /> language courses for <br /> <span className='text-yellow-400'>kids</span> only.</h3>
                                <p className='text-white hidden lg:block text-xl border-l-4 border-white pl-5'>We are here to provide you, your most wanted language courses with exceptional <br /> quality, immersive experiences, and dedicated expert instructors.</p>
                                <div className='flex space-x-5'>
                                    <button className="btn rounded-full w-36 bg-[#CB4154] border-none text-white">Get Classes</button>
                                    <button className="btn btn-outline text-yellow-300 rounded-full w-36">Sing up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='w-full lg:flex justify-center lg:space-x-32 bg-[#00AFA7]  px-24 py-12 space-y-8 lg:space-y-0 lg:py-12  lg:px-44'>
                <div className='text-start w-64 space-y-2'>
                    <RiCustomerService2Fill className='text-5xl mb-6 text-white'></RiCustomerService2Fill>
                    <h4 className="text-2xl lg:text-3xl text-[#FCD12A]">Student Service</h4>
                    <p className='text-white'>Discuss any problem with our student service center.</p>
                </div>
                <div className='text-start w-64 space-y-2'>
                    <BiSolidMessageDetail className='text-5xl mb-6 text-white'></BiSolidMessageDetail>
                    <h4 className="text-2xl lg:text-3xl text-[#FCD12A]">Message Us</h4>
                    <p className='text-white'>Ask us anything about our courses.</p>
                </div>
                <div className='text-start w-64 space-y-2'>
                    <ImUsers className='text-5xl mb-6 text-white'></ImUsers>
                    <h4 className="text-2xl lg:text-3xl text-[#FCD12A]">Join Us Now</h4>
                    <p className='text-white'>Sing up to attend our amazing classes.</p>
                </div>
            </div>
        </div>
    );
};

export default TopSlider;
