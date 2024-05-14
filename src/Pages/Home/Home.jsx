import AIWritingTools from "../../Components/AIWritingTools/AIWritingTools";
import AuthenticWriting from "../../Components/AuthenticWriting/AuthenticWriting";
import Banner from "../../Components/Banner/Banner";
import Mixland from "../../Components/Mixland/Mixland";
import TrustedCustomer from "../../Components/Trusted Customer/TrustedCustomer";
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
        </div>
    );
};

export default Home;