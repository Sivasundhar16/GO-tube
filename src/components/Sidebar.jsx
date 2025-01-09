import { useSelector } from "react-redux";

export const Sidebar = () => {
  const ismenu = useSelector((store) => store.app.isMenuopen);
  if (!ismenu) return null; //early return
  return (
    <div className="p-4 shadow-lg w-48">
      <div className="pb-3 font-sans ">
        <h1 className="font-bold">Home</h1>
        <h1 className="font-bold">Short</h1>
        <h1 className="font-bold">Add</h1>
        <h1 className="font-bold">Subscribe</h1>
        <h1 className="font-bold">Account</h1>
      </div>

      <h1 className="font-semibold">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-semibold pt-3 ">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};
