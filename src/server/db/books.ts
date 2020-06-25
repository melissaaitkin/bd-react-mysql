import { Connection } from './index';

export const all = async () => {
    return new Promise((resolve, reject) => {
        Connection.query('SELECT * FROM book', (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export const insert = async (book: any) => {
    return new Promise((resolve, reject) => {
        Connection.query('INSERT INTO book SET ?', book, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
}

export const Delete = async (id: any) => {
    return new Promise((resolve, reject) => {
        Connection.query('DELETE FROM book WHERE ID = ?', id, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
}

export default {
    all,
    insert,
    Delete
}