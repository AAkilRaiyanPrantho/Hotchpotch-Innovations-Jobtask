const WiseDecision = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10 lg:py-20">
      <h1 className="text-4xl font-semibold text-center mb-5 text-white">
        Make the wise decision <br /> for your business
      </h1>
      <p className="text-md font-normal text-center mb-10 text-[#FAFAFA]">
        Choose from our affordable 3 packages
      </p>
      <div className="grid grid-cols-1 max-lg:p-4 lg:grid-cols-3 gap-4 items-center justify-center">
      {/* Artcard 1 */}
        <div className="artboard phone-1 bg-[#282A37] rounded-2xl flex flex-col justify-around items-center mx-auto">
          <div>
            <p className="text-md font-normal text-white mb-2">Starter Plan</p>
            <h1 className="text-md font-normal text-white mb-2">
              <span className="text-5xl font-semibold text-white">$29</span>
              /month
            </h1>
            <p className="text-sm font-normal text-white mb-2">
              This package is suitable for teams
              <br /> 1-15 people.
            </p>
          </div>
          <div>
            <p className="text-md font-bold text-white mb-2">
              What’s included:
            </p>
            <p className="text-sm font-normal text-white mb-2">
              10 GB Dedicated Hosting Free
            </p>
            <p className="text-sm font-normal text-white mb-2">
              Best for Developers, Freelancers
            </p>
            <p className="text-sm font-normal text-white mb-2">
              1 Year Support{" "}
            </p>
          </div>
          <div>
            <button className="btn btn-outline w-[250px] border-black text-white">
              Get Started
            </button>
          </div>
        </div>
        {/* Artcard 2 */}
        <div className="artboard phone-1 bg-[#282A37] rounded-2xl flex flex-col justify-around items-center mx-auto">
          <div>
            <p className="text-md font-normal text-white mb-2">Basic Plan</p>
            <h1 className="text-md font-normal text-white mb-2">
              <span className="text-5xl font-semibold text-white">$79</span>
              /month
            </h1>
            <p className="text-sm font-normal text-white">
              This package is suitable for teams
              <br /> 1-50 people.
            </p>
          </div>
          <div>
          <p className="text-md font-bold text-white mb-2">
              What’s included:
            </p>
            <p className="text-sm font-normal text-white mb-2">
            15 GB Dedicated Hosting Free
            </p>
            <p className="text-sm font-normal text-white mb-2">
            Best for Developers, Freelancers
            </p>
            <p className="text-sm font-normal text-white mb-2">
              5 Year Support{" "}
            </p>
            <p className="text-sm font-normal text-white mb-2">
            Free Custom Domain{" "}
            </p>
            <p className="text-sm font-normal text-white mb-2">
            Basic Statistics{" "}
            </p>
          </div>
          <div>
            <button className="btn bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-white w-[250px]">
              Get Started
            </button>
          </div>
        </div>
        {/* Artcard 3 */}
        <div className="artboard phone-1 bg-[#282A37] rounded-2xl flex flex-col justify-around items-center mx-auto">
          <div>
            <p className="text-md font-normal text-white">Premium Plan</p>
            <h1 className="text-md font-normal text-white">
              <span className="text-5xl font-semibold text-white">$129</span>
              /month
            </h1>
            <p className="text-sm font-normal text-[#FAFAFA]">
              This package is suitable for teams
              <br /> 1-100 people.
            </p>
          </div>
          <div>
          <p className="text-md font-bold text-white mb-2">
              What’s included:
            </p>
            <p className="text-sm font-normal text-white mb-2">
              20 GB Dedicated Hosting Free
            </p>
            <p className="text-sm font-normal text-white mb-2">
              Best for Developers, Freelancers
            </p>
            <p className="text-sm font-normal text-white mb-2">
              Unlimited Support{" "}
            </p>
            <p className="text-sm font-normal text-white mb-2">
            Free Custom Domain{" "}
            </p>
            <p className="text-sm font-normal text-white mb-2">
            Full Statistics{" "}
            </p>
          </div>
          <div>
            <button className="btn btn-outline w-[250px] border-black text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WiseDecision;
