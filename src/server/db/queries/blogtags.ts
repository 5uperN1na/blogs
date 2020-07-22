import { Query } from '../index';


//join all blogtags by blogid
const oneBlogId = (id: number) => Query('SELECT tags.id, tags.name from blogtags JOIN tags on tagid = tags.id WHERE blogid = ?', [id])


export default{
    oneBlogId
   
}