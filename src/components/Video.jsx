import { useEffect, useState } from "react";
import { Youtube_API } from "../utils/api";
import { Videocard } from "./Videocard";
import { Link } from "react-router-dom";

export const Video = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(Youtube_API);
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap items-stretch gap-x-9">
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`} key={video.id}>
          <Videocard info={video} />
        </Link>
      ))}
    </div>
  );
};
