// import * as React from 'react';
// import { useHistory } from 'react-router-dom';
// import {useState, useEffect } from 'react';
// import type { IAuthor } from '../utils/interfaces';


// const Form: React.FC<FormProps> = (props) => {

// const history = useHistory();

// const [title, setTitle] = useState<string>('');
// const [content, setContent] = useState<string>('');
// const [authorid, setAuthorid] = useState<string>('');


// const [authors, setAuthors] = useState<IAuthor[]>([]);

// useEffect(() => {
//     const getAuthors = async () => {
//         const res = await fetch ('/api/authors');
//         const authors = await res.json();
//         setAuthors(authors);
//     }
//    getAuthors();

// }, []);

// const addBlog = async (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     const res = await fetch('/api/blogs', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({title, content, authorid})
//     });
//     const serverMessage = await res.json();
//     console.log(serverMessage);
//     console.log({title, content, authorid});
//     setTitle('');
//     setContent('');
//     // history.push(`/details/${serverMessage.id}`);
//     props.pizza();
// }


//     return (
    
//                 <div className = "col-md-7">
//                     <form className="form-group p-3 border-primary rounded-lg bg-lightgray">
//                         <label>Author</label>
//                         <input value={authorid} onChange={e => setAuthorid(e.target.value)} type="text" className="form-control my-1" />



//                         {/* <label>Choose Author</label>
//                         <select value={authorId} onChange={e => setAuthorId(e.target.value)} className="form-control my-1">
//                             <option value="0">Select Author...</option>
//                             {authors.map(author => (
//                                 <option key={`author-option-${author.id}`} value={author.id}>{author.name}</option>
//                             ))}
//                         </select> */}
                        
//                         <label>Blog</label>
//                         <textarea value={title} onChange={e => setTitle(e.target.value)} rows={5} className="form-control my-1" />
//                         <textarea value={content} onChange={e => setContent(e.target.value)} rows={5} className="form-control my-1" />
//                         <button onClick={addBlog}className="btn btn-primary btn-block w-50 mx-auto mt-3"> Add Blog</button>
                    

//                     </form>
//                 </div>
        
//     );
// };

// interface FormProps {
//     pizza: () => Promise<void>; 
// }

// export default Form;