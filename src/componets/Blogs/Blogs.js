import React, { useEffect, useState } from "react";
import "../../styles/Blog.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);
  // console.log(blogs);
  return (
    <div>
      <h1 className="text-success mt-4">Blogs Shop.....</h1>
      {blogs.map(blog => (
        <div>
          <div className="d-flex  justify-center w-75 mx-auto my-5 blog_flex">
            <img className="w-25" src={blog.img} alt="" />
            <div className="ps-5">
              <h3 className="pt-4">{blog.name}</h3>
              <h4 className="">{blog.name1}</h4>
              <p>{blog.name2}</p>
              <p>
              
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
