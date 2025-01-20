const NotFound = () => (
  <div className="flex flex-col justify-center items-center h-screen dark:bg-slate-900 p-3">
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
      alt="not found"
      className="w-80 md:w-96"
    />
    <h1 className="text-3xl m-3 text-center font-bold">Page Not Found</h1>
    <p className="text-xl text-center">
      We are sorry, the page you requested could not be found
    </p>
  </div>
);

export default NotFound;
