function NoPage() {
  return (
    <>
      <div className="max-w-[1000px] py-72 h-screen mx-auto text-center flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Error 404 - Page Not Found</h1>
        <p className="text-xl font-medium text-blue-500 py-4">
          Please return to an available page through the navigation bar.
        </p>
      </div>
    </>
  );
}

export default NoPage;
