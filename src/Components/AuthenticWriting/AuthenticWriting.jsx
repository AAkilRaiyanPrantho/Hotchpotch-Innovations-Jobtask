import Result from '../../../images/Card 1.png'

const AuthenticWriting = () => {
    return (
        <div className="max-w-7xl mx-auto py-0">
        <div className="hero bg-[#12141D] px-4">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={Result}
              className="lg:max-w-xl rounded-lg"
            />
            <div>
              <h1 className="text-3xl font-bold">Write what you want to convey through clear, & authentic writing</h1>
              <p className="py-6">
              AI-Writer is the most accurate content generation platform and writing tool that helps you transform your text into a completely personalized.
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