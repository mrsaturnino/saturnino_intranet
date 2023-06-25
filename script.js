const form = document.getElementById('main-id-form');
const usernameInput = document.getElementById('username-login');
const passwordInput = document.getElementById('password-login');
/*
Cada const acima está responsável por referenciar os elementos HTML do formulário.
Assim, serão utilizadas posteriormente.
*/

function login() {

    const username = usernameInput.value;
    const password = passwordInput.value;
    //consts que armazenarão os valores colocados nos campos "Login" e "Password"

    console.log('Username:', username);
    console.log('Password:', password);
    //teste de saída console.log com as consts acima, que capturarão os dados inseridos no formulário.
}
