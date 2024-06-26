
import  { useState } from 'react';

export interface Tbook{
    id:Date,
    name: string;
    author: string;
    year: number;
    read: boolean;
    description: string;
}
export default function Form({ addBook}:any) {
  const [bookName, setBookName] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [available, setAvailable] = useState('');

  const getData = (e:any) => {
    e.preventDefault();

    const newBook = {
      id: new Date(),
      name: bookName,
      author,
      year,
      read: available,
      description
    };

    addBook(newBook);

    // Clear form fields
    // setBookName('');
    // setDescription('');
    // setAuthor('');
    // setYear('');
    // setAvailable('');
  };

  return (
    <>
      <form className="form" onSubmit={getData}>
        <label>Book Name</label>
        <input
          type="text"
          placeholder="Enter Book Name"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <label>Description</label>
        <input
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Author</label>
        <input
          type="text"
          placeholder="Enter Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Publication Year</label>
        <input
          type="text"
          placeholder="Enter Publication Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <label>Available</label>
        <input
          type="text"
          placeholder="Enter Available"
          value={available}
          onChange={(e) => setAvailable(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
