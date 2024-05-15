import AIWritingTools from "../../Components/AIWritingTools/AIWritingTools";
import AuthenticWriting from "../../Components/AuthenticWriting/AuthenticWriting";
import Banner from "../../Components/Banner/Banner";
import CustomerReviews from "../../Components/CustomerReviews/CustomerReviews";
import FooterBanner from "../../Components/FooterBanner/FooterBanner";
import Mixland from "../../Components/Mixland/Mixland";
import TrustedCustomer from "../../Components/Trusted Customer/TrustedCustomer";
import WiseDecision from "../../Components/WiseDecision/WiseDecision";
import WritingTools from "../../Components/WritingTools/WritingTools";


const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <TrustedCustomer></TrustedCustomer>
        <AIWritingTools></AIWritingTools>
        <AuthenticWriting></AuthenticWriting>
        <WritingTools></WritingTools>
        <Mixland></Mixland>
        <CustomerReviews></CustomerReviews>
        <WiseDecision></WiseDecision>
        <FooterBanner></FooterBanner>
        </div>
    );
};

export default Home;