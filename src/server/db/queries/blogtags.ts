import { Query } from '../index';

const insert = (blogid: number, tagid: number) => Query('INSERT INTO blogtags (blogid, tagid) VALUE (?, ?)', [blogid, tagid]);

//join all blogtags 
const allBlogTags = () => Query('SELECT tags.id, tags.name from blogtags JOIN tags on tagid = tags.id;');

//join all blogtags by blogid
const oneBlogTag = (id: number) => Query('SELECT tags.id, tags.name from blogtags JOIN tags on tagid = tags.id WHERE blogid = ?', [id]);


export default{
    oneBlogTag,
    allBlogTags,
    insert
   
}