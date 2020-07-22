import { Query } from '../index';

//get all blogs
// const all = () => Query('SELECT * FROM blogs');

//join blogs table with authors table  and get all columns from both
const all = () => Query('SELECT blogs.*, authors.name, authors.email FROM blogs JOIN authors on authors.id=blogs.authorid;');

//join blogs table with authors table  and get all columns from both based on blog id
const one = (id: number) => Query('SELECT blogs.*, authors.name, authors.email FROM blogs JOIN authors on authors.id = blogs.authorid WHERE blogs.id = ?', [id]);

//delete blog based off of an id passed
const deleteBlog = (id: number) => Query('DELETE FROM blogs WHERE id = ?', [id]);

const insert = (title: string, content: string, authorid: number) => Query('INSERT INTO blogs (title, content, authorid) VALUE (?, ?, ?)', [title, content, authorid]);

const edit = (id: number, title: string, content: string) => Query('UPDATE blogs SET title = ?, content = ? WHERE id = ?', [title, content, id]);



export default{
    all,
    one,
    deleteBlog,
    insert,
    edit
}