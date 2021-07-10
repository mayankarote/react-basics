// props

const firstBook = {
  img: "img name",
  title: "I love you to the moon and back",
  author: "Mayanka Rote",
};

const secondBook = {
  img: "img name",
  title: "Our class is a family",
  author: "Mayanka Rote",
};

export default function bookList() {
  return (
    <section className="bookList">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} />
      <h1>{props.title}</h1>
      <h1>{props.author}</h1>
    </article>
  );
};

// props destructuring
const firstBook = {
  img: "img name",
  title: "I love you to the moon and back",
  author: "Mayanka Rote",
};

const secondBook = {
  img: "img name",
  title: "Our class is a family",
  author: "Mayanka Rote",
};

export default function bookList() {
  return (
    <section className="bookList">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <h1>{author}</h1>
    </article>
  );
};

// or

const Book = ({ img, title, author } ) => {
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <h1>{author}</h1>
    </article>
  );
};
