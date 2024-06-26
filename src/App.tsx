import { useEffect, useState } from 'react'
import './App.scss'
import { showForm } from './components/header'
import Form, { Tbook } from './components/form'
function App() {
  const [books, setBooks] = useState<Tbook[]>([]);
  const [search, setSearch] = useState('');
  
   // Loading books from localstorage
   useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  // saving books to localstorage
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

    // add new book record
  const addBook = (newBook:Tbook) => {
    setBooks([...books, newBook]);
  };

  // delete books record
  const confirmDelete = (id:Date) => {
    confirm('Are you sure you want to delete the record')
    setBooks(books.filter(book => book.id !== id))
  }

  // search books record
  books.filter(book =>
    book.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <>
      <div className="menu">
        <div className="menu-logo">
          <h3>Store</h3>
        </div>
        <div className="input">
          <input 
          type="text" 
          placeholder="Search Book by name...." 
          value = {search}
          onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button onClick={showForm}>Add Books</button>
      </div>

      <Form addBook={addBook}/>
      <div className="container">
        <table className='table table-hover'>
          <thead>
            <tr>
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
              books && books.map((book) =>{
                return(
                  <tr>
                    <td>{book.name}</td>
                    <td>{book.description}</td>
                    <td>{book.author}</td>
                    <td>{book.year}</td>
                    <td>{book.read}</td>
                    <td><button onClick={showForm} className='update'>Edit</button></td>
                    <td><button className='del' onClick={() => confirmDelete(book.id)}>Delete</button></td>
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
