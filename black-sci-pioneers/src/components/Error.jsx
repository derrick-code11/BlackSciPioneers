import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <>
      <section className="text-center">
        <h1 className="text-center font-bold text-4xl mb-6">Page Not Found</h1>
        <NavLink to='/' className="bg-green-500 px-4 py-2 rounded-lg text-white">Back Home</NavLink>
      </section>
    </>
  );
};

export default Error;
