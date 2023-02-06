import React from 'react';

import Article from '../../components/article/Article';
import {blog1, blog2} from "./import";
import "./Blog.css";

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>

      <div className="gpt3__blog-header">
        <h2 className='gradient__text'>A lot is happening, 
          We are blogging about it.</h2>
      </div>

    <div className="gpt3__blog-container">

      <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog1} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>

      <div className="gpt3__blog-container_groupB">
          <Article  imgUrl={blog2} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article  imgUrl={blog2}  date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article  imgUrl={blog2}  date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article  imgUrl={blog2}  date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>

    </div>
  )
}

export default Blog