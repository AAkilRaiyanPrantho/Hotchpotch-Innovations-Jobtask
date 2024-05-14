import AIWritingTools from "../../Components/AIWritingTools/AIWritingTools";
import AuthenticWriting from "../../Components/AuthenticWriting/AuthenticWriting";
import Banner from "../../Components/Banner/Banner";
import TrustedCustomer from "../../Components/Trusted Customer/TrustedCustomer";


const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <TrustedCustomer></TrustedCustomer>
        <AIWritingTools></AIWritingTools>
        <AuthenticWriting></AuthenticWriting>
        </div>
    );
};

export default Home;