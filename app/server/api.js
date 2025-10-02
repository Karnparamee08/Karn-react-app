import express from 'express';
import cors from 'cors';

import admin from 'firebase-admin';
import serviceAccount from './firebase/webprog-1007-3-firebase.json' with { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const app = express()
const port = 3000

app.use(express.json());
app.use(cors());

async function  fetchDataDB() {
    const result = [];
    const booksRef = db.collection('Books');
    const booksSnap = await booksRef.get();
    booksSnap.forEach(doc => {
        result.push({
            id: doc.id,
            ...doc.data()
        });
    });
    return result ;//return JSON.stringify(result);
}

app.get('/api/getBooksFromDB', (rep, res) => {
    res.set('Content-type','application/json');
    fetchDataDB().then((jsonData) => {
        res.json(jsonData);
    }).catch((error) => {
        res.json(error);
    });
});


let books = [ 
    { id: 1, title: "Web Technology", author: "Karn_Paramee 1"},
    { id: 2, title: "Web Programing", author: "Karn_Paramee 2"},
];

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/books',(req,res) => {
    const { title, author } = req.body;
    const newBook = { id: String(books.length + 1),title, author };
    books.push(newBook);
    res.status(201).json(newBook);
})

app.get('/api/getbooks', (rep,res) => {
    res.json(books);
})


app.get('/api/getbooks/:book_id', (rep,res) => {
    let bid = Number (req.params.book_id);
    const result = books.filter(
        bobj => {
            return bobj.id === bid
        }
    );
    res.json(result[0]);
})

app.post('/api/update', (rea,res) => {
    const { id, title, author } = req.body;
    console.log('Data',id,title,author);
    const updBooks = books.map(
        bobj => {
            if(bobj.id === Number(id)){
                return {...bobj, title: in_title, author: in_author };
            }
            return bobj;
        }
    );
    console.log('Updated', updBooks);
    res.json({message: 'Updated...'});
})



app.listen(port, () => {
console.log(`Example app listening on port${port}`)
})

// http://localhost:3000/api/insert --> Add a new book
// async function addBook(..................) {
//   const newBookRef = db.collection('..................').doc();
//   const docRef = db.collection('..................').doc(newBookRef.id);
//   await docRef.set(..................);
//   console.log('Book added!');
// }
 
// app.post('/api/insert', (req, res) => {
//   try {
//     const { .................., .................. } = req.body;
//     console.log(.................., ..................);
//     const newBook = { id: String(books.length + 1), .................., .................. };
//     // books.push(newBook);
//     addBook(..................);
//     res.status(201).json({ success: true, message: 'Form submitted successfully.' });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// })