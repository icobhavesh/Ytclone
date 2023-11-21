import React from 'react';
import { Link } from 'react-router-dom';

const ChannelCard = ({ channelDetail, marginTop }) => (
  <div className={`shadow-none rounded-2xl flex justify-center items-center w-full sm:w-96 md:w-80 h-96 mt-${marginTop}`}>
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <div className="relative">
        <img
          src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          className="rounded-full h-48 w-48 mb-2 border border-gray-300"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="text-white text-2xl">
            {channelDetail?.snippet?.title}{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="text-white text-lg font-bold text-center">
        {channelDetail?.snippet?.title}
      </div>
      {channelDetail?.statistics?.subscriberCount && (
        <div className="text-gray-500 text-base font-semibold text-center">
          {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString(
            'en-US'
          )}{' '}
          Subscribers
        </div>
      )}
    </Link>
  </div>
);

export default ChannelCard;
//==>>>>>>>>>>>>>>>>>>>>>>>>>>>>>=
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { demoProfilePicture } from "./utils/constant"

// const ChannelCard = ({ channelDetail, marginTop }) => (
//   <div className="shadow-none rounded-lg flex justify-center items-center w-[356px] md:w-[320px] h-326px mx-auto mt-[${marginTop}]">
//     <Link to={`/channel/${channelDetail?.id?.channelId}`}>
//       <div className="flex flex-col justify-center items-center text-white">
//         <img
//           src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
//           alt={channelDetail?.snippet?.title}
//           className="rounded-full h-180px w-180px mb-2 border-1 border-gray-300"
//         />
//         <h6 className="text-lg">
//           {channelDetail?.snippet?.title}{' '}
//           <span className="text-gray-500 text-sm ml-1">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-4 w-4 inline-block"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M5 13l4 4L19 7"
//               />
//             </svg>
//           </span>
//         </h6>
//         {channelDetail?.statistics?.subscriberCount && (
//           <p className="text-base font-semibold text-gray-500">
//             {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString(
//               'en-US'
//             )}{' '}
//             Subscribers
//           </p>
//         )}
//       </div>
//     </Link>
//   </div>
// );

// export default ChannelCard;
