import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { IBlog } from '../utils/interfaces';
import moment from 'moment';
//import type { IUser } from '../utils/interfaces';
import type { IAuthor } from '../utils/interfaces';
import type { IBlogtag } from '../utils/interfaces';
import Navbar from '../component/Navbar';
import blogtags from '../../server/db/queries/blogtags';


const Edit: React.FC<EditProps> = (props) => {

    const { blogid } = useParams();

    const history = useHistory();

    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');


    //setting state in order to get authors to map through and display in dropdown
    const [authors, setAuthors] = useState<IAuthor[]>([]);

    const [tags, setTags] = useState<{ id: number, name: string }[]>([]);



    const editBlog = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const res = await fetch(`/api/blogs/${blogid}`, {

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            // body: JSON.stringify({ name: name, text: chirp })
            body: JSON.stringify({ title, content })


        });
        const serverMsg = await res.json();
        console.log(serverMsg);
        history.push('/');

    }

    return (
        <main className="container">


            <Navbar />
            <section className="row justify-content-center mt-3">

                <div className="col-6">
                    <form className="form-group p-3 border-primary rounded-lg bg-lightgray">

                        <div className="shadow p-4 mb-4 bg-white">
                            <h3 className="text-center"> Edit Blog</h3>

                            <label>Blog Title</label>
                            <textarea value={title} onChange={e => setTitle(e.target.value)} rows={3} className="form-control my-1" />
                            <label>Blog Content</label>
                            <textarea value={content} onChange={e => setContent(e.target.value)} rows={3} className="form-control my-1" />

                            <button onClick={editBlog} className="btn btn-primary btn-block w-30 mx-auto mt-3"> Save</button>


                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <Link to={`/details/${blogid}`} className="btn btn-info btn-sm">Go Back</Link>


                            {/* <button onClick={() => editChirp(chirpid)} className="button muted-button">Edit</button> */}
                            {/* <Link to={`/admin/${chirpid}`} className="btn btn-outline-success btn-block mt-2 mx-auto w-25">Update</Link> */}
                        </div>
                    </form>


                </div >


            </section>

        </main >
    );
}

interface EditProps { }

export default Edit;