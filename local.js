// for name 

document.getElementById('name-send').addEventListener('click', function(){
    const nameField = document.getElementById('name-input');
    // console.log(nameField);
    const nameValue = nameField.value;
    // console.log(nameValue);
    nameField.value = '';
    localStorage.setItem('name',nameValue);
});

document.getElementById('name-delete').addEventListener('click', function(){
    localStorage.removeItem('name');
});

// for email 
document.getElementById('email-send').addEventListener('click', function(){
    const emailField = document.getElementById('email-input');
    // console.log(emailField);
    const emailValue = emailField.value;
    // console.log(emailValue);
    emailField.value = '';

    localStorage.setItem('email',emailValue);
});

document.getElementById('email-delete').addEventListener('click', function(){
    localStorage.removeItem('email');
});

// for textarea 
document.getElementById('text-send').addEventListener('click', function(){
    const textField = document.getElementById('text-input');
    // console.log(textField);
    const textValue = textField.value;
    // console.log(textValue);
    textField.value = '';

    localStorage.setItem('text',textValue);
});

document.getElementById('text-delete').addEventListener('click', function(){
    localStorage.removeItem('text');
});

document.getElementById('reset').addEventListener('click', function(){
    localStorage.clear();
})