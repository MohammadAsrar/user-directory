const FailurePage = (props) => {
  const { retryClicked } = props;

  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="mb-5"
        id="img-failure"
      />
      <h1 className="text-3xl text-center">Oops! Something Went Wrong</h1>
      <p id="para-failure" className="text-xl mt-2 text-center">
        We cannot seem to find the page you are looking for.
      </p>
      <button
        type="button"
        data-testid="button"
        className="mt-4 w-full max-w-28 py-2 bg-blue-500 hover:bg-blue-700 hover:scale-105 text-white text-lg font-semibold rounded-lg transition-all duration-300"
        onClick={() => retryClicked()}
      >
        Retry
      </button>
    </div>
  );
};

export default FailurePage;
