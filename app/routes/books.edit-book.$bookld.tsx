import { useEffect, useState } from "react";
import { Link, useParams } from "@remix-run/react";

export default function AddBook() {
    const [inputId, setInputId] = useState("");
    const [inputTitle, setInputTitle] = useState("");
    const [inputAuthor, setInputAuthor] = useState("");
   

    const {bookid} = useParams();

    useEffect(() => {
        const fetchData = async() => {
            
            try {
                const resBook = await fetch(`http://localhost:3000/api/getbooks/${bookid}`);
                if(resBook.ok){
                    const resulf = await resBook.json();
                    setInputId(resulf.id);
                    setInputTitle(resulf.title);
                    setInputAuthor(resulf.author); 
                }else{
                    alert('APIs is wrong.');
                }
            } catch (error) {
                alert ('Error fetchig data:' +error);
            }
        }
        fetchData();
    },[]);

    const handleSubmit = async (e: any) => {
        alert(`Title: ${inputTitle}, Author: ${inputAuthor}`);
        e.preventDefault();
        try {
            const resAddBook = await fetch(`http://localhost:3000/api/update`,
                {
                    method: 'POST', 
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({id: inputId, title: inputTitle, author: inputAuthor})
                }
            );
            const resulf = await resAddBook.json();
            alert('Add a new book ID: ' + resulf.message);
        } catch (error) {
            alert('Error submitting data: ' + error);
        }
    };

    
    return (
        <>
        <form onSubmit={handleSubmit} className="p-5">
            <label>แก้ไขข้อมูลหนังสือ</label><br />
            <input type="hidden" value={inputId} />
            <label>ชื่อหนังสือ:</label>
            <input type="text"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            className="border"
            />
            <label>ชื่อผู้แต่ง:</label>
            <input type="text"
            value={inputAuthor}
            onChange={(e) => setInputTitle(e.target.value)}
            className="border"
            />
            <button type="submit"className="border bg-green p-2">Submit Book</button>
        </form></>
    );
    
}