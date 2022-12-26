import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div style={{marginTop:'50px'}}>
             <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What's the purpose of react router?</Accordion.Header>
        <Accordion.Body>
        React Router isn't just about matching a url to a function or component:
         it's about building a full user interface that maps to the URL, 
         so it might have more concepts in it than you're used to.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How does context API work?</Accordion.Header>
        <Accordion.Body>
        React createContext is all you need. It returns a consumer and a provider. 
        Provider is a component that as it's names suggests provides the state to its children.
         It will hold the "store" and be the parent of all the components that might need that store.
          Consumer as it so happens is a component that consumes and uses the state.
           More information can be found on React's documentation page
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How to use REF  hook in react?</Accordion.Header>
        <Accordion.Body>
        To create a ref in a functional component we use the useRef hook which returns a mutable object with a .
         current property set to the initialValue we passed to the hook. 
         This returned object will persist for the full lifetime of the component.
          Thus, throughout all of its re-rendering and until it unmounts.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default Blog;