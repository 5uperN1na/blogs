import { Query } from '../index';

const all = () => Query('SELECT id, authors.name FROM authors');
const insert = (newAuthor: any) => Query('INSERT INTO authors SET ?', newAuthor);
 
 
export default{
   all,
   insert
}