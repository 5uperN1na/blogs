import * as React from 'react';
import moment from 'moment';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IBlog, ITag } from '../utils/interfaces';
import Navbar from '../component/Navbar';

const Details: React.FC<DetailsProps> = (props) => {
    const { blogid } = useParams();
    const history = useHistory();



    const [blog, setBlog] = useState<IBlog>(null);

    const [blogtags, setBlogTags] = useState<{ id: number, name: string }[]>(null);



    useEffect(() => {
        const getBlog = async () => {
            const res = await fetch(`/api/blogs/${blogid}`);
            const blog = await res.json();
            const res2 = await fetch(`/api/blogtags/${blogid}`);
            const blogtags = await res2.json();
            setBlog(blog);
            setBlogTags(blogtags);
        };
        getBlog();

    }, [blogid]);



    const deleteBlog = async (e: React.MouseEvent<HTMLButtonElement>) => {
        // e.preventDefault(); 
        const res = await fetch(`/api/blogs/${blogid}`, {
            method: 'DELETE',

        });
        const serverMsg = await res.json();
        console.log(serverMsg);
        history.push('/');

    }




    return (
        <main className="container">
            <Navbar />
            <section className="row justify-content-center mt-3">


                <div className="col-md-7">
                    <div className="card-header bg-info text-white my-2"> {blog?.title}</div>
                    <div>
                        {blogtags?.map(blogtag => (

                            <h6 key={`blogtag-key-${blogtag.id}`} ><span className="badge badge-pill badge-primary text-black">{blogtag.name}</span></h6>

                        ))}
                    </div>
                    <div className="card-body bg-success">
                        <h6 className="card-title">{blog?.content}</h6>
                    </div>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                        <p><i>{moment(blog?.created_at).format("MMM Do YY")}</i></p>
                        <button onClick={() => history.push('/')} className="btn btn-info btn-sm">Go Back</button>

                        <button onClick={() => deleteBlog(blogid)} className="btn btn-danger btn-sm">Delete</button>

                        <Link to={`/edit/${blogid}`} className="btn btn-warning btn-sm">Edit</Link>
                    </div>
                </div>


            </section>

        </main>
    );
}

interface DetailsProps { }

export default Details;






