import * as mysql from 'mysql';
import blogs from './queries/blogs';
import blogtags from './queries/blogtags';
import tags from './queries/tags';
import authors from './queries/authors';
import { rejects } from 'assert';
import { resolve } from 'path';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'blog_user',
    password: 'blog_user',
    database: 'blogs'
});


//simple join and console query results to node screen
// pool.query('SELECT * FROM chirps JOIN users ON users.id = chirps.userid', (err, results) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(results);

//     }
// });


//simple insert using escape

// const userid = 2;
// const chirp = "Hey, I can do that!";

// pool.query('INSERT into chirps (userid, chirp) value (?,?)', [userid, chirp], (err, results) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(results);

//     }
// });

//update using escapes

// const id = 15;
// const chirp = "Hey, I can do that!!!!!!";

// pool.query('UPDATE chirps SET chirp = ? WHERE id = ?', [chirp, id], (err, results) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(results);

//     }
// });


//delete using escapes

// const id = 15;


// pool.query('DELETE FROM chirps WHERE id = ?', [id], (err, results) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(results);

//     }
// });


//Query function to get all chirps

// export const Query = <T = any> (query: string, values?: any) => {
//     return new Promise<T>((resolve, reject) => {
//         pool.query(query, values, (err, results) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(results);
//             }
//         });
//     })
// }


// Query('SELECT * FROM chirps')
// .then(c => console.log(c))
// .catch(e => console.log(e))


// Query function to get 1 chirp

// export const Query = <T = any> (query: string, values?: any) => {
//     return new Promise<T>((resolve, reject) => {
//         pool.query(query, values, (err, results) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(results);
//             }
//         });
//     })
// }



//Helper function to use queries


export const Query = <T = any>(query: string, values?: any) => {
    return new Promise<T>((resolve, reject) => {
        const sql = mysql.format(query, values);

        pool.query(query, values, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

//testing
// chirps.all()
// .then(c => console.log(c))


export default {
    blogs,
    blogtags,
    authors,
    tags

}