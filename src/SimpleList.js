// props destructuring
const books = [
  {
    id: 1,
    img: "img name",
    title: "I love you to the moon and back",
    author: "Mayanka Rote",
  },
  {
    id: 2,
    img: "img name",
    title: "Our class is a family",
    author: "Mayanka Rote",
  },
];
const names = ["Mayu", "Rani", "Mayanka"];
const newName = names.map((name) => {
  return <h1>{name}</h1>;
});
export default function bookList() {
  return (
    <section className="bookList">
      {books.map((book, index) => {
        const { img, title, author, children } = book;
        return (
          <div>
            <Book key={index} {...book}></Book>
          </div>
        );
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <h1>{author}</h1>
      <children />
    </article>
  );
};
