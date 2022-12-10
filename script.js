const btn = document.querySelector('#create-account');

btn.addEventListener("click", e => {
    const password =  document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;
    const formControls = document.querySelector('div.form-controls');
    const p = document.querySelector('#warning');
    if (password !== confirmPassword) {
        p.textContent = '* Passwords do not match';
    }
    else p.textContent = '';
    return;
})