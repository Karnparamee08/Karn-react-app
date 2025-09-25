import express from 'express';
import cors from 'cors';

const app = express()
const port = 3000

app.use(express.json());
app.use(cors());


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