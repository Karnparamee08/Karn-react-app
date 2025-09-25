import { Link } from "@remix-run/react"
import { myTermProj } from "./conponents/data/termProject";

export default function projist () {
    return( 
        <>
        <h1>ข้อมูลโปรเจครายวิชา</h1>
        <p>
            {
                myTermProj.map((tpObj, index) =>
                <li key={index}>
                    โปรเจค {tpObj.tpSubj}
                    <Link to={`/termproj/proj/tpObj/${tpObj.tpId}`}>--View</Link>
                </li>
                )
            }
            {/* ***ให้ดึงข้อมูลโครงงานรายวิชามาแสดงผล*** */}
        </p>
        </>
    
    );
}