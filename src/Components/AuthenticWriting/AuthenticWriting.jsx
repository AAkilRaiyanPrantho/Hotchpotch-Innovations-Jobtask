import Result from '../../../images/Card 1.png'

const AuthenticWriting = () => {
    return (
        <div className="max-w-7xl mx-auto py-20">
        <div className="hero bg-[#12141D] px-4">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={Result}
              className="lg:max-w-xl rounded-lg"
            />
            <div>
              <h1 className="text-3xl font-bold">Create content efficiently and quickly with great AI writing tools</h1>
              <p className="py-6">
              150k+ users. No Credit Card Required. Pro designs and writing at no cost. Start for free. Ai Writer Tool | Generate text for ecom, social media, website, sales, blogs etc.
              </p>
              <button>
            <a className="btn bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-white">
              Start 14 Days Free Trial
            </a>
          </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AuthenticWriting;