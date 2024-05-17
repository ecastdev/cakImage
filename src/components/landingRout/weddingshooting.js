import { FamilyRestroomRounded, LocalActivityRounded, LocalHotelRounded } from "@mui/icons-material";
import { tableImage,ring, cakPerson } from "../assests/assest";
import { FacebookRounded, Instagram, Twitter, WhatsApp, YouTube } from "@mui/icons-material";

export default function Weddingshooting(){
    const weddingData = [
        {
            pictur :tableImage ,
            locationn: 'Blantyre ndirande zambia',
            familyy: 'Nyamilazi Family ',
            vacation: 'goldenPeacoak  '
        },
        {
            pictur : ring,
            locationn: 'Blantyre soche ',
            familyy: 'Ekwedeni Family ',
            vacation: 'goldenPeacoak  ',
        },
        {
            pictur :tableImage ,
            locationn: 'Blantyre soche ',
            familyy: 'Ekwedeni Family ',
            vacation: 'goldenPeacoak  ',
        },
        
    ]
    return(
        <div className="grid grid-row gap-6 ">
            {/* fill form */}
             <div className="grid fixed top-20 left-10 gap-32  hidden lg:block "> 
                    <div>
                      <YouTube color="secondary" variant='large'/>

                    </div>
                    <div>
                    <Instagram color="secondary" />

                    </div>
                    <div>
                    <FacebookRounded color="secondary" />

                    </div>
                    
                    <div>
                    <WhatsApp color="secondary" />

                    </div>
                    <div>
                    <Twitter color="secondary" />

                    </div>
            
                    
            </div>
            {/* wedding content */}
        <div className="grid place-content-center  ">

            <h1 className="text-6xl font-title text-slate-500 mt-10 text-center">
                Wedding shooting
            </h1>
            {weddingData.map((wedding) =>(
                  <div className="grid place-content-center mt-10">
                  <h2 className="text-3xl font-subt text-black text-center underline decoration-sky-600 mb-10">
                      {wedding.familyy}
                  </h2>
                  <img src={tableImage} alt="table " className="w-full h-96 rounded-lg hover:opacity-30"/>
                  <div className="mt-10">
                      <p className="">
                          <LocalActivityRounded color="secondary"/> 
                         {wedding.locationn}
                      </p>
                      <p className="mt-3">
                         
                          <FamilyRestroomRounded color="secondary"/> 
                          {wedding.familyy}
                      </p>
                      <p className="mt-3">
                         
                          
                          <LocalHotelRounded  color="secondary"/>
                           
                          {wedding.vacation}  
                      </p>
  
                  </div>
  
              </div>

            ))}
        </div>
        {/* fill form */}
        <img src={cakPerson} className="w-96 h-screen fixed right-0 top-10"/>
           
        </div>
    );
}