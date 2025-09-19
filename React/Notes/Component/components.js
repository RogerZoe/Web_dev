import React from 'react'; // Importing the React library
import Profile from './Profile_Photo.JPG'; // Importing a profile image

// Exporting an object with a Name property
export let person = {
    Name: "Arif"
};

// Exporting a functional component called Hello
export function Hello() {
    // Creating a JSX element with an id of "edit"
    const ele = <h1 id="edit">Hello----------------</h1>;
    return (
        <>
            {ele}
            {/* Rendering the imported profile image */}
            <img 
                src={Profile}
                alt="My profile"
            />
        </>
    );
}

// Default export of a functional component called Goo
export default function Goo() {
    // Creating a JSX element with inline styling
    const ele = <h1 style={{
        background: 'Green'
    }}>Goo----------------</h1>;

    const el2 = <h1>Goo........................</h1>; // Unused JSX element

    return (
        <>
            {ele}
        </>
    );
}

// Defining a class component called Sully that extends React.Component
class Sully extends React.Component {
    render() {
        return (
            <>
                {/* Rendering a heading */}
                <h2>Heeloooooooooooooo</h2>
                {/* Rendering the Hello component */}
                <Hello />
            </>
        );
    }
}
