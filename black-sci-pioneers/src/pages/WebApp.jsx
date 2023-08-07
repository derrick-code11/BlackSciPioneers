import { useState, useEffect } from "react";
const WebApp = () => {
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
        <section className="grid grid-cols-1 gap 10 px-5 mt-10 2xl:grid-cols-2 2xl:px-32 2xl:gap-20 lg:px-32 xl:px-56">
          {scientists.map((scientist) => {
            const {
              _id,
              name,
              country,
              field,
              education,
              description,
              dob,
              died,
              age,
              knownFor,
              image,
            } = scientist;

            return (
              <article
                key={_id}
                className="sm:grid sm:grid-cols-2 sm:gap-5 m-4"
              >
                <div>
                  <img src={image} alt={name} className="w-full md:w-96" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl mt-2 ">{name}</h3>
                  <div className="bg-orange-500 h-1 w-14 my-1"></div>
                  <p className="text-justify mt-2 mb-4">{description}</p>
                  <ul>
                    <li>
                      <span className="font-bold">Country: </span>
                      {country}
                    </li>
                    <li>
                      <span className="font-bold">Field: </span>
                      {field}
                    </li>
                    <li>
                      <span className="font-bold">Alma mater: </span>
                      {education}
                    </li>
                    <li>
                      <span className="font-bold">Date of birth: </span>
                      {new Date(dob).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </li>
                    <li>
                      <span className="font-bold">Died/Living: </span>
                      {died === "N/A"
                        ? "Alive"
                        : new Date(died).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                    </li>
                    <li>
                      <span className="font-bold">Age: </span>
                      {age}
                    </li>
                    <li>
                      <span className="font-bold">KnownFor: </span>
                      {knownFor}
                    </li>
                  </ul>
                </div>
              </article>
            );
          })}
        </section>
      )}
    </>
  );
};

export default WebApp;
