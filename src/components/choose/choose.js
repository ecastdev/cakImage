import { cakPerson } from "../assests/assest";
import { Button, Card } from "flowbite-react";

export default function Choose(){
    return(
        <div className="flex flex-col items-center mt-20">
        <h1 className="text-3xl lg:text-6xl text-sky-800 text-center underline uppercase font-subt"> 
            wHY CHOOSE US
        </h1>
            <div className="flex flex-col lg:flex-row   bg-slate-800 shadow-2xl  shadow-slate-800 h-auto lg:h-96 w-3/4 justify-center items-center gap-3 rounded-2xl overflow-hidden mt-10">
                <img src={cakPerson} alt="cak- image person" className="w-80 h-80 lg:h-full contrast-100"/>
                {/* card 1 */}
                <Card className="max-w-80 max-h-80 bg-sky-700">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    HIGH DEFINITION IMAGES
                </h5>
                <p className="font-normal text-gray-200 dark:text-gray-400">
                    we have best equipmemts to  produce for your function with high qualit pictures
                </p>
                <Button>
                    Read more
                    <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                                    </svg>
                    </Button>
                    </Card>
                    {/* card 2 */}
                                <Card className="max-w-80 bg-sky-600 mb-16 lg:mb-0">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    READY TO WORK ANYWEHRE
                </h5>
                <p className="font-normal text-gray-100 dark:text-gray-400">
                    We are coonnected to all parts of malawi
                </p>
                <Button>
                    Read more
                    <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                    </svg>
                </Button>
                </Card>
            </div>
        </div>
    );
}