
import { Link } from 'react-router-dom';

import React from 'react'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  console.log(snippet);
  return (
    <div className='flex flex-wrap w-full bg-h-auto    '>
      <div className='w-[300px] h-auto bg-slate-700   '>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <img className='w-full h-auto object-cover'
            src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt={snippet?.title}
          />
        </Link>
        <div className='bg-black h-[50px] pl-2 '>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <p className="text-white md:overflow-x-hidden whitespace-nowrap   font-bold text-xl">
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </p>
          </Link>
        </div>
        <div className='pb-4 pl-3 bg-black'>
          <Link to={videoId ? `/video/${videoId}` : '/nothing-has-been-shown'}>
            <p className='md:overflow-x-hidden whitespace-nowrap  text-slate-400'>{snippet?.channelTitle
              .slice(0, 40)}</p>
          </Link>
        </div>

      </div>


    </div>
  )
}



// <div className="w-[300px] h-auto  flex justify-center items-center flex-wrap">
// <Link to={videoId ? `/video/${videoId}` : '/video/cV2gBU6hKfY'}>
//   <div className='w-full h-auto '>
// <img
//   src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
//   alt={snippet?.title}
// className="w-full bg-transparent border-none  sm:w-358px h-180"
// />
//   </div>
//   </Link>

//   <div className="bg-gray-900 w-full h-[108]">
// <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
//   <p className="text-white font-bold text-xl">
//     {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
//   </p>
// </Link>
//     <Link
//       to={
//         snippet?.channelId
//           ? `/channel/${snippet?.channelId}`
//           : demoChannelUrl
//       }
//     >
//       <p className="text-gray-400">
//         {snippet?.channelTitle || demoChannelTitle}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-4 w-4 inline-block text-gray-500 ml-1"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M5 13l4 4L19 7"
//           />
//         </svg>
//       </p>
//     </Link>
//   </div>
// </div>
// );

export default VideoCard;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import ChannelCard from './ChannelCard';

// const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
//   // console.log(videoId,snippet);
//   // console.log(videoId)z
//   return (
//     <div className='w-full shadow-2xl border-none  flex flex-wrap   md:w-[300px] justify-evenly md:justify-between'>
//       <Link to={videoId ? `/video / ${videoId}` : <h1>error</h1>}>
//         <div className='w-[300px] '>
//           <img  src={snippet?.thumbnails?.high?.url} alt="" />
//       <div className='bg-[#1e1e1e] w-full m-2 '>
//       <div>
//       <Link to={videoId ? `/video/${videoId}` : '/nothing-has-been-shown'}>
//         <p className='flex-wrap flex text-black'>{snippet?.channelTitle.slice(0, 40)}</p>
//       </Link>
//       </div>
// <Link to={videoId ? `/video/${videoId}` : '/nothing-has-been-shown'}>
//   <p className='md:overflow-x-hidden whitespace-nowrap  text-white'>{snippet?.title.slice(0, 40)}</p>
// </Link>
//       </div>
//         </div>
//       </Link>
//       {/* <ChannelCard/> */}

//     </div>
//   )
// }

// export default VideoCard;
{/* <div className="flex flex-wrap m-0 md:flex-row " > */ }
{/* <Link to={videoId ? `/video/${videoId}` : '/nothing-has-been-shown'}>
  <div className='overflow-hidden md:flex-row w-full h-auto'>
    <img src={snippet?.thumbnails?.high?.url} alt="" />
    <div className='bg-slate-400 text-white  '>
      <Link to={videoId ? `/video/${videoId}` : '/nothing-has-been-shown'}>
        <p className='md:overflow-x-hidden'>{snippet?.title.slice(0, 40)}</p>
      </Link>
      <Link to={videoId ? `/video/${videoId}` : '/nothing-has-been-shown'}>
        <p className='flex-wrap flex'>{snippet?.channelTitle.slice(0, 40)}</p>
      </Link>
    </div>

  </div>

</Link>

</div>
);
}; */}

// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// // import ReactPlayer from "react-player";
// import {fetchFromAPI}  from "./utils/FetchFromApi"
// // import { Videos, Loader } from "./";


// const VideoCard = () => {
//   const [videoDetail, setVideoDetail] = useState(null);
//   const [videos, setVideos] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
//       .then((data) => setVideoDetail(data.items[0]));

//     fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
//       .then((data) => setVideos(data.items));
//   }, [id]);

//   if (!videoDetail?.snippet) return <Loader />;

//   const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

//   return (
//     <div className="min-h-screen">
//       <div className="md:flex">
//         <div className="flex-1">
//           <div className="w-full sticky top-16">
//             <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
//             <p className="text-white text-2xl font-bold p-2">
//               {title}
//             </p>
//             <div className="text-white space-y-1 p-2">
//               <Link to={`/channel/${channelId}`} className="text-lg md:text-xl text-white flex items-center">
//                 {channelTitle} <i className="text-gray-500 text-sm ml-1 fas fa-check-circle"></i>
//               </Link>
//               <div className="md:flex space-x-4 items-center">
//                 <p className="text-sm md:text-base text-opacity-70">
//                   {parseInt(viewCount).toLocaleString()} views
//                 </p>
//                 <p className="text-sm md:text-base text-opacity-70">
//                   {parseInt(likeCount).toLocaleString()} likes
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="px-2 md:py-1 xs:py-5 flex justify-center items-center">
//           <Videos videos={videos} direction="column" />
//         </div>
//       </div>
//     </div>
//   );
// };


// export default VideoCard