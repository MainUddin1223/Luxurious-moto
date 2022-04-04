import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='blogs-container'>
            <h1>QUESTION and ANSWER:</h1>
            <div className='question'>
                <p>Question: What is context api????</p>
                <p>Answer:Context is a react hook.Context api provides a way to pass
                data from one component to another.In react data flows unidirectional way.
                It means to pass a data we need to go parent to child component.
                In this case,Context api makes it easier.
                     Via context api we can pass data easily without this props drilling.</p>
            </div>
            <div className='question'>
                <p>Question:What are semantic elements??</p>
                <p>Answer: Semantic element meas element with specific meaning.
                Such as header tag contain header of a website and so nav,footer,aside,etc are.
                These elements are used in specific section in a website.
                Such as header is used in header section ,footer is in footer section.
                It is not recommended to use it randomly.</p>
            </div>
            <div className='question'>
                <p>Question:Inline elements Vs Inline-block elements.</p>
                <p>Answer:An Inline element doesn't start on a new line.
                It takes as much width as necessary.
                Inline element doesn't allow top and bottom margin and padding.
                On the other hand,inline- block element much similar to inline element.
                The difference is it allows margin and padding but inline elements don't.
                    </p>
            </div>
        </div>
    );
};

export default Blogs;