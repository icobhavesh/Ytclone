import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
// 
import Videos from "./Videos";
import { fetchFromAPI } from './utils/FetchFromApi'

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState();
    const [videos, setVideos] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const fetchResults = async () => {
            const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

            setChannelDetail(data?.items[0]);

            const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

            setVideos(videosData?.items);
        };

        fetchResults();
    }, [id]);

    return (
        <div className="min-h-screen">
            <div className="relative h-64">
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
                        zIndex: 10,
                    }}
                />
                <div className="absolute top-0 left-0 right-0">
                    <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
                </div>
            </div>
            <div className="p-2 flex">
                <div className="mr-8 sm:mr-0" />
                <Videos videos={videos} />
            </div>
        </div>
    );
};

export default ChannelDetail;
