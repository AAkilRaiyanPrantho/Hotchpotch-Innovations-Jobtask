import banner from "../../../images/BG.png";
import play from "../../../images/Icon.png";

const Banner = () => {
  return (
    <div
      className="flex flex-col gap-4 items-center justify-center text-center py-14 border-b border-gray-800"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div>
        <h1 className="text-[40px] font-medium">
          Write better <br /> content for your <br />{" "}
          <span className="bg-gradient-to-r from-[#FFC947] to-[#FC6739] text-transparent  bg-clip-text border-b-4 border-orange-400">
            Facebook Ads
          </span>
        </h1>
      </div>
      <div className="py-4">
        <p>
          Artificial intelligence writing tool helps you create blogs,
          <br /> social media websites and much more.
        </p>
      </div>
      <div>
        <button>
          <a className="btn bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-white">
            Start 14 Days Free Trial
          </a>
        </button>
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <img src={play}></img>
        <p>Watch A Demo</p>
      </div>
    </div>
  );
};

export default Banner;
