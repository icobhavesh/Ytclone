// import {FaTiktok} from "react-icons/fa"
import { FaHome } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
// import {   FaEqualizerl} from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { MdSportsEsports} from "react-icons/md";
import { MdLiveTv } from "react-icons/md";
import {  FaCheck } from "react-icons/fa";
// import {  FaFacebookbook} from "react-icons/fa";
import {  FaTheaterMasks} from "react-icons/fa";
import {BsGraphDown} from 'react-icons/bs'
import {IoIosFitness} from 'react-icons/io'
import {FaFacebook} from 'react-icons/fa'
import {FaCloudShowersHeavy} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {FaPodcast} from 'react-icons/fa'
import {BsEmojiLaughing} from 'react-icons/bs'

// import {FaCogs } from "react-icons/fa";

export const categories = [
    { name: 'New', icon: <FaHome /> },
    { name: 'JS Mastery', icon: <FaCode /> },
    { name: 'Coding', icon: <FaCode /> },
    { name: 'ReactJS', icon: < FaReact /> },
    { name: 'NextJS', icon: <FaCode /> },
    { name: 'Music', icon: <FaMusic /> },
    { name: 'Education', icon: <FaSchool /> },
    { name: 'Podcast', icon: < FaPodcast /> },
    { name: 'Movie', icon: <MdOndemandVideo /> },
    { name: 'Gaming', icon: <MdSportsEsports /> },
    { name: 'Live', icon: <MdLiveTv /> },
    { name: 'Sport', icon: <IoIosFitness /> },
    { name: 'Fashion', icon: <FaCheck /> },
    { name: 'Beauty', icon: <FaFacebook /> },
    { name: 'Comedy', icon: <BsEmojiLaughing /> },
    { name: 'Gym', icon: <IoIosFitness /> },
    { name: 'Crypto', icon: <FaCloudShowersHeavy/> },
];



// Helper function to generate Tailwind CSS class names based on the category name
const getCategoryClass = (categoryName) => {
    switch (categoryName.toLowerCase()) {
        case 'new':
            return 'home-icon';
        case 'js mastery':
        case 'coding':
        case 'reactjs':
        case 'nextjs':
            return 'code-icon';
        case 'music':
            return 'music-note-icon';
        case 'education':
            return 'school-icon';
        case 'podcast':
            return 'graphic-eq-icon';
        case 'movie':
            return 'ondemand-video-icon';
        case 'gaming':
            return 'sports-esports-icon';
        case 'live':
            return 'live-tv-icon';
        case 'sport':
            return 'fitness-center-icon';
        case 'fashion':
            return 'checkroom-icon';
        case 'beauty':
            return 'face-retouching-natural-icon';
        case 'comedy':
            return 'theater-comedy-icon';
        case 'gym':
            return 'fitness-center-icon';
        case 'crypto':
            return 'developer-mode-icon';
        default:
            return 'unknown-icon';
    }
};

// Generate the category icons with Tailwind CSS classes
export const categoryIcons = categories.map((category) => ({
    name: category.name,
    class: getCategoryClass(category.name),
}));

// CSS classes for category icons
export const categoryIconClasses = {
    'home-icon': 'home',
    'code-icon': 'code',
    'music-note-icon': 'music-note',
    'school-icon': 'school',
    'graphic-eq-icon': 'graphic-eq',
    'ondemand-video-icon': 'ondemand-video',
    'sports-esports-icon': 'sports-esports',
    'live-tv-icon': 'live-tv',
    'fitness-center-icon': 'fitness-center',
    'checkroom-icon': 'checkroom',
    'face-retouching-natural-icon': 'face-retouching-natural',
    'theater-comedy-icon': 'theater-comedy',
    'developer-mode-icon': 'developer-mode',
    'unknown-icon': 'unknown',
};
