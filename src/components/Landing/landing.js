import { Button } from "flowbite-react";
import Typewriter from 'typewriter-effect';
export default function Landing(){

    return(
        <div className="flex flex-col items-center justify-space-between gap-10">
            <div>
                    <h1 className=" text-center text-white text-4xl mt-14 lg:mt-0 lg:text-7xl font-extrabold">
                        Bring <span className="text-sky-600"> <br/>to us</span> and we will <br/>
                        <span className="text-sky-600">Produce</span> <br/>  for you
                    </h1>
                    <p  className=" font-light font-subt text-white   text-xl  lg:text-2xl text-center mt-9 max-w-72">
                            <Typewriter
                            options={{
                                autoStart: true,
                                loop:true,
                                delay:50,
                                strings:['Enroll and get connected to our service by clicking the button below']
                            }}
                            /> 
                        </p>
                </div>
            <div className="top-24">
            <Button color="blue" className="bg-sky-600">Subscribe</Button>

            </div>
            
        </div>
    );
}