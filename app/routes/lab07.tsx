import Header from "./conponents/Header";
import Footer from "./conponents/Footer"
import { useEffect, useState } from "react";    

export default function myTermProject () {

    const [book, setBook] = useState({
        bookTitle: "Web Programming",
        bookDesc: "พัฒนาด้วย React & Tailwind CSS",
        bookPrice: 199,
        bookAuthor: "Karn_Parameee",
        bookCover: "/images/Book.jpg"
    });
    
    const[nextId,setNextId] = useState(1); 
    const[books,setBooks] = useState([]);
    const[bookId, setBookId] = useState(0);
    const[count, setcount] = useState(0);

    useEffect(() => {
      setcount(book.length);
    },[count]);

    const myPage = "Karn_Paramee Term Project";
    const myName = "Paramee Thepmongkol";
    const myStudID = "026730491007-3";

    const addBook = (e) => {
        setBooks([
            ...books,
            {
             id: nextId,
             bookTitle: book.bookTitle,
             bookDesc: book.bookDesc,
             bookPrice: book.bookPrice,
             bookAuthor: book.bookAuthor,
             bookCover: book.bookCover,
            }
        ]);
        setNextId(nextId+1);
    }

    const deleteBook = (bookId) => {
        setBooks(
        books.filter((bTmp,index) =>
            bTmp.id !== bookId
    )
    );
    }


    const editBook = (bookId) => {
      const bookTmp = books.filter(bTmp =>
        bTmp.id === bookId
      )
      setBook(bookTmp[0]); 
      setBookId(bookId);
    }


    const bookItems = books.map((bObj, index) =>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
           <a href="#">
             <img className="rounded-t-lg" src={bObj.bookCover} title={bObj.bookTitle} />
           </a>
           <div className="p-5">
             <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{bObj.bookTitle} {bObj.bookPrice}</h5>
             </a>
             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{bObj.bookDesc}</p>
             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">ผู้เเต่ง{bObj.bookAuthor}</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
              onClick={(e)=>editBook(bObj.id)}>
              [E] Edit
              </a>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={(e)=>deleteBook(bObj.id)}>
              [D] Delete
              </a>
            </div>
          </div>
    );

    const handleTitleChange = (e) => {
        setBook({
            ...book,
            bookTitle: e.target.value
        });

    }
    const handleDescChange = (e) => {
        setBook({
            ...book,
            bookDesc: e.target.value
        });

    }
    const handlePriceChange = (e) => {
        setBook({
            ...book,
            bookPrice: e.target.value
        });

    }
    const handleAuthorChange = (e) => {
        setBook({
            ...book,
            bookAuthor: e.target.value
        });

    }
    const handleCoverChange = (e) => {
        setBook({
            ...book,
            bookCover: e.target.value
        });

    }

    const resetForm = (e) => {
        setBook({
        bookTitle:"", bookDesc:"",bookCover: "", bookPrice: 0.0, bookAuthor: ""
        });
    }

     const UpdateBook = () => {
      alert("Update:" + bookId);
      const bookTmp = books.map(bTmp =>
        bTmp.id === bookId ?
        {
               ...bTmp,
                id: nextId,
                bookTitle: book.bookTitle,
                bookDesc: book.bookDesc,
                bookPrice: book.bookPrice,
                bookAuthor: book.bookAuthor,
                bookCover: book.bookCover,
               
        }
        :
        bTmp
      );
      setBooks(bookTmp);
      resetForm();
      setBookId(0);
    }
    function BookDashboard(){
    return (
      <div className="lg:w-1/4 md:w-1/2 sm:w-full grid grid-cols-1 m-4">
        <div className="md:col-span-1 bg-white rounded-lg shadow-md p-4 grid grid-cols-2 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-16">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
          <div>
            <span className="sr-only">Info</span>
            <div className="text-center">
              <span className="text-7xl">{count}</span>
            </div>
            <div className="text-center">
              Number of books
            </div>
          </div>
        </div>
      </div>
    );
  }

    return (
        <>
        <Header title={myPage} />
        <p className="text-xl m-3 text-center">
            Name: {myName}-<br />
             Student ID: {myStudID}-<br />
             --
        </p>
      <BookDashboard/>
        <div className="w-1/2 grid mx-auto h-100 overflow-auto rounded-2xl border border-gray-300">
        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อหนังสือ(BookTitle)</label>
            <input
              value={book.bookTitle}
              onChange={ handleTitleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">(BookDesc)</label>
            <input
              value={book.bookDesc}
              onChange={ handleDescChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
           <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">(BookPrice)</label>
            <input
              value={book.bookPrice}
              onChange={ handlePriceChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
           <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">(BookAuthor)</label>
            <input
              value={book.bookAuthor}
              onChange={ handleAuthorChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">(BookCover)</label>
            <input
              value={book.bookCover}
              onChange={ handleCoverChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            { bookId !== 0 ?
              <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={UpdateBook}>Update</button>
              :
              <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={addBook}>Add</button>
            }
            <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={resetForm}>Clear</button>
        
          </div>
          
           ....
        </form>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
           <a href="#">
             <img className="rounded-t-lg" src={book.bookCover} title={book.bookTitle} />
           </a>
           <div className="p-5">
             <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.bookTitle} ({book.bookPrice} THB)</h5>
             </a>
             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.bookDesc}</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              </a>
            </div>
          </div>
           <div className="w-full mx-auto grid overflow-hide">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 flex">
          {bookItems}
        </div>
      </div>   
      <div className="ps-5 pt-3 pb-1 bg-rose-400 rounded w-16 flex justifly-center mt-5">
         <a href="/">Back</a>   
            </div>
            <Footer title="Karn_Paramee"></Footer>
            </>
        
        )
    }
 