import * as React from 'react';
import * as moment from 'moment';
import { Link } from 'react-router-dom';
import type { IBlog } from '../utils/interfaces';

const BlogCard: React.FC<BlogCardProps> = ({blog}) => {
    return (
      
      <div className = "col-md-7">
          <div className = "card-header bg-info text-white my-2"> {blog.title}</div>
          <div className="card-body bg-success">
              <h6 className = "card-title">{blog.content}</h6>
          </div>
          <div className="card-footer bg-success d-flex justify-content-between align-items-center">
              <p><i>{moment(blog.created_at).format("MMM Do YY")}</i></p>
              <Link to={`/details/${blog.id}`} className="btn btn-danger btn-sm">Details</Link>
          </div>
      </div>
    );
}

interface BlogCardProps {
    blog: IBlog
}

export default BlogCard;