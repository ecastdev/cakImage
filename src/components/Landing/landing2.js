import { Button } from "flowbite-react";
import { behindScene } from "../assests/assest";
import { Card } from "flowbite-react";
import { Camera,CameraAltRounded,CameraRounded} from "@mui/icons-material";
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
            <img src={behindScene} alt="Your Image" className="rounded-lg border-8 h-90 w-96 border-sky-900  opacity-40" />
            
            {/* card */}
            <Card href="#" className=" flex max-w-60 max-h-20 bg-sky-400 bg-opacity-30 absolute top-52 ">
                <div className="flex">
                <Camera color="secondary"/>
                <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                    Film making
                </h5>

                </div>
               
                
            </Card>
            {/* card 2 */}
            <Card href="#" className=" flex justify-between max-w-60 max-h-20 overflow-hidden bg-sky-400 bg-opacity-30  absolute top-28 right-16 ">
           < div className="flex">
                <Camera color="secondary"/>
                <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                    Music Video shooting
                </h5>

                </div>
                
            </Card>
            {/* card 3 */}
            <Card href="#" className=" flex justify-between max-w-60 max-h-20 overflow-hidden bg-rose-400 bg-opacity-30  absolute top-96 right-96    ">
            < div className="flex">
                <Camera color="secondary"/>
                <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                    Wedding ceremony shooting
                </h5>

                </div>
                
            </Card>
            {/* card 4 */}
            <Card href="#" className=" flex justify-between max-w-60 max-h-20 overflow-hidden bg-slate-400 bg-opacity-30  absolute top-80 right-20 ">
            < div className="flex">
                <Camera color="secondary"/>
                <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                    HD photos shooting
                </h5>

                </div>
               
            </Card>
            {/* card 5 */}
            <Card href="#" className=" flex justify-between max-w-60 max-h-20 overflow-hidden bg-slate-400 bg-opacity-30  absolute bottom-32 right-32 ">
            < div className="flex">
                <Camera color="secondary"/>
                <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                    Video editing
                </h5>

                </div>
               
            </Card>
        </div>
    );
}