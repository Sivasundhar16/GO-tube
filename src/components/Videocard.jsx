export const Videocard = ({ info }) => {
  if (!info) {
    console.error("Info object is missing or undefined");
    return null;
  }

  console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const thumbnailUrl = thumbnails.medium.url;
  const viewCount = statistics.viewCount;

  return (
    <div className="p-2 m-2 w-60 shadow-lg ">
      <img className="rounded-lg" src={thumbnailUrl} alt="thumbnail of video" />

      <ul>
        <li className="font-bold py-2">{title || "No title available"}</li>
        <li>{channelTitle || "No channel title available"}</li>
        <li>{viewCount ? `${viewCount} views` : "No view count available"}</li>
      </ul>
    </div>
  );
};
