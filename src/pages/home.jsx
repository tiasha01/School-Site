import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import ShowcaseCard from "../components/showcaseCard"
import { Menu, X, ArrowUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

import schoolLogo from "../assets/images/schoolLogo.png";
import banner1 from "../assets/images/schoolBanner.jpg";
import schoolImage from "../assets/images/schoolImage.jpg";
import principalImage from "../assets/images/principal-img.jpg"
import emblem1 from "../assets/images/logo1.jpeg";
import emblem2 from "../assets/images/logo2.png";
import emblem3 from "../assets/images/logo3.png";
import emblem4 from "../assets/images/logo4.png";
import emblem5 from "../assets/images/logo5.png";
import emblem6 from "../assets/images/logo6.jpeg";

function Home(){

    const navigate = useNavigate();
    const [bannerIndex, setBannerIndex] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [topButtonVisible, setTopButtonVisible] = useState(false);
    const bannerImages = [banner1, schoolLogo];

    useEffect(() => {
    const interval = setInterval(() => {
        setBannerIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 10000);
    return () => clearInterval(interval);
    },);

    useEffect(() => {
        const toggleVisibility = () => {
            setTopButtonVisible(window.scrollY > 200);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return(
        <div className="bg-white">
            {/*Header*/}
            <div>
                {/*Announcements*/}
                <div className="bg-sky-700 p-2">
                    <Marquee className="text-white font-medium" speed={100} gradient={false}>
                        Admissions Open for 2025! Secure your child's future with quality education — Enroll Now!
                    </Marquee>
                </div>
                {/*Nav bar*/}
                <div className="bg-slate-50 h-20 flex items-center px-4 md:px-8">
                    {/* School logo */}
                    <div className="p-2 flex items-center justify-center h-ful">
                        <img src={schoolLogo} width={200} />
                    </div>
                    {/* Spacer */}
                    <div className="flex-grow"></div>
                    {/* Navigation for large screens */}
                    <div className="hidden md:flex md:flex-row md:space-x-6 md:items-center md:pr-5">
                        <button className="text-gray-700 text-lg hover:bg-slate-200 p-2 rounded" 
                                onClick={() => document.getElementById("noticeBoard").scrollIntoView({ behavior: "smooth" })}>
                            Notice Board
                        </button>
                        <button className="text-gray-700 text-lg hover:bg-slate-200 p-2 rounded"
                                onClick={() => document.getElementById("gallery").scrollIntoView({ behavior: "smooth" })}>
                            Gallery
                        </button>
                        <button className="text-gray-700 text-lg hover:bg-slate-200 p-2 rounded"
                                onClick={() => document.getElementById("aboutUs").scrollIntoView({ behavior: "smooth" })}>
                            About Us
                        </button>
                        <button className="text-gray-700 text-lg hover:bg-slate-200 p-2 rounded">
                            Contact Us
                        </button>
                        <button className="bg-green-600 hover:bg-green-500 text-lg text-white p-1 rounded"
                                onClick={() => {navigate("/admission")}}>
                            Admission
                        </button>
                        <button className="bg-orange-600 hover:bg-orange-500 text-lg text-white p-1 rounded"
                                onClick={() => {navigate("/login")}}>
                            Student Login
                        </button>
                    </div>
                    {/* Hamburger Icon for Mobile */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                    {/* Mobile Nav */}
                    {menuOpen && (
                        <div className="absolute top-20 right-0 w-2/3 bg-white z-50 shadow-lg flex flex-col items-end py-4 pr-5 space-y-2 md:hidden">
                            <button className="text-gray-700 text-lg hover:bg-slate-200 p-2 rounded" 
                                    onClick={() => document.getElementById("noticeBoard").scrollIntoView({ behavior: "smooth" })}>
                                Notice Board
                            </button>
                            <button className="text-gray-700 text-lg hover:bg-slate-200 p-2 rounded"
                                    onClick={() => document.getElementById("gallery").scrollIntoView({ behavior: "smooth" })}>
                                Gallery
                            </button>
                            <button className="text-gray-700 text-lg hover:bg-slate-200 p-2 rounded"
                                    onClick={() => document.getElementById("aboutUs").scrollIntoView({ behavior: "smooth" })}>
                                About Us
                            </button>
                            <button className="text-gray-700 text-lg hover:bg-slate-200 p-2 rounded">
                                Contact Us
                            </button>
                            <button className="bg-green-600 hover:bg-green-500 text-lg text-white p-1 rounded">
                                Admission
                            </button>
                            <button className="bg-orange-600 hover:bg-orange-500 text-lg text-white p-1 rounded">
                                Student Login
                            </button>
                        </div>
                    )}
                </div>
            </div>
            {/*back to top button*/}
            {topButtonVisible && (
                <button 
                    className="fixed bottom-5 right-5 z-50 bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg"
                    onClick={scrollToTop}
                >
                    <ArrowUp size={24} />
                </button>
            )}
            {/*Moving Banner*/}
            <div className="w-full  h-96 overflow-hidden relative">
            <motion.img
                key={bannerIndex}
                src={bannerImages[bannerIndex]}
                alt="banner"
                className="w-full object-cover absolute"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}/>
            </div>
            {/*Notice Board Showcase cards*/}
            <div id="noticeBoard" className="flex flex-wrap justify-start mx-auto">
                <ShowcaseCard title="Notice Board" type=""/>
                <ShowcaseCard title="Useful Information" type=""/>
                <ShowcaseCard title="School Management" type=""/>
            </div>
            {/*Image Gallery*/}
            <div id="gallery" className="bg-gray-100 py-10">
                <p className="text-center text-2xl font-bold text-slate-600 mb-6">
                    Gallery
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-4/5 mx-auto">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="w-full h-48 overflow-hidden rounded-md">
                            <img 
                                src={`https://source.unsplash.com/random/300x300?sig=${index}`} 
                                alt={`Gallery Image ${index + 1}`} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/*about section*/}
            <div id="aboutUs" className="bg-yellow-100 py-4">
                <p className="text-center text-2xl font-bold text-slate-600 p-4">
                    About Us
                </p>
                <div className="flex justify-center items-center">
                    <div className="flex flex-row justify-center items-center w-4/5 gap-8">
                        <div className="w-2/5">
                            <img src={schoolImage} className="rounded-md w-full"/>
                        </div>
                        <div className="w-3/5">
                            <p className="text-xl">
                                At My School, we believe that education is the key to unlocking a child’s full potential. Our mission is to provide a well-rounded education that fosters intellectual, emotional, and social growth. With a focus on academic excellence, we ensure that each student receives personalized attention to help them thrive in a dynamic and ever-changing world. <br /><br />
                                Our state-of-the-art facilities, including modern classrooms, science laboratories, computer labs, and e-learning resources, support our goal of providing an innovative and engaging learning environment. In addition to academics, we emphasize the importance of extracurricular activities such as sports, arts, and life skills, as they play an essential role in the holistic development of our students.<br /><br />
                                At My School, we are committed to creating a nurturing and inclusive environment where every student feels valued, respected, and empowered. Our highly qualified and passionate teaching staff is dedicated to instilling strong ethical values such as integrity, compassion, and responsibility, which prepare our students to become confident, compassionate leaders of tomorrow.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/*Principal's Desk*/}
            <div className="bg-green-100 py-4">
                <p className="text-center text-2xl font-bold text-slate-600 p-4">
                    Principal's Desk
                </p>
                <div className="flex justify-center items-center">
                    <div className="flex flex-row justify-center items-center w-4/5 gap-8">
                        <div className="w-2/5">
                            <img src={principalImage} className="rounded-md w-full"/>
                        </div>
                        <div className="w-3/5">
                            <p className="text-xl">
                                It fills me with great pride as I pen down this message on behalf of My School. Over the years, this Christian Minority Institution has served as a sanctuary of learning and intellectual advancement, the fountainhead of future generations, respect, and love for our cultural heritage, and has inculcated in students the true Christian spirit of love and forgiveness. <br /><br />
                                Our Vision Statement: At My School, we lay the foundation for the child's overall development. Along with academics, we put equal emphasis on sports, life skills, health and hygiene, and values. Keeping in mind the global needs and trends of quality, we impart technology-embedded education. Beginning from the infrastructure, which includes good classrooms, well-equipped science laboratories, an upgraded library, a Computer Lab, e-learning classrooms, and a music room, we also have a highly qualified, trained, and experienced teaching staff. In our curriculum, the student is the primary focus, and each child is the center of the learning process. Activity-based learning, along with inculcating a scientific temper and a spirit of free inquiry, is our priority.<br /><br />
                                Best Wishes and Warm Regards,<br />
                                Acting Principal<br />
                                My School
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/*Emblame list marquee*/}
            <div className="my-4">
                <Marquee className="font-medium" speed={100} gradient={false}>
                    <img src={emblem1} className="w-30 h-20 mx-6" />
                    <img src={emblem2} className="w-30 h-20 mx-6" />
                    <img src={emblem3} className="w-30 h-20 mx-6" />
                    <img src={emblem4} className="w-30 h-20 mx-6" />
                    <img src={emblem5} className="w-30 h-20 mx-6" />
                    <img src={emblem6} className="w-30 h-20 mx-6" />
                </Marquee>
            </div>
        </div>
    )
}

export default Home;