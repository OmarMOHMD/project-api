var companiesContainer = document.querySelector('.compaines');
var loader = document.querySelector('.loader');

function renderCompanies(compaines){
    compaines.forEach(company => {
        companiesContainer.innerHTML += `
        <article class="company">
            <figure class="company__poster">
                <img src="${company.image}" alt="Company Poster" loading="lazy">
            </figure>
            <div class="company__info">
                    <h1>${company.name}</h1>
                    <span>${company.country}</span>
                    <span>${company.phone}</span>
                    <a href="${company.website}">Visit website</a>
                </div>
            </article>
        `;
    })
}

async function getCompanies() {
    // Loader
    // loader.classList.remove('hidden');
    const fetchData = await fetch(`https://fakerapi.it/api/v1/companies`)
    fetchData
    .json()
    .then(({ data }) => {
        console.log(data)
        console.log('test git')
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        //remove
        // loader.classList.add('hidden');
    })
}

getCompanies();

