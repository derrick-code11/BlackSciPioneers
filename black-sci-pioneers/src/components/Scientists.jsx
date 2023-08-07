import { useState, useEffect } from "react";

const Scientists = () => {
  const [scientists, setScientists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchScientists = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://black-scientists-api-c34142d28576.herokuapp.com/scientists"
        );
        const data = await response.json();
        setIsLoading(false);
        setScientists(data);
      } catch (error) {
        console.log(error);
        setIsLoading(true);
      }
    };

    fetchScientists();
  }, []);
  return (
    <>
      <h2 className="text-4xl text-center font-bold">Scientists</h2>
      <div className="bg-orange-500 h-1 w-28 mx-auto my-1"></div>

      {isLoading ? (
        <div className="loader-container 2xl: flex 2xl:justify-center 2xl:items-center">
          <div className="spinner"></div>
        </div>
      ) : (
        <section className="mx-auto mt-10 p-5 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:px-20">
          {scientists.map((scientist) => {
            const { _id, name, image } = scientist;

            return (
              <article key={_id} className="relative">
                <img src={image} alt={name} className="w-full sm:h-72"></img>
                <h3 className="absolute bottom-0 right-0 text-2xl uppercase px-2 text-white bg-black">
                  {name}
                </h3>
              </article>
            );
          })}
        </section>
      )}
    </>
  );
};

export default Scientists;
