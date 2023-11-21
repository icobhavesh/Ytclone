import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "./utils/FetchFromApi";
import Videos from "./Videos";

const SearchFeed = () => {
    const [videos, setVideos] = useState(null);
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
    }, [searchTerm]);

    return (
        <div className="p-4 min-h-screen">
            <h1 className="text-4xl font-extrabold text-black mb-3 ml-4 sm:ml-20">
                Search Results for <span className="text-red-600">{searchTerm}</span> videos
            </h1>
            <div className="flex">
                <div className="mr-8 sm:mr-0" />
                <Videos videos={videos} />
            </div>
        </div>
    );
};

export default SearchFeed;
