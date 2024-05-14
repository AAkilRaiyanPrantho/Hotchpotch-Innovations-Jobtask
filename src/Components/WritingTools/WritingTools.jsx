import png1 from '../../../images/1.png'
import png2 from '../../../images/2.png'
import png3 from '../../../images/3.png'
import png4 from '../../../images/4.png'
import png5 from '../../../images/5.png'
import png6 from '../../../images/6.png'
import png7 from '../../../images/7.png'
import png8 from '../../../images/8.png'

const WritingTools = () => {
    return (
        <div className="max-w-7xl mx-auto pt-20">
            <h1 className="text-3xl font-bold text-center mb-4">54 exciting writing tools</h1>
            <p className="text-md font-normal text-center mb-4">AI engines take information from various sources and read them like a human would do.</p>
            <div className='grid grid-cols-2 lg:grid-cols-4 items-center justify-center mx-auto gap-4'>
                <div><img src={png1}></img></div>
                <div><img src={png2}></img></div>
                <div><img src={png3}></img></div>
                <div><img src={png4}></img></div>
                <div><img src={png5}></img></div>
                <div><img src={png6}></img></div>
                <div><img src={png7}></img></div>
                <div><img src={png8}></img></div>
            </div>
            <div className='flex items-center justify-center my-4'><button>See all 54 available tools</button></div>
        </div>
    );
};

export default WritingTools;