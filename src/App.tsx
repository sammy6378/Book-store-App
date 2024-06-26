import { useEffect, useState } from 'react'
import './App.scss'
import Form, { Tbook } from './components/form'
import Header from './components/header';

export const hideForm = () => {
  const form =document.querySelector('.form');
  form?.classList.remove('active')
}

function App() {
  const [books, setBooks] = useState<Tbook[]>([]);
  const [search, setSearch] = useState<string>('');
 
  
   // Loading books from localstorage
   useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  
  // add new book record
  const addBook = (newBook:Tbook) => {
    const booksData =[...books, newBook]
    setBooks(booksData);

    localStorage.setItem('books', JSON.stringify(booksData));
  };

  // delete books record
  const confirmDelete = (id:number) => {
    confirm('Are you sure you want to delete the record')
    setBooks(books.filter(book => book.id !== id))
  }

  // search books record
  const filteredBooks = books.filter(book => 
  book.name.toLowerCase().includes(search.toLowerCase())
)

const showForm = () => {
  const form =document.querySelector('.form');
  form?.classList.toggle('active')
}


  return (
    <>
      <Header />
      <div className="max-w-full w-full px-20 py-5">
          <input 
          type="text" 
          placeholder="Search Book by name...." 
          value = {search}
          onChange={(e) => setSearch(e.target.value)}
          className='input  w-full px-2 py-1 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-transparent'
          />
        </div>

        <Form addBook={addBook} />
      <div className=" overflow-x-auto m-8">
        <div className="flex justify-between px-4">
        <h2 className='text-4xl text-green-600'>Books Record</h2>
        <button onClick={showForm} className='btn btn-success text-white'>Add Books</button>
        </div>
        <table className='table table-zebra table-xs my-5 border-collapse border border-slate-500 '>
          <thead className='bg-slate-700'>
            <tr className=' text-lg text-cyan-400 border border-slate-600 '>
              <th>Ref</th>
              <th>Book Name</th>
              <th>Description</th>
              <th>Author</th>
              <th>Publication Year</th>
              <th>Available</th>
              <th>Update Book</th>
              <th>Delete Book</th>
            </tr>
          </thead>
          <tbody>
            
            {
              filteredBooks && filteredBooks.map((book) =>{
                return(
                  <tr className='leading-3 py-2 border border-slate-600 text-4xl text-white' key={book.id}>
                    <td>{book.id}</td>
                    <td className='text-sm'>{book.name}</td>
                    <td className='text-sm md:text-ellipsis'>{book.description}</td>
                    <td className='text-sm'>{book.author}</td>
                    <td className='text-sm'>{book.year}</td>
                    <td className='text-sm'>{book.read}</td>
                    <td><button onClick={showForm} className='btn btn-sm btn-outline btn-primary'>Edit</button></td>
                    <td><button className='btn btn-sm btn-outline btn-accent' onClick={() => confirmDelete(book.id)}>Delete</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
