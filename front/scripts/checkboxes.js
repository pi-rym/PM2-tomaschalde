function validateCheckboxes(){
    const checkboxes = document.querySelectorAll('input[name="genre[]"]');

    
    for (const item of checkboxes) {

        if(item.checked){
            item.classList.add("selected");
            return true;
        }
        
    }
}

function valuesCheckboxes(){
    const checkboxes = document.querySelectorAll('input[name="genre[]"]');
    const values = []

    for (const item of checkboxes) {
        if(item.checked)
            values.push(item.value)
    }

    return values;
}

module.exports = {
    validateCheckboxes,
    valuesCheckboxes,
}