import Link from "next/link";
const view = ({books}) => {
    return (
        <>
            <button>
                <Link href="/edit">
                    Edit
                </Link>
            </button>
            <ol>
                {
                books.map((value, index)=> (
                    <li key={value.id}>
                        <b>{value.title}</b>
                        <span> - </span>
                        <span>{value.date},&nbsp;</span>
                        <span>{value.author},&nbsp;</span>
                        <span>{value.description}</span>
                    </li>
                    )) 
                }
            </ol>
        </>
    );
}

// TODO: Get this data from your GO api
// See also: https://codesandbox.io/s/nextjs-data-fetching-forked-61tkb?file=/pages/index.js:218-421
// You can fetch the data from the server or get static props as well. Static props are stored in the HTML served, and are the same for everyone. Server Side props are generated on the server.
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

export default view;