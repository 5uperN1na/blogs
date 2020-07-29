import * as React from 'react';
import * as moment from 'moment';
import { Link } from 'react-router-dom';
import type { IBlog } from '../utils/interfaces';

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {


    

    return (

        //   <div className = "col-md-5">
        //      <div className = "card-header bg-info text-white d-flex my-4"> {blog.title}</div>
        //     <div className="card" style={{ width: ' 18rem' }}>
        //    <img className="card-img-top" src="https://fitathletic.com/wp-content/uploads/2019/12/Are-fitness-classes-better-than-gym.jpg" alt="Card image cap" />


        //       <div className="card-body bg-success">
        //           <h6 className = "card-title">{blog.content}</h6>
        //       </div>
        //       <div className="card-footer bg-success d-flex justify-content-between align-items-center">
        //           <p><i>{moment(blog.created_at).format("MMM Do YY")}</i></p>
        //           <Link to={`/details/${blog.id}`} className="btn btn-danger btn-sm">Details</Link>
        //       </div>
        //   </div>
        //   </div>


        <div className="col-md-5 mb-sm-5">
            
            <div className="card" style={{ width: ' 18rem' }}>
                {/* <img className="card-img-top" src="https://fitathletic.com/wp-content/uploads/2019/12/Are-fitness-classes-better-than-gym.jpg" alt="Card image cap" /> */}
                <img className="card-img-top embed-responsive-item" src={blog.image_url} />
                
                <div className="card-header bg-info text-white">{blog.title}</div>
                <div className="card-body">
                    <p className="card-text ">{blog.content}</p>
                </div>
                <div className="card-footer bg-primary d-flex justify-content-between align-items-center">
                    <p><i>{moment(blog.created_at).format("MMM Do YY")}</i></p>
                    <Link to={`/details/${blog.id}`} className="btn btn-success btn-sm">Continue</Link>
                    
                </div>
            </div>
            
            </div>














    );





}

interface BlogCardProps {
                blog: IBlog
}

export default BlogCard;