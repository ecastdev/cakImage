import {  chikoswe, coveringRing, filmMaking, musicProduct, musicproduct2, ring,  summerImage, tableImage,  } from "../assests/assest";
import Fab from '@mui/material/Fab';

export default function Encounter(){
    const encounterData = [
        chikoswe,summerImage,musicProduct,musicproduct2,filmMaking,coveringRing


    ]
    return(
        <div className="mt-52 grid place-content-center"> 
            <h1 className="text-4xl font-subt text-center text-sky-600">Encounter our services </h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-32">
                <img src={tableImage} alt="encounter" className=" group relative grid col-span-2 w-full h-80 rounded-lg group hover:opacity-50"/>
                {/* hover */}
                <div className=" transition  text-center transform mt-16 
                translate-y-8 ease invisible    absolute group-hover:visible pr-10 m1-4
                text-white  group-hover:translate-y-0 rounded-full focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50 ">
                <Fab variant="extended" color="secondary" >
                        {/* <NavigationIcon sx={{ mr: 1 , color:'secondary'}} /> */}
                                Enroll
                    </Fab> 
              </div>
                
                <img src={ring} alt="encounter" className=" w-80 h-80 rounded-lg group hover:opacity-50"/>
                {/* hover2 */}
                <div className=" transition  text-center transform mt-16 
                translate-y-8 ease invisible    absolute group-hover:visible pr-10 m1-4
                text-white  group-hover:translate-y-0 rounded-full focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50 ">
                <Fab variant="extended" color="secondary" >
                        {/* <NavigationIcon sx={{ mr: 1 , color:'secondary'}} /> */}
                                Enroll
                    </Fab> 
              </div>
                {encounterData.map((encount) =>(
                    <img src={encount} alt="encount" className=" w-80 h-80 rounded-lg group hover:opacity-50"/>))}
                    {/* hover3 */}
                    <div className=" transition  text-center transform mt-16 
                translate-y-8 ease invisible    absolute group-hover:visible pr-10 m1-4
                text-white  group-hover:translate-y-0 rounded-full focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50 ">
                <Fab variant="extended" color="secondary" >
                        {/* <NavigationIcon sx={{ mr: 1 , color:'secondary'}} /> */}
                                Enroll
                    </Fab> 
              </div>
                </div>
        </div>
    );
}