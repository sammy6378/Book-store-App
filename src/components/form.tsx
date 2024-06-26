
import  { useState } from 'react';


export interface Tbook{
    id:number,
    name: string;
    author: string;
    year: number;
    price: number;
    description: string;
}
export default function Form({ addBook}:any) {
  const [bookName, setBookName] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [price, setprice] = useState('');

  const getData = (e:any) => {
    e.preventDefault();

    const id = Math.floor(1000 + Math.random() * 9000);

    const newBook = {
      id,
      name: bookName,
      author,
      year,
      price,
      description
    };

    addBook(newBook);

    // Clear form fields
    setBookName('');
    setDescription('');
    setAuthor('');
    setYear('');
    setprice('');
  };
 

  return (
    <>
  <form className="rounded-md bg-gray-50 shadow-2xl p-5 flex flex-col  w-full max-w-lg space-y-4 mt-5  form" onSubmit={getData}>
  <label className="text-lg font-semibold text-black">Book Name:</label>
  <input
    type="text"
    placeholder="Enter Book Name"
    value={bookName}
    onChange={(e) => setBookName(e.target.value)}
    required
    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-black"
  />
  <label className="text-lg font-semibold text-black">Description:</label>
  <input
    type="text"
    placeholder="Enter Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    required
    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-black"
  />
  <label className="text-lg font-semibold text-black">Author:</label>
  <input
    type="text"
    placeholder="Enter Author"
    value={author}
    onChange={(e) => setAuthor(e.target.value)}
    required
    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-black"
  />
  <label className="text-lg font-semibold text-black">Publication Year:</label>
  <input
    type="text"
    placeholder="Enter Publication Year"
    value={year}
    onChange={(e) => setYear(e.target.value)}
    required
    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-black"
  />
  <label className="text-lg font-semibold text-black">Price:</label>
  <input
    type="text"
    maxLength={5}
    minLength={3}
    placeholder="Enter Price"
    value={price}
    onChange={(e) => setprice(e.target.value)}
    required
    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-black"
  />
  <button  type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ">
    Submit
  </button>
</form>

    </>
  );
}
