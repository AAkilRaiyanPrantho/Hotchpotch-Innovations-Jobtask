import banner from '../../../images/BG.png'
import play from '../../../images/Icon.png'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})` }}>
            <h1>Write better <br/> content for your <br/> <span className='underline bg-gradient-to-r from-[#FFC947] to-[#FC6739] text-transparent  bg-clip-text'>Facebook Ads</span></h1>
            <p>Artificial intelligence writting tool helps you create blogs, social media websites and much more.</p>
            <button><a className="btn bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-white">Start 14 Days Free Trial</a></button>
            <p><img src={play}></img>Watch A Demo</p>
        </div>
    );
};

export default Banner;