import * as express from 'express';

import DB from './db';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/books', async(req, res) => {
    try {
        let books = await DB.Books.all();
        res.json(books);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/api/books/add/:title/:author/:type', async(req, res) => {
    try {
        let book = {title: req.params.title, author: req.params.author, type: req.params.type}
        await DB.Books.insert(book)
        res.send('Book created');
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/api/books/delete/:id', async(req, res) => {
    try {
        await DB.Books.Delete(req.params.id);
        res.send('Book deleted');
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;