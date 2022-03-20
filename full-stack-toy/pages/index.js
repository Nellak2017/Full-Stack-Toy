import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>
        Welcome to Full-Stack-Toy Library!
      </h1>
      <br></br>
      <button>
        <Link href="/view">See all books</Link>
      </button>
      <button>
        <Link href="/edit">Edit books</Link>
      </button>
    </>
  )
}
