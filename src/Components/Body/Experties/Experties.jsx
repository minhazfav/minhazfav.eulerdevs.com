import { IoLogoWordpress } from "react-icons/io";

const Experties = () => {
  return (
    <div
      style={{ margin: "0 auto" }}
      className="max-w-6xl flex flex-col bg-red-600 h-52"
    >
      <div>
        <h2 className="text-center text-4xl py-12">My Services</h2>
      </div>
      <div className="bg-green-800">
        <div className="h-14 w-14 flex justify-center items-center bg-base-100 dark:bg-base-200 rounded-md">
          <IoLogoWordpress className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Experties;
