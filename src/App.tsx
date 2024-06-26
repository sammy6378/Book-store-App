
import { useEffect, useState } from 'react'
import './App.scss'
import Form, { Tbook } from './components/form'
import Header from './components/header';

// to be updated
export const hideForm = () => {
  const form = document.querySelector('.form');
  form?.classList.remove('active');
}

function App() {
  const [books, setBooks] = useState<Tbook[]>([]);
  const [search, setSearch] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const booksPerPage = 6;
  
  // Loading books from localstorage
  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  // Add new book record
  const addBook = (newBook: Tbook) => {
    const booksData = [...books, newBook];
    setBooks(booksData);
    localStorage.setItem('books', JSON.stringify(booksData));
  };

  // Delete book record
  const confirmDelete = (id: number) => {
    if (confirm('Are you sure you want to delete the record?')) {
      const updatedBooks = books.filter(book => book.id !== id);
      setBooks(updatedBooks);
      localStorage.setItem('books', JSON.stringify(updatedBooks));
    }
  };

  // Search books record
  const filteredBooks = books.filter(book =>
    book.name.toLowerCase().includes(search.toLowerCase())
  );

  // Calculate the current books to display
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // to be updated
  const showForm = () => {
    const form = document.querySelector('.form');
    form?.classList.toggle('active');
  };

  return (
    <>
      <Header />
      
      <div className="flex ">

        <div className="border-r border-gray-500 w-1/5 py-5 px-4 left-nav max-[767px]:w-3/6 md:mx-auto h-screen justify-start">
        <h2 className='text-2xl text-green-600'>Books Library</h2>
        <div className="max-w-full w-full  pt-5">
        <input
          type="text"
          placeholder="Search Book by name...."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='input w-full px-2 py-1 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-transparent'
        />
      </div>
        <div className="pt-7">
          <button onClick={showForm} className='btn btn-success text-white w-full'>Check Database</button>
        </div>
        </div>

      <div className="w-full p-3 overflow-hidden">
        <div className=" overflow-x-auto">
        <table className='table table-zebra table-xs my-5 border-collapse border border-slate-500 overflow-x-auto'>
          <thead className='bg-slate-700'>
            <tr className='text-lg text-cyan-400 border border-slate-600'>
              <th>Ref</th>
              <th>Book Name</th>
              <th>Description</th>
              <th>Author</th>
              <th>Publication Year</th>
              <th>Price</th>
              <th>Update Book</th>
              <th>Delete Book</th>
            </tr>
          </thead>
          <tbody>
            {currentBooks && currentBooks.map((book, index) => (
              <tr className='py-3 border border-slate-600 text-white' key={book.id}>
                <td>{indexOfFirstBook + index + 1}</td>
                <td className='text-sm'>{book.name}</td>
                <td className='text-sm'>{book.description}</td>
                <td className='text-sm'>{book.author}</td>
                <td className='text-sm'>{book.year}</td>
                <td className='text-sm'>{book.price}</td>
                <td>
                  <button onClick={showForm} className='btn btn-sm btn-outline btn-primary'>Edit</button>
                </td>
                <td>
                  <button className='btn btn-sm btn-outline btn-accent' onClick={() => confirmDelete(book.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <div className='flex justify-between mt-4'>
          <button 
            onClick={() => paginate(currentPage - 1)} 
            disabled={currentPage === 1}
            className='btn btn-outline btn-primary'>
            Previous
          </button>
          <button 
            onClick={() => paginate(currentPage + 1)} 
            disabled={currentBooks.length < booksPerPage}
            className='btn btn-outline btn-primary'>
            Next
          </button>
        </div>
        <Form addBook={addBook} />
      </div>
      </div>
     
    </>
  )
}

export default App;
