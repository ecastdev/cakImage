import {  chikoswe, coveringRing, filmMaking, musicProduct, musicproduct2, ring,  summerImage, tableImage,  } from "../assests/assest";

export default function Encounter(){
    const encounterData = [
        chikoswe,summerImage,musicProduct,musicproduct2,filmMaking,coveringRing


    ]
    return(
        <div className="mt-52 grid place-content-center"> 
            <h1 className="text-4xl font-subt text-center text-sky-600">Encounter our services </h1>
            <div className="grid grid-cols-3 gap-8 mt-32">
                <img src={tableImage} alt="image" className="grid col-span-2 w-3/4 h-80 rounded-lg"/>
                <img src={ring} alt="image" className=" w-80 h-80 rounded-lg"/>
                {encounterData.map((encount) =>(
                    <img src={encount} alt="encount" className=" w-80 h-80 rounded-lg"/>))}
                </div>
        </div>
    );
}