export const Videocard = ({ info }) => {
  if (!info) {
    console.error("Info object is missing or undefined");
    return null;
  }

  console.log(info);

  const { snippet, statistics } = info || {};
  const { channelTitle, title, thumbnails } = snippet || {};
  const thumbnailUrl = thumbnails?.high?.url;
  const viewCount = statistics?.viewCount;

  return (
    <div>
      <img src={thumbnailUrl} alt="thumbnail of video" />

      <ul>
        <li>{title || "No title available"}</li>
        <li>{channelTitle || "No channel title available"}</li>
        <li>{viewCount ? `${viewCount} views` : "No view count available"}</li>
      </ul>
    </div>
  );
};
