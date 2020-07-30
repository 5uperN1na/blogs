import { Query } from '../index';

const insert = (blogid: number, tagid: number) => Query('INSERT INTO blogtags (blogid, tagid) VALUE (?, ?)', [blogid, tagid]);

//join all blogtags 
const allBlogTags = () => Query('SELECT tags.id, tags.name from blogtags JOIN tags on tagid = tags.id;');

//join all blogtags by blogid
// const oneBlogTag = (id: number) => Query('SELECT tags.id, tags.name from blogtags JOIN tags on tagid = tags.id WHERE blogid = ?', [id]);

//stored procedure to blogtags by blogid

const oneBlogTag = (id: number) => Query('CALL get_blogtag(?)', [id]);


//delete blogtag based off of an tagid passed
const deleteBlogTag = (blogid: number) => Query('DELETE FROM blogtags WHERE blogid = ?', [blogid]);


export default{
    oneBlogTag,
    allBlogTags,
    insert,
    deleteBlogTag
   
}