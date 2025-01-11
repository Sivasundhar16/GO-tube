import { useEffect, useState } from "react";
import { Youtube_API } from "../utils/api";
import { Videocard } from "./Videocard";

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
    <div>
      <Videocard info={videos[1]} />
    </div>
  );
};
