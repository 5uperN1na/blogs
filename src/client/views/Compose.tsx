import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import type { IAuthor } from '../utils/interfaces';
import type { IBlogtag } from '../utils/interfaces';
import type { IBlog } from '../utils/interfaces';
import Navbar from '../component/Navbar';
import blogtags from '../../server/db/queries/blogtags';


const Compose: React.FC<ComposeProps> = (props) => {

    const history = useHistory();

    //setting state for blogs title, blogs content, and blogs authorid
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [authorid, setAuthorid] = useState<string>('');

    //setting state for image
    const [image_url, setImage_url] = useState<string>('');

    //setting state for blogtag dropdown
    const [selectedBlogTagId, setSelectedBlogTagId] = useState<string>('0');

    //setting state for author dropdown
    const [selectedAuthId, setSelectedAuthId] = useState<string>('0');


    //setting state in order to get authors to map through and display in dropdown
    const [authors, setAuthors] = useState<IAuthor[]>([]);

    const [tags, setTags] = useState<{ id: number, name: string }[]>([]);



    useEffect(() => {
        const getAuthors = async () => {
            const res = await fetch('/api/authors');
            const authors = await res.json();
            const res2 = await fetch('/api/tags');
            const tags = await res2.json();
            setAuthors(authors);
            setTags(tags);
        }
        getAuthors();

    }, []);

    const addBlog = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const res = await fetch('/api/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content, image_url, authorid: selectedAuthId })
        });
        const blogPost = await res.json();
        console.log({ blogid: blogPost.id, tagid: selectedBlogTagId });
        // console.log({ title, content, authorid, image_url });

        if (selectedBlogTagId !== '0') {
            const res3 = await fetch('/api/blogtags', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ blogid: blogPost.id, tagid: selectedBlogTagId })
            })
            const blogtagPost = await res3.json();
            console.log(blogtagPost);
        }

        setTitle('');
        setContent('');
        setSelectedBlogTagId('0');
        // history.push(`/details/${serverMessage.id}`);
        // props.pizza();
        history.push('/');
    };


    return (


        <div className="col-md-7">

            <Navbar />

            <form className="form-group p-3 border-primary rounded-lg">
                {/* <label>Author</label>
                        <input value={authorid} onChange={e => setAuthorid(e.target.value)} type="text" className="form-control my-1" />
 */}


                <label>Author</label>
                <select value={selectedAuthId} onChange={e => setSelectedAuthId(e.target.value)} className="form-control my-1">
                    <option value="0">Select Author...</option>
                    {authors.map(author => (
                        <option key={`author-option-${author.id}`} value={author.id}>{author.name}</option>
                    ))}
                </select>



                <label>Tag</label>
                <select value={selectedBlogTagId} onChange={e => setSelectedBlogTagId(e.target.value)} className="form-control my-1">
                    <option value="0">Select Tag...</option>
                    {tags.map(tag => (
                        <option key={`tag-option-${tag.id}`} value={tag.id}>{tag.name}</option>
                    ))}
                </select>





                <label>Image</label>
                <input value={image_url} onChange={e => setImage_url(e.target.value)} type="text" className="form-control my-1" />





                <label>Blog Title </label>
                <div><small className='text-muted'>blog tag is optional.</small></div>

                <textarea value={title} onChange={e => setTitle(e.target.value)} rows={5} className="form-control my-1" />

                <label>Blog Article </label>
                <textarea value={content} onChange={e => setContent(e.target.value)} rows={5} className="form-control my-1" />
                <button onClick={addBlog} className="btn btn-primary btn-block w-50 mx-auto mt-3"> Add Blog</button>












            </form>
        </div>

    );
};

interface ComposeProps {

    //Used when putting form on home page.
    // pizza: () => Promise<void>; 
}

export default Compose;