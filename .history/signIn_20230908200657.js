function validateSignIn() {
    const cellNumber = document.getElementById('cellNumber').value;
    const password = document.getElementById('password').value;

    if (cellNumber.length !== 10) {
        alert("Ingrese un número de celular válido.");
        return;
    }

    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    // Si todo está correcto, muestra el chat principal
    showMainChat();
}

function validateSignUp() {
    const name = document.getElementById('signUpName').value;
    const cellNumber = document.getElementById('signUpCellNumber').value;
    const password = document.getElementById('signUpPassword').value;
    const imageUrl = document.getElementById('signUpImageUrl').value;
   
    if (cellNumber.length !== 10) {
        alert("Ingrese un número de celular válido.");
        return;
    }

    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    if (!isValidURL(imageUrl)) {
        alert("Ingrese una URL válida para la imagen.");
        return;
    }

    // Si todo está correcto, muestra el chat principal
    showMainChat();
}

function showSignUp() {
    document.getElementById('signInContainer').style.display = 'none';
    document.getElementById('signUpContainer').style.display = 'block';
}

function showSignIn() {
    document.getElementById('signUpContainer').style.display = 'none';
    document.getElementById('signInContainer').style.display = 'block';
}

function showMainChat() {
    document.getElementById('signInContainer').style.display = 'none';
    document.getElementById('signUpContainer').style.display = 'none';
    // Aquí deberías mostrar la sección de chat principal
    // Por ejemplo: document.getElementById('mainChat').style.display = 'block';
}

function isValidURL(string) {
    const res = string.match(/^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i);
    return (res !== null);
}

// Al cargar la página, mostrar solo el formulario de inicio de sesión
window.addEventListener('DOMContentLoaded', showSignIn);
