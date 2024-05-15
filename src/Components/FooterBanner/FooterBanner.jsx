const FooterBanner = () => {
  return (
    <div>
    {/* For PC screen */}
    <div className="max-w-7xl mx-auto rounded-lg p-8 lg:my-20 max-lg:hidden w-[1295px] flex flex-row justify-between items-center bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF]">
        <div><h1 className="text-white font-semibold text-3xl">It will help you improve your writing & bring <br/> ideas more c learly.</h1></div>
        <div><button className="btn text-black bg-white border-white">Start 14 Days Free Trial</button></div>
    </div>
      {/* For Mobile Only */}
      <div className="card w-96 bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] mx-auto lg:hidden">
        <div className="card-body items-center">
          <h2 className="card-title text-white text-center text-xl mb-4">It will help you improve your writing & bring ideas more c learly.</h2>
          
          <div className="card-actions justify-end">
          <button className="btn text-black bg-white border-white">Start 14 Days Free Trial</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
