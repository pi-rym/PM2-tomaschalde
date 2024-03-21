const genres = ["Action","Fantasy","Comedy","Drama","Sci-Fi","Terror","Adventure","Romance"];
const options = document.getElementById('options');

function renderGenres(){
    options.innerHTML = ''; //Limpio el div

    for (const genre of genres) {
        const div = document.createElement('div')
        const input = document.createElement('input');
        const label = document.createElement('label');

        div.classList.add('form-check')

        input.type = "checkbox";
        input.id = genre;
        input.name = "genre[]";
        input.value = genre;
        input.classList.add('form-check-input')
  

        label.htmlFor = genre;
        label.textContent = genre;
        label.classList.add('form-check-label')

        options.appendChild(div);
        options.appendChild(input);
        options.appendChild(label);
        
        
    }
    return options;
}

module.exports = renderGenres;