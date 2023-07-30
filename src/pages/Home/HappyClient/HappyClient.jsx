import SectionTitle from "../../../components/SectionTitle";


const HappyClient = () => {
    return (
        <div className="text-center w-9/12 mx-auto pt-14 pb-44">
            <SectionTitle heading="Our Happy" specialWord="Students" subHeading="Here is some of our students review over our services."></SectionTitle>
            <div className="w-full flex space-x-8">
                <div className="">
                    <div className="w-96 border-2 border-stone-200 p-8 text-start bg-stone-100">
                        <h4 className="text-xl font-bold mb-6 text-[#CB4154]">Supportive and insightful </h4>
                        <p>Loved every minute studying and gained great knowledge. Looking forward to life as a life coach and being part of changing lives for the better.</p>
                    </div>
                    <div className="flex mt-8">
                        <img className="w-16 h-16" src="https://images.unsplash.com/photo-1507019403270-cca502add9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                        <div className="text-start text-stone-50 bg-[#CB4154] py-1 pl-3 pr-14">
                            <h5 className="text-base font-bold ">Maymuna Haq</h5>
                            <p className="">Student</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="w-96 border-2 border-stone-200 p-8 text-start bg-stone-100">
                        <h4 className="text-xl font-bold mb-6 text-[#e7ae34]">Great service from tutor </h4>
                        <p>All notes were easy to read, and I found the homework challenging, but not impossible. I enjoyed researching! Very good. Lots of feedback!</p>
                    </div>
                    <div className="flex mt-8">
                        <img className="w-16 h-16" src="https://images.unsplash.com/photo-1591084728795-1149f32d9866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
                        <div className="text-start text-stone-50 bg-[#e7ae34] py-1 pl-3 pr-14">
                            <h5 className="text-base font-bold ">Ali Abdullah</h5>
                            <p className="">Student</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="w-96 border-2 border-stone-200 p-8 text-start bg-stone-100">
                        <h4 className="text-xl font-bold mb-6 text-[#00AFA7]">Helpful guidance</h4>
                        <p>I would just like to say I enjoyed doing this course. It gave me the confidence and skills that I needed to get into the industry. Thank you.</p>
                    </div>
                    <div className="flex mt-8">
                        <img className="w-16 h-16" src="https://img.freepik.com/free-photo/portrait-young-beautiful-hipster-girl-trendy-summer-sundress_158538-18256.jpg" alt="" />
                        <div className="text-start text-stone-50 bg-[#00AFA7] py-1 pl-3 pr-14">
                            <h5 className="text-base font-bold ">Maisha Rahman</h5>
                            <p className="">Student</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HappyClient;