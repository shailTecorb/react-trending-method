const LandingPage = () => {
  return (
    <div>
      <title>Sale used phone in lucknow (Grab Deals)</title>
      <nav className="bg-purple-500 text-white flex justify-between">
        {/* <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          className="h-10 pt-3 px-3 rounded-2xl"
        /> */}
        <span className="mx-3 flex items-center font-bold text-xl ">PhonesMenia</span>
        <ul className="flex space-x-12 justify-end px-28 py-4">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Collegue</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
      </nav>
      <main className="bg-fuchsia-100 flex justify-around">
        <div className=" py-48 pl-9">
          <div className="text-4xl">The best phone in the town</div>
          <p className="py-3 w-1/3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <div className="my-4">
            <button className="bg-purple-700 py-2 px-3 rounded-3xl text-white hover:bg-fuchsia-600 hover:text-gray-300 mx-2">Buy Now</button>
            <button className="bg-purple-700 py-2 px-3 rounded-3xl text-white hover:bg-fuchsia-600 hover:text-gray-300 mx-2">Contact Us</button>

          </div>
        </div>
        <div className="flex items-center px-24">
            <img src="bg.jpg" className="h-80 w-72"/>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
