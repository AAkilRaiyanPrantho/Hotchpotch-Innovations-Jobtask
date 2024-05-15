import review1 from "../../../images/1 (2).png";
import review2 from "../../../images/2 (2).png";
import review3 from "../../../images/3 (2).png";
import review4 from "../../../images/4 (2).png";
import review5 from "../../../images/5 (2).png";
import review6 from "../../../images/6 (2).png";
import review7 from "../../../images/7 (2).png";
import review8 from "../../../images/8 (2).png";

const CustomerReviews = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10 lg:py-20">
      <h1 className="text-4xl font-semibold text-center mb-5 text-white">
        What our customers say
      </h1>
      <p className="text-md font-normal text-center mb-10 text-[#FAFAFA]">
        Read why thousands of marketers, writers, and <br/> entrepreneurs love us so
        much.
      </p>
      <div className="grid grid-cols-1 max-lg:p-4 lg:grid-cols-4 gap-4">
        <div className="flex flex-col gap-4">
          <img src={review1}></img>
          <img src={review7}></img>
        </div>
        {/* <div className="">
          
        </div> */}
        <div className="flex flex-col gap-4">
          <img src={review2}></img>
          <img src={review6}></img>
        </div>
        {/* <div className="">
          
        </div> */}
        <div className="flex flex-col gap-4">
          <img src={review3}></img>
          <img src={review5}></img>
        </div>
        {/* <div className="">
          
        </div> */}
        <div className="flex flex-col gap-4">
          <img src={review4}></img>
          <img src={review8}></img>
        </div>
        {/* <div className="">
          
        </div> */}
      </div>
    </div>
  );
};

export default CustomerReviews;
