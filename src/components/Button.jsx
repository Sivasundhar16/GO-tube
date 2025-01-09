export const Button = ({ name }) => {
  return (
    <div className="px-2  ">
      <div className="flex flex-row gap-6 ">
        <button className="px-3  py-2 mt-2 ml-2 bg-blue-400 rounded-md ">
          {name}
        </button>
      </div>
    </div>
  );
};
