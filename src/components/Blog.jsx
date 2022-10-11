import React from 'react';

const Blog = () => {
    return (
        <div className=' text-2xl mt-16 bg-purple-200 p-5 '>
            <h3> <strong>Question-01:</strong> What is the purpose of react router?</h3>
            <p><strong>Answer:</strong>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p><br />
            <h3> <strong>Question-02:</strong>How does context API work</h3>
            <p><strong>Answer:</strong>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state</p><br />
            <h3> <strong>Question-03:</strong>What is useRef</h3>
            <p><strong>Answer:</strong>
                The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element.
            </p><br />
            <p className='mb-60'>useRef is like a “box” that can hold a mutable value in its .current property.</p>
        </div>
    );
};

export default Blog;