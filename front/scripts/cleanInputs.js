function cleanInputs(){
    const form = document.getElementById('form');

    const checkboxes = document.querySelectorAll('input[name="genre[]"]');
    for (const item of checkboxes) {
        item.checked = false;
        item.classList.remove('selected'); 
    }

    form.reset();
}

module.exports = cleanInputs;