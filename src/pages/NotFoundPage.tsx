import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className='flex flex-col gap-2'>
      <h1>404 Not Found</h1>

      <button className='bg-slate-700 w-20 border-slate-400 border-2 rounded'>
        <Link to={"/"}>Home</Link>
      </button>
    </div>
  );
};
export default NotFoundPage;
