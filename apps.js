document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginButton').addEventListener('click', function () {
        const username = document.getElementById('inputEmail4');
        const password = document.getElementById('inputPassword4');

        if (!username.value.trim()) {
            username.style.border = '2px solid red'; 
          
        } else {
            username.style.border = ''; 
        }

        if (!password.value.trim()) {
            password.style.border = '2px solid red'; 
        } else {
            password.style.border = ''; 
        }
        
    });
    
});
