export default function BookingList() {

    const books = ["React Basics", "Learning TypeScript", "Advanced JavaScript"];

    return(
        <ol>
            {books.map(book=><li key={book}>
                {book}
            </li>)}
        </ol>
    )
};
