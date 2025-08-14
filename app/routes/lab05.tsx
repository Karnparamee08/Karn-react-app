import Header from "./conponents/Header";
import Footer from "./conponents/Footer"
import { myTetmProj } from "./conponents/data/termProject";
import { useState } from "react";    

export default function myTermProject () {

    const [isTeam, setIsTeam] = useState(null);

    const handleTeam = (isTeam: any) => {
        setIsTeam(isTeam);
    }

    const myPage = "Karn_Paramee Term Project";
    const myName = "Paramee Thepmongkol";
    const myStudID = "026730491007-3";
   
      

    const tpSingle = myTetmProj.filter(tpTmp => {
      if (isTeam === null)
       return tpTmp.tpTeam === true || tpTmp.tpTeam === false
      else
       return tpTmp.tpTeam === isTeam
    });

    // function handleClick() {
    //    alert("คุณได้เลือกโปรเจค");
    // }   


     const handleClick = (tpId: any,ind:any ) => {
        let myOut = "";
        let myObj = myTetmProj[ind];

        myTetmProj[ind]
        myOut+="[ข้อมูลโปรเจค]\n";
        myOut+= "รหัส (ID):"+myObj.tpId+"\n"
        myOut+= "รายวิชา (Subject): "+myObj.tpSubj+"\n";
        myOut+= "หน้าปก (): "+myObj.tpCover+"\n";
        myOut+= "ลิ้ง ():"+myObj.tpUrl+"\n"
        myOut+= "\n-- Thank you --"
        //alert ("คุณได้เลือกโปรเจค รหัส:"+tpId+"!");
        alert(myOut);
     }


    const myTeamProj = tpSingle.map((tpObj, index) =>
        <div className="grid grid-cols-5 mx-auto border-gray-300" key={index}>
        <div className="w-32 p-1">
        <img src={tpObj.tpCover} className="w-full rounded-full" title={tpObj.tpSubj+" (ID:"+tpObj.tpId+")"} />
        </div>
        <div className="p-4 col-span-3 mb-auto">
        <h2 className="text-lg font-semibold text-gray-800">{tpObj.tpSubj}</h2>
        <p className="text-gray-600 text-sm mt-2">{tpObj.tpDesc}</p>
        <ItemTeam isTeam={tpObj.tpTeam}/>
        </div>
        <div className="p-4 mb-auto">
        <a href="#" className="bg-indigo-600 text-white rounded-sm hover:bg-indigo-700 px-10 py-2"
        onClick={() => handleClick (tpObj.tpId,index)}
        >Preview</a>
      </div>
      </div>
    )

    return (
        <>
        <Header title={myPage} />
        <p className="text-xl m-3 text-center">
            Name: {myName} Student ID: {myStudID}
        </p>
      <div className ="w-1/2 grid mx-auto h-100 overflow-hide rounded-2xl border border-gray-300 flex justifi-center grid-cols-3 gap-2 mb-1 ">     
       <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => handleTeam(null)}>
  [A] All
</button>
 <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => handleTeam(true)}>
  [T] Team
</button>
 <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"  onClick={() => handleTeam(false)}>
  [S] Single
</button>
</div>
        <div className="w-1/2 grid mx-auto h-100 overflow-auto rounded-2xl border border-gray-300">
        {myTeamProj}
        </div>
        <div className="ps-5 pt-3 pb-1 bg-rose-400 rounded w-16 flex justifly-center mt-5">
         <a href="/">Back</a>   
        </div>
        <Footer title="Karn_Paramee"></Footer>
        </>
    
    )
}

function ItemTeam ({isTeam}){
    if(isTeam)
       return (<p>
            group
       </p>)
       return (<p>
            upgroup
       </p>);
}
