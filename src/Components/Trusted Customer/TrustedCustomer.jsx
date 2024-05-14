import logo from '../../../images/Logo.png'
import logo1 from '../../../images/Logo (1).png'
import logo2 from '../../../images/Logo (2).png'
import logo3 from '../../../images/Logo (3).png'
import logo4 from '../../../images/Logo (4).png'
import logo5 from '../../../images/Logo (5).png'
import logo6 from '../../../images/Logo (6).png'
import logo7 from '../../../images/Logo (7).png'

const TrustedCustomer = () => {
    return (
        <div>
            <h1 className='text-center font-medium text-2xl py-10'>Trusted by nearly 5000+ paying customers</h1>
            <div className="flex flex-row items-center justify-center gap-x-20 py-2">
                <div><img src={logo}></img></div>
                <div><img src={logo1}></img></div>
                <div><img src={logo2}></img></div>
                <div><img src={logo3}></img></div>
            </div>
            <div className="flex flex-row items-center justify-center gap-x-20 py-2">
                <div><img src={logo4}></img></div>
                <div><img src={logo5}></img></div>
                <div><img src={logo6}></img></div>
                <div><img src={logo7}></img></div>
            </div>
            
            
            
        </div>
    );
};

export default TrustedCustomer;