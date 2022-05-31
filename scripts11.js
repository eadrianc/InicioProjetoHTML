const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const textSubject = document.getElementById('text-subject');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    checkInputs();
    });

function  checkInputs () {
    const usernameValue = username.value;
    const emailValue = email.value;
    const subjectValue = subject.value;
    const textSubjectValue = textSubject.value;



if (usernameValue == '') {
 setErrorFor(username, "O nome de usuario é obrigatorio.");
} else {
    setSuccessFor(username);
}

if (emailValue == '') {
    setErrorFor(email, 'O email é obrigatorio.')
}else if(!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor insira um email válido");
}else {
    setSuccessFor(email);
}

if (subjectValue == "") {
    setErrorFor(subject, "O assunto é obrigadorio. ");
}else {
    setSuccessFor(subject);
}
 

if (textSubjectValue == '') {
    setErrorFor(textSubject, 'O texto do assunto é obrigatorio. ');
} else if (textSubjectValue.length < 20) {
    setErrorFor(textSubject, "O assunto precisa ter no minimo 20 Caracteres");
}else {
    setSuccessFor(textSubject);
}


const formControls = form.querySelectorAll('.form-control')

const formIsValid = [ ... formControls].every((formControl) => {
return (formControl.className == "form-control success");
});


    
}





function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    //Adicionar a mensagem de erro

    small.innerText = message;

    //adicionar a classe error

    formControl.className = "form-control error";

    
}

function setSuccessFor (input) {
    const formControl = input.parentElement;

//Adicionar a classe de sucesso
formControl.className = 'form-control success'
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

