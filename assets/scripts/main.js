const companiesContainer = document.querySelector(".companies");
const personsContainer = document.querySelector(".persons");
const booksContainer = document.querySelector(".books");
const loader = document.querySelector(".loader");
const apiBaseURL = "https://fakerapi.it/api/v1";
let persons = [];

function renderPersons(persons) {
    personsContainer.innerHTML = '';
    console.log(persons);
    persons.forEach((person) => {
        personsContainer.innerHTML += `
            <article class="personss">
                <figure class="person__poster">
                    <img src="${person.image}" alt="Person Poster" >
                </figure>
                <div class="person__info">
                    <h1>${person.firstname} ${person.lastname}</h1>
                    <span>${person.email} </span>
                    <span>${person.phone}</span>
                    <a href="${person.website}">Visit website</a>
                </div>
            </article>
        `;
    });
}

function renderCompanies(companies) {
  //.map ?!
companies.forEach((company) => {
    companiesContainer.innerHTML += `
        <article class="companyy">
            <figure class="company__poster">
                <img src="${company.image}" alt="Company Poster">
            </figure>
            <div class="company__info">
                    <h1>${company.name}</h1>
                    <span>${company.country}</span>
                    <span>${company.phone}</span>
                    <a href="${company.website}">Visit website</a>
                </div>
            </article>
        `;
    });
}

function renderBooks(books) {
// calling 
    books.forEach((book) => {
        booksContainer.innerHTML += `
        <article class="bookss">
            <figure class="book__poster">
                <img src="${book.image}" alt="Book Poster" >
            </figure>
            <div class="book__info">
                    <h1>${book.title}</h1>
                    <span>${book.author}</span>
                    <span>${book.description}</span>
                    <a href="${book.website}">Visit website</a>
                </div>
            </article>
        `;
    })
}

async function getPersons() {
  // Loader
loader.classList.remove("hidden");
await fetch(`${apiBaseURL}/persons?_quantity=20`)
    .then((res) => res.json())
    .then((data) => {
        persons = data.data;
        renderPersons(data.data);
        // console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
      //remove the loader
    loader.classList.add("hidden");
    });
}

getPersons();

async function getCompanies() {
  // Loader
loader.classList.remove("hidden");
await fetch(`${apiBaseURL}/companies?_quantity=15`)
    .then((res) => res.json())
    .then((data) => {
        renderCompanies(data.data);
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
      //remove the loader
        loader.classList.add("hidden");
    });
}
getCompanies();  

async function getBooks() {
  // Loader
loader.classList.remove("hidden");
await fetch(`${apiBaseURL}/books?_quantity=10`)
    .then((res) => res.json())
    .then((data) => {
        renderBooks(data.data);
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
      //remove the loader
        loader.classList.add("hidden");
    });
}

getBooks()

function preventDefault(event) {
    event.preventDefault();

}

function searchPersons(event) {
    const searchInput = event.target;

    const matchedPersons = persons.filter(person => person.firstname.toLowerCase().includes(searchInput.value) || person.lastname.toLowerCase().includes(searchInput.value));
console.log(searchPersons);
    renderPersons(matchedPersons);
}

function searchCompanies(event) {
    const searchInput = event.target;

    const matchedCompanies = companies.filter(company => company.name.toLowerCase().includes(searchInput.value) || company.email.toLowerCase().includes(searchInput.value));
    console.log(searchCompanies);
    renderCompanies(matchedCompanies);
}

function searchBooks(event) {
    const searchInput = event.target;

    const matchedBooks = books.filter(book => book.author.toLowerCase().includes(searchInput.value) || book.title.toLowerCase().includes(searchInput.value));
    console.log(searchBooks);
    renderBooks(matchedBooks);
}


