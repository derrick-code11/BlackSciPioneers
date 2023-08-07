/* eslint-disable react/no-unescaped-entities */
const Documentation = () => {
  return (
    <>
      <h2 className="text-4xl text-center font-bold mb-2">Documentation</h2>
      <div className="header-underline"></div>

      <section className="px-5 md:max-w-xl md:mx-auto lg:max-w-3xl">
        <h3 className="font-bold text-2xl mt-5 mb-2">What is this API?</h3>
        <p>
          Welcome to the Black Scientists API project! This API provides
          information about 30 notable black scientists and their contributions.
        </p>

        <h3 className="font-bold text-2xl mt-5 mb-2">Why this API?</h3>
        <p>
          To pay tribute to the black scientists who revolutionized knowledge,
          to commemorate their invaluable contributions, to echo their
          discoveries and innovations, to showcase the influence they've had on
          the world of science, to uplift their aspirations, and to realize
          their visions of a more enlightened and inclusive scientific
          community.
        </p>

        <h3 className="font-bold text-2xl mt-5 mb-2">
          Contributing to this API
        </h3>
        <p>
          It's my dream to make this API a bigger one 🚀🔥 hence your
          contributions are welcome! If you have any additions or suggestions
          for improvement, please feel free to submit a pull request. I'll be
          happy to review them since they could provide a new learning
          experience.
        </p>

        <h3 className="font-bold text-2xl mt-5 mb-2">
          About this API: Cloning and running the API
        </h3>
        <p className="my-5">
          1. Clone the repository using{" "}
          <pre>
            `git clone
            https://github.com/derrick-code11/black-scientists-api.git`
          </pre>
          cd black-scientists-api.
        </p>
        <p className="my-5">
          2. Install dependencies using{" "}
          <pre className="inline">
            `npm install express mongoose cors nodemon`
          </pre>
        </p>
        <p className="my-5">
          3. Run the API using the command{" "}
          <pre className="inline">`nodemon app.js`</pre>
        </p>
      </section>
    </>
  );
};

export default Documentation;
