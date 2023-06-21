//variables
let myLibrary = [];
const btn = document.getElementById('btn-add-book');
const addBookForm = document.getElementById('bookContainer');
const myBooks = document.getElementById('myBooks');
const submit = document.getElementById('submitBook');
const booksGrid = document.getElementById('myBooks');
//funtctions
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return [title, author, pages, read]
    }
}

function addBook(book) {
    if (myLibrary.some(newBook => newBook.title === book.title && newBook.author === book.author)) {
      alert("Book is already in library.");
    } else {
      myLibrary.push(book)
    }
}
function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++){
        console.log(myLibrary[i])
    }
}
function displayCard(){
  if (addBookForm.style.display = "none") {
    addBookForm.style.display = "block";
  } else {
    addBookForm.style.display === "none"
  }
}
function removeCard () {
  if (addBookForm.style.display = "block") {
    addBookForm.style.display = "none";
  } else {
    addBookForm.style.display === "none"
  }  
}
function getBookFromInput () {
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const pages = document.getElementById('pages').value
  const read = document.getElementById('read').checked
  return new Book(title, author, pages, read)
}
function removeNode() {
  const bookDiv = document.getElementById('book-card');
  const parent = bookDiv.parentNode;
  parent.removeChild(bookDiv);
  console.log('removed');
}

function removeBook (book) {
const index = myLibrary.indexOf(book.title);
const x = myLibrary.splice(index, 1);
removeNode();

//console.log(bookDiv);
}
function updateBooksGrid () {
  resetBooksGrid()
  for (let book of myLibrary) {
    createBookCard(book)
  }
}
function resetBooksGrid () {
  booksGrid.innerHTML = ''
} 
function createBookCard (book) {
  const bookCard = document.createElement('div')
  const title = document.createElement('p')
  const author = document.createElement('p')
  const pages = document.createElement('p')
  const buttonGroup = document.createElement('div')
  const readBtn = document.createElement('button')
  const removeBtn = document.createElement('button')
  function toggleRead () {
    readBtn.addEventListener('click', ()=> {
      if (readBtn.textContent === 'Read') {
        readBtn.textContent = 'Not Read'
      } else {
        readBtn.textContent = 'Read'
      }
    })
  }
  bookCard.classList.add('book-card')
  bookCard.setAttribute('id','book-card')
  buttonGroup.classList.add('button-group')
  readBtn.classList.add('btn')
  removeBtn.classList.add('btn')
  readBtn.onclick = toggleRead
  removeBtn.onclick = removeBook

  title.textContent = `"Title: ${book.title}"`
  author.textContent = `Author: ${book.author}`
  pages.textContent = `${book.pages} pages`
  removeBtn.textContent = 'Remove'

  if (book.read) {
    readBtn.textContent = 'Read'
  } else {toggleRead
    readBtn.textContent = 'Not read'
  }

  bookCard.appendChild(title)
  bookCard.appendChild(author)
  bookCard.appendChild(pages)
  buttonGroup.appendChild(readBtn)
  buttonGroup.appendChild(removeBtn)
  bookCard.appendChild(buttonGroup)
  booksGrid.appendChild(bookCard)
}
function clearInputs () {
  var allInputs = document.querySelectorAll('input');
allInputs.forEach(singleInput => singleInput.value = '');
}
//event listeners
//prevent page from refreshing on submit click
document.getElementById('submitBook').addEventListener("click", function(event){
  event.preventDefault()
});
//show book card to add new book
btn.addEventListener('click', () => {
  displayCard();
});
// book submission
submit.addEventListener('click', () => {
  getBookFromInput();
  const newBook = getBookFromInput();
  addBook(newBook);
  myLibrary.forEach((book) => {
    console.log(book)
  });
  removeCard ();
  updateBooksGrid();
  clearInputs ();
  console.log(myLibrary);
})




