import express from 'express';

const app = express()
const port = 3000

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

app.listen(port, () => {
console.log(`Example app listening on port${port}`)
})