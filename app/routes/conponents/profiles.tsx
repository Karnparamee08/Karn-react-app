export default function Profile(){
  return (
    <>
    <h1 className="text-2xl text-sky-500 text-center">profile</h1>
    <div className="p-10 bg-red-50 rounded">
        <img src="/images/myprofile.png.jpg" className="rounded-full w-32 shadow-lg border-4 border-neutral mx-auto"/>
        <h2 className="text-xl text-center text-red-900 font-bold m-5">About me</h2>
        <p className="text-center w-1/2 mx-auto">
            ปารมี เทพมงคล ชื่อเล่น กานต์
            สาขาเทคโนโลยีสารสนเทศ        
        </p>
    </div>
    
    </>
    
  );  
}

