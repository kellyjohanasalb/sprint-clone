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



// Al cargar la página, mostrar solo el formulario de inicio de sesión
window.addEventListener('DOMContentLoaded', showSignIn);
