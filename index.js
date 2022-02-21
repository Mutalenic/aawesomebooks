import Book from './modules/book.js';
import Date from './modules/time.js';

const theForm = document.querySelector('form');
const listBtn = document.querySelectorAll('.listBtn');
const addActive = document.querySelectorAll('.section');

theForm.addEventListener('submit', () => {
  const bookTitle = document.querySelector('#title');
  const bookAuthor = document.querySelector('#author');
  const newBook = new Book(bookTitle.value, bookAuthor.value);
  newBook.addBook();
});

window.load = new Book();

document.querySelector('#date').innerHTML = Date;
listBtn.forEach((btn, i) => {
  btn.onclick = () => {
    listBtn.forEach((oldBtn) => {
      oldBtn.classList.remove('active');
    });
    btn.classList.add('active');
    addActive.forEach((sec, index) => {
      if (i === index) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });
  };
});
