document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('form'),
        input = form.querySelector('input'),
        setBtn = form.querySelector('button[type="submit"]'),
        localStorageValue = window.localStorage.getItem('num23');

    if (localStorageValue) {
        const paragraph = document.createElement('p');

        paragraph.style.color = parseInt(localStorageValue) % 2 === 0 ? 'green' : 'red';
        paragraph.textContent = `Saved value: ${localStorageValue}`;
        form.parentElement.insertBefore(paragraph, form);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (!input.value) {
            alert('You should enter data before sending form');
        } else {
            window.localStorage.setItem('num23', input.value);
        }
    });

    form.addEventListener('reset', function() {
        window.localStorage.removeItem('num23');
    });

    input.addEventListener('input', function() {
        changeStateSetBtn();
    });

    function changeStateSetBtn() {
        if (input.value) {
            setBtn.removeAttribute('disabled');
        } else {
            setBtn.setAttribute('disabled', 'disabled');
        }
    }

    changeStateSetBtn();
});