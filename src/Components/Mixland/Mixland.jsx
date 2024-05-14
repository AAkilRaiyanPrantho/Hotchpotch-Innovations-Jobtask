import blogs from "../../../images/Image 1.png";

const Mixland = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20">
      <h1 className="text-3xl font-bold text-center mb-10">
        Mixland helps you <br /> build beautiful website
      </h1>
      <div className="flex flex-col items-center gap-10 justify-center lg:flex-row">
        <div>
          <div className="py-2">
            <a className="btn justify-start w-[302px] bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-white">
              Blog Headlines
            </a>
          </div>
          <div className="py-2">
            <a className="btn justify-start w-[302px] btn-outline text-white">Blog Intros</a>
          </div>
          <div className="py-2">
            <a className="btn justify-start w-[302px] btn-outline text-white">Content Rewriter</a>
          </div>
          <div className="py-2">
            <a className="btn justify-start w-[302px] btn-outline text-white">Facebook Ads</a>
          </div>
          <div className="py-2">
            <a className="btn justify-start w-[302px] btn-outline text-white">Product Description</a>
          </div>
          <div className="py-2">
            <a className="btn justify-start w-[302px] btn-outline text-white">PAS Copywriting Formula</a>
          </div>
        </div>
        <div>
          <img src={blogs}></img>
        </div>
      </div>
    </div>
  );
};

export default Mixland;
