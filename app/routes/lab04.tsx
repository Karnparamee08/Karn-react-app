import Header from "./conponents/Header";
import Footer from "./conponents/Footer"
    

export default function myTermProject () {

    const myPage = "Karn_Paramee Term Project";
    const myName = "Paramee Thepmongkol";
    const myStudID = "026730491007-3";
    const myTetmProj = [ // {} - Objects
      {
        tpId: 1,
        tpSubj: "wed Technology",
        tpDesc: "พัฒนาเว็บไซต์ xxx",
        tpCover: "/images/Tp01.png",
        tpUrl: "http://busitlab.rmutto.ac.th/~026730491007-3/",
        tpTeam: true 
      },  
      {
        tpId: 2,
        tpSubj: "Computer Programming 1",
        tpDesc: "",
        tpCover: "/images/Tp01.png",
        tpUrl: "http://busitlab.rmutto.ac.th/~026730491007-3/",
        tpTeam: false
      },  
      {
        tpId: 3,
        tpSubj: "Computer Programming 2",
        tpDesc: "",
        tpCover: "/images/Tp01.png",
        tpUrl: "http://busitlab.rmutto.ac.th/~026730491007-3/",
        tpTeam: true
      },  
    ]

    const tpSingle = myTetmProj.filter(tpTmp =>
        tpTmp.tpTeam === true
    )
    const myTeamProj = myTetmProj.map((tpObj, index) =>
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
        <a href={tpObj.tpUrl} className="bg-indigo-600 text-white rounded-sm hover:bg-indigo-700 px-10 py-2">Preview</a>
      </div>
      </div>
    )

    return (
        <>
        <Header title={myPage} />
        <p className="text-xl m-3 text-center">
            Name: {myName} Student ID: {myStudID}
        </p>
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
