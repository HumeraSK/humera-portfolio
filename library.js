let books = JSON.parse(localStorage.getItem('books')) || [];

function saveBooks() {
  localStorage.setItem('books', JSON.stringify(books));
  displayBooks();
}

function addBook() {
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  if (!title || !author) {
    alert('Please enter both title and author.');
    return;
  }
  books.push({ title, author, issued: false });
  saveBooks();
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
}

function issueBook(index) {
  books[index].issued = true;
  saveBooks();
}

function returnBook(index) {
  books[index].issued = false;
  saveBooks();
}

function deleteBook(index) {
  if(confirm("Are you sure you want to delete this book?")) {
    books.splice(index, 1);
    saveBooks();
  }
}

function displayBooks() {
  const tbody = document.querySelector('#booksTable tbody');
  tbody.innerHTML = '';
  books.forEach((book, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td class="${book.issued ? 'status-issued' : 'status-available'}">${book.issued ? 'Issued' : 'Available'}</td>
      <td>
        ${!book.issued ? `<button class="action-btn action-issue" onclick="issueBook(${index})">Issue</button>` : ''}
        ${book.issued ? `<button class="action-btn action-return" onclick="returnBook(${index})">Return</button>` : ''}
        <button class="action-btn action-delete" onclick="deleteBook(${index})">Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

displayBooks();
