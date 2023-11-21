import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromAPI } from './utils/FetchFromApi'
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items)
        // Todo:- humne yha pr search param ke andar ek variable use kiya hai jiska matlab 
        //Todo:- ki hum jab bhi select category or click karenge jab hum jis category pr click karenge ussi ko ye render kr dega

      )


  }, [selectedCategory]);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex  md:flex-col  md:border-r-2 border-black p-6 mr-10  " >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />


      </div>



      <div classNameName="w-full h-auto bg-black ">
        <h4 classNameName="text-white text-center text-2xl font-bold mb-4">
          <span classNameName="text-red-600">{selectedCategory}</span>
        </h4>
        <Videos videos={videos} />
      </div>
    </div >


  )
}

export default Feed