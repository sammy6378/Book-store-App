
import  { useState } from 'react';
import { hideForm } from '../App';
export interface Tbook{
    id:number,
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

    // Validate the form fields
    if (!bookName || !description || !author || !year || !available) {
      alert('Please fill out all fields.');
      return;
    }

    const id = Math.floor(1000 + Math.random() * 9000);
    const newBook = {
      id,
      name: bookName,
      author,
      year,
      read: available,
      description
    };

    addBook(newBook);

    // Clear form fields
    setBookName('');
    setDescription('');
    setAuthor('');
    setYear('');
    setAvailable('');
  };
 

  return (
    <>
  <form className="rounded-md bg-gray-50 shadow-2xl p-6 flex flex-col  w-full max-w-md space-y-4 form" onSubmit={getData}>
  <label className="text-lg font-semibold text-black">Book Name</label>
  <input
    type="text"
    placeholder="Enter Book Name"
    value={bookName}
    onChange={(e) => setBookName(e.target.value)}
    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <label className="text-lg font-semibold text-black">Description</label>
  <input
    type="text"
    placeholder="Enter Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <label className="text-lg font-semibold text-black">Author</label>
  <input
    type="text"
    placeholder="Enter Author"
    value={author}
    onChange={(e) => setAuthor(e.target.value)}
    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <label className="text-lg font-semibold text-black">Publication Year</label>
  <input
    type="text"
    placeholder="Enter Publication Year"
    value={year}
    onChange={(e) => setYear(e.target.value)}
    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <label className="text-lg font-semibold text-black">Available</label>
  <input
    type="text"
    placeholder="Enter Available"
    value={available}
    onChange={(e) => setAvailable(e.target.value)}
    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <button onClick={hideForm} type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
    Submit
  </button>
</form>

    </>
  );
}
