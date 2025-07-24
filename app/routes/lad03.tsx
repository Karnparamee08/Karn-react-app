// Filename : lad03.tsx
import Profile from "./conponents/profiles";
import Contact from "./conponents/Contact";

 export default function myprofile(){
    return(
        <>
        <Profile />
          <div className="flex items-center m-5 w-1/2 mx-auto">
        <div className="grid grid-cols-3 gap-3 mx-auto">
        <Contact ladel="Paramee Thepmongkol" 
                 link="https://www.facebook.com/karn2548" 
                 icon="/images/fb.png" 
                 />
         <Contact ladel="karn_paramee" 
                 link="https://www.instagram.com/karn_paramee/" 
                 icon="/images/ig.png"
                  />
        </div>
    </div>
        <div className="ps-5 pe-5 pt-3 pb-1 bg-rose-400 rounded w-16 flex justifly-center mt-5">
        <a href="/">Back</a>
        </div>
        </>
          
    );
}