import { about2, } from "../assests/assest";

export default function About(){
    return(
        <div className="flex ml-32 justify-around bg-sky-500 h-96 w-3/4 mt-20 rounded-lg opacity-80 mb-44 overflow-hidden">
            <img src={about2} alt="about" className=" w-96 h-full opacity-80"/>
            <div>
                <h1 className="text-6xl text-white text-center mt-16 font-title">
                    About Us
                </h1>
                <p className="text-center text-xl font-bold mt-10">
                wedo ,photography,short movies/series,computer repairing hardware & soft ware,printing ,typing dubricating cd  <br/>
                 /dvd or books, computer teaching software & hard ware,studio programming, audio & vedi
                </p>
            </div>


        </div>
    );
}