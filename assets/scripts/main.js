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

function getCompanies() {
    // Loader
    loader.classList.remove('hidden');
    fetch(`https://fakerapi.it/api/v1/companies`)
    .then(res => res.json)
    .then(data =>{
        renderCompanies(data.data);
    })
    .catch(error =>{
        console.log(error);
    })
    .finally( () => {
        //remove
        loader.classList.add('hidden');
    })

}

getCompanies();


<svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 100 100"
    enable-background="new 0 0 0 0" xml:space="preserve"
    width="50" height="50">
    <path fill="#000"
        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 
M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
        <animateTransform attributeName="transform"
            attributeType="XML" type="rotate" dur="1s"
            from="0 50 50" to="360 50 50"
            repeatCount="indefinite" />
    </path>
</svg>