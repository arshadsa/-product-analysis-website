import React from 'react';
import './Blogs.css';

const Blogs = () => {
  return (
    <div className='blogs'>
      <h3>What is context api?</h3>
      <p><strong>Ans: </strong>It provides a way to pass data through a component tree without having to pass props through every component.It allows great performance improvement because the data is not copied to every component. It also allows the codes to be less likely to have errors as there can be mistakes in the code while the data is passed down each component.</p>
      <h3>What is semantic tag.</h3>
      <p><strong>Ans: </strong>Semantic tags are provides information about it's contents in addition to just being an HTML tag. For example, the semantic tag named 'code' means that it's contents are programming code. It helps search engines like Google better understand the webpage and rank it properly. Moreover, these are also helpful for the developers to organize their codes and collaborate with others. Because anyone other than the original developer will also be able to quickly comprehend what's the content of the code.</p>

      <h3>What are the differences between block and Inline block elements.</h3>
      <p><strong>Ans: </strong>Block level elements always starts with a new line, takes the entire width available from their parents. Browsers automatically adds some margin before and after the block elements. On the other hand, inline block elements does not start with a new line. Those can stay togather in a single line. But their height and width can be changed.</p>
    </div>
  );
};

export default Blogs;