import { Query } from '../index';



const all = () => Query('SELECT * from tags;');

const insert = (newTag: any) => Query('INSERT INTO tags SET ?', newTag);

export default{
    all,
    insert
   
}