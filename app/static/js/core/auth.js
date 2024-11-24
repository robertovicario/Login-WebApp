document.getElementById('btn-login').addEventListener('click', () => {
    username = document.getElementById('input-username').value;
    password = document.getElementById('input-password').value;
    rememberMe = document.getElementById('formCheck-1').checked;

    if (username !== '' && password !== '') {
        alert(`username=${username}, password=${password}, remember_me=${rememberMe}`);
        window.location.href = '/home';
    } else {
        alert('error');
    }
});
