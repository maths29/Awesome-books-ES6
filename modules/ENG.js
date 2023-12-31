const BooksContainer = document.querySelector('.books-list-container');
const bookslisth2 = document.querySelector('.books-list-h2');
const formInfo = document.querySelector('form');
const contact = document.querySelector('.contact-section');
const homeScreen = document.querySelector('.home-welcome');

export const homeDisplay = () => {
  BooksContainer.classList.remove('active');
  bookslisth2.classList.remove('active');
  formInfo.classList.remove('active');
  contact.classList.remove('active');
  homeScreen.classList.remove('remove-content');
};

export const displayBookList = () => {
  BooksContainer.classList.add('active');
  bookslisth2.classList.add('active');
  formInfo.classList.remove('active');
  contact.classList.remove('active');
  homeScreen.classList.add('remove-content');
};
export const displayFormSection = () => {
  bookslisth2.classList.remove('active');
  formInfo.classList.add('active');
  BooksContainer.classList.remove('active');
  contact.classList.remove('active');
  homeScreen.classList.add('remove-content');
};
export const displayContactSection = () => {
  contact.classList.add('active');
  bookslisth2.classList.remove('active');
  BooksContainer.classList.remove('active');
  formInfo.classList.remove('active');
  homeScreen.classList.add('remove-content');
};