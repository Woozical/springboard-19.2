const addBtn = document.getElementById('add-prompt');
const form = document.getElementById('create-form');
let fieldCount = 1;

function addPrompt(e){
    e.preventDefault();
    const newField = document.createElement('input');
    newField.setAttribute('type', 'text');
    newField.setAttribute('name', `f-${fieldCount}`);
    newField.setAttribute('placeholder', 'noun, verb, adjective, etc.')
    
    const newLabel = document.createElement('label');
    newLabel.setAttribute('for', `f-${fieldCount}`)
    newLabel.innerText = "Prompt: "
    const br = document.createElement('br');
    
    form.append(newLabel);
    form.append(newField);
    form.append(br);
    fieldCount += 1
}

addBtn.addEventListener('click', addPrompt);