import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { fetchFromAPI } from "./utils/FetchFromApi";
// import "./VideoDetail.css"; // Import your custom CSS file for styling

const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState(null);
    const [videos, setVideos] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => setVideoDetail(data.items[0]))

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => setVideos(data.items))
    }, [id]);

    if (!videoDetail?.snippet) return <div>Loading...</div>;

    const {
        snippet: { title, channelId, channelTitle },
        statistics: { viewCount, likeCount },
    } = videoDetail;

    return (
        <div className="min-h-screen">
            <div className="flex flex-col md:flex-row">
                <div className="flex-1">
                    <div className="w-full md:sticky top-14">
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            className="react-player"
                            controls
                        />
                        <h2 className="video-title">{title}</h2>
                        <div className="video-details">
                            <Link to={`/channel/${channelId}`} className="channel-link">
                                <span className="channel-title">{channelTitle}</span>
                            </Link>
                            <div className="video-stats">
                                <span className="view-count">
                                    {parseInt(viewCount).toLocaleString()} views
                                </span>
                                <span className="like-count">
                                    {parseInt(likeCount).toLocaleString()} likes
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-2 md:px-0 py-1 md:py-5 justify-center items-center">
                    {/* Render related videos here */}
                </div>
            </div>
        </div>
    );
};

export default VideoDetail;
