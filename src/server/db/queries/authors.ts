import { Query } from '../index';

const all = () => Query('SELECT id, authors.name FROM authors');
const insert = (newAuthor: any) => Query('INSERT INTO authors SET ?', newAuthor);
const one =  (id: number) => Query('SELECT * FROM authors WHERE id = ?', [id]);
const find = (column: string, value: number | string) => Query('SELECT * FROM authors WHERE ?? = ?', [column, value]);
 
 
export default{
   all,
   insert,
   one, 
   find
}