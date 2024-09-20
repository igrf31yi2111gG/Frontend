const express = require('express');
const app = express();
const port = 3000;

let books = [
  {
    "title": "Книга 1",
    "author": "Автор 1",
    "year": 2021
  },
  {
    "title": "Книга 2",
    "author": "Автор 2",
    "year": 2022
  },
  {
    "title": "Книга 3",
    "author": "Автор 3",
    "year": 2023
  }
];

app.get('/', (req, res) => {
  res.send('King');
});

app.get('/books', (req, res) => {
  res.json(books);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
