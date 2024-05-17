
import Landing from './components/Landing/landing';
import Landing2 from './components/Landing/landing2';
import Choose from './components/choose/choose';
import Explore from './components/explore/explore';
import Encounter from './components/encounter/encouinter';
import About from './components/About/about';
export default function App2(){
    return(
        <>
            <div id='landing' className='flex flex-col lg:flex-row bg-hero bg-center bg-no-repeat bg-cover h-screen items-center justify-around'>
                <div className='mt-10'>
                <Landing/>
                </div>
                {/* the image */}
                <div className='mt-10'>
                <Landing2/>
                </div>
        </div>
        {/* choose us */}
        <Choose/>
        {/* explore */}
        <div className='grid place-content-center'>
            <Explore/>
        </div>
        {/* encounter our services */}
        <Encounter/>
        <About/>
         
        </>
    );
}