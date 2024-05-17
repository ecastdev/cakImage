import { Button } from "flowbite-react";
import { behindScene } from "../assests/assest";
import { Card } from "flowbite-react";
import { Camera,CameraAltRounded,CameraRounded} from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function Landing2(){

    return(
        <div className="">
              {/* <div className="relative inline-block">
                <img src="your-image-url.jpg" alt="Your Image" className="rounded-lg" />
                <div className="absolute inset-0 rounded-lg border-4 animate-spin border-green-500"></div>
                <div className="absolute inset-0 rounded-lg border-4 animate-spin border-blue-500"></div>
                <div className="absolute inset-0 rounded-lg border-4 animate-spin border-red-500"></div>
                <div className="absolute inset-0 rounded-lg border-4 animate-spin border-yellow-500"></div>
                </div> */}
            <img src={behindScene} alt="Your Image" className="rounded-lg border-8 w-60 h-72 lg:h-3/4 lg:w-96  border-sky-900  opacity-40" />
            
            {/* card */}
            <Link to='filmMaking'>
                <Card  className=" flex items-center max-w-60 max-h-14 lg:max-w-60 lg:max-h-20  bg-sky-400 bg-opacity-30 absolute bottom-48 right-4 lg:top-52 ">
                    <div className="flex">
                    <Camera color="secondary"/>
                    <h5 className="text-xs lg:text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                        Film making
                    </h5>

                    </div>    
                </Card>
            </Link>
           
            {/* card 2 */}
            <Link to='musicvideoshooting'>
           
                <Card  className=" flex justify-between items-center max-w-32 max-h-12  lg:max-w-60 lg:max-h-20 overflow-hidden bg-sky-400 bg-opacity-30  absolute bottom-20 right-16 lg:top-32 lg:right-16 ">
              <div className="flex">
                    <Camera color="secondary"/>
                    <h5 className="text-xs lg:text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                        Music Video shooting
                    </h5>

                    </div>
                    
                </Card>
            </Link>
            {/* card 3 */}
            <Link to='weddingshooting'>
                <Card  className=" flex justify-between items-center max-w-32 max-h-12  lg:max-w-60 lg:max-h-20  overflow-hidden bg-rose-400 bg-opacity-30  absolute bottom-8 left-4 lg:top-96 lg:right-96    ">
                < div className="flex">
                    <Camera color="secondary"/>
                    <h5 className="text-xs lg:text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                        Wedding ceremony shooting
                    </h5>

                    </div>
                    
                </Card>
             </Link>
            {/* card 4 */}
            <Link to='4kphotos'>
                <Card  className=" flex justify-between items-center max-w-32 max-h-12  lg:max-w-60 lg:max-h-20  overflow-hidden bg-slate-400 bg-opacity-30  absolute bottom-0 lg:top-80 right-20  ">
                < div className="flex">
                    <Camera color="secondary"/>
                    <h5 className="text-xs lg:text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                        HD photos shooting
                    </h5>
                    </div>
                </Card>
            </Link>
            {/* card 5 */}
            <Link to='videoshooting'>
                <Card  className=" flex justify-between items-center max-w-32 max-h-12  lg:max-w-60 lg:max-h-20  overflow-hidden bg-slate-400 bg-opacity-30  absolute bottom-32 left-16 ">
                < div className="flex">
                    <Camera color="secondary"/>
                    <h5 className="text-xs lg:text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                        Video editing
                    </h5>
                    </div>               
                </Card>
            </Link>
        </div>
    );
}