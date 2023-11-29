import React from "react";
import Loader from "./Loader"
// import { Stack, div } from "@mui/material";
// import LoadingSkeleton from "./LoadingSkeleton";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";
const Videos = ({ videos }) => {
    if (!videos?.length) return <Loader/>

    return (
        <div className=" flex flex-wrap gap-4 mt-10  justify-evenly ">
            {videos.map((item, idx) => (
                <div key={idx}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </div>
            ))}
        </div>
    );
}

export default Videos;