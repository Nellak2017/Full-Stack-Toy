import Link from "next/link";
import { useState } from "react";

// Summary of what this Component does:
// 1. map from server side data all the input fields and their default values
// 2. onSubmit for each input form, POST the data to your Go API, which then updates the Database

// TODO: Update only 1 part of the database, rather than the entire library when you make your POST request. For some reason it is difficult to know what form is being submitted, so this makes it hard to update one part of the database.
// TODO: Add a standard way to get the Date from the Input and send to the Database in standard ISO format
// TODO: Add your API backend to the project

const edit = ({ books }) => {

    const [library, setLibrary] = useState(books); // should be: [1:{title:...,author:...,...},2:{...},...]
    const [bookChanged, setBookChanged] = useState(-1); // Hacky way of knowing what book was updated. With this, we can update the book in the database without having to update the entire db.

    const handleSubmit = (e) => {
        e.preventDefault();
        if (bookChanged != -1) {
            const updatedBook = library;
            console.log(updatedBook);
            // Now make a POST request to the API endpoint to update the library
        }
        // if bookChanged == -1, then the book was not updated and so the API won't be called
    }

    return (
        <>
            <button>
                <Link href="/view">
                    View
                </Link>
            </button>
            <ol>
                {
                    library.map((value, index) => (
                        <li key={value.id}>
                            <form key={value.id} onSubmit={handleSubmit}>
                                <input type="text" value={value.title} onChange={(e) => {
                                    setBookChanged(index);
                                    setLibrary(prevState => (
                                        Object.values({
                                            ...prevState,
                                            [index]: {
                                                ...prevState[index],
                                                title: e.target.value
                                            }
                                        })))
                                }} required />
                                <span> - </span>
                                <input type="text" value={value.date} onChange={(e) => {
                                    setBookChanged(index);
                                    setLibrary(prevState => (
                                        Object.values({
                                            ...prevState,
                                            [index]: {
                                                ...prevState[index],
                                                date: e.target.value
                                            }
                                        })))
                                }} required />
                                <input type="text" value={value.author} onChange={(e) => {
                                    setBookChanged(index);
                                    setLibrary(prevState => (
                                        Object.values({
                                            ...prevState,
                                            [index]: {
                                                ...prevState[index],
                                                author: e.target.value
                                            }
                                        })))
                                }} required />
                                <input type="text" value={value.description} onChange={(e) => {
                                    setBookChanged(index);
                                    setLibrary(prevState => (
                                        Object.values({
                                            ...prevState,
                                            [index]: {
                                                ...prevState[index],
                                                description: e.target.value
                                            }
                                        })))
                                }} required />
                                <button onClick={handleSubmit} disabled={bookChanged === -1 ? true : false}>Submit</button>
                            </form>
                        </li>
                    ))
                }
            </ol>
        </>);
}

export function getServerSideProps() {
    const books = [
        {
            id: 1,
            title: "Harry Potter",
            date: "1995",
            author: "JK Rowling",
            description: "A book about a wizard who overcomes a racist snake guy with his friends."
        },
        {
            id: 2,
            title: "A brief history of time",
            date: "2010",
            author: "Steven Hawking",
            description: "A book about the universe from the beginning of time to now."
        },
        {
            id: 3,
            title: "The Hunger Games",
            date: "2013",
            author: "Some lady",
            description: "A book about a girl who wins an unfair dystopia's murder games, twice."
        }
    ];

    return {
        props: { books }
    };
}

export default edit;