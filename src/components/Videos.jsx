import React, {useState, useEffect} from "react";
import VideosCard from "./VideosCard";
import axios from 'axios'
import backendURL from '../backendurl'


const Videos = () => {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${backendURL}/allposts`);
      setItems(res.data.posts);
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center mt-20 gap-10">
      <h1 className="mt-5 text-xl font-bold">Videos</h1>
      <div className="flex flex-wrap max-sm:flex-col gap-7 mb-5">
       {items.map((item) => <div key={item._id}>
        <VideosCard title={item.title} image={item.image} youtube={item.youtube}/> </div>)}
      </div>
    </div>
  );
};

export default Videos;
