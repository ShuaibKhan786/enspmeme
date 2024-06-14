const enGay = "Whoever moves first are gay";
const spGay = "Felicidades, eres todo excepto gay.";
const congratsEn = "Congrats, You are not gay";
const congratsSp = "Felicidades, no eres gay";

document.addEventListener('DOMContentLoaded', function() {
    const englishBtn = document.getElementById('englishBtn');
    const spanishBtn = document.getElementById('spanishBtn');
    const gayDiv = document.getElementById('gay');

    if (englishBtn) {
        englishBtn.addEventListener('click', function() {
            localStorage.setItem('auth', 'true');
            localStorage.setItem('language', 'en');
            window.location.href = './gay.html';
        });
    }

    if (spanishBtn) {
        spanishBtn.addEventListener('click', function() {
            localStorage.setItem('auth', 'true');
            localStorage.setItem('language', 'sp');
            window.location.href = './gay.html';
        });
    }

    function checkAuth() {
        if (localStorage.getItem('auth') !== 'true') {
            window.location.href = '/';
        } else {
            displayMessage();
        }
    }

    function displayMessage() {
        const language = localStorage.getItem('language');
        if (language === 'en') {
            gayDiv.innerText = enGay;
            setTimeout(() => {
                gayDiv.innerText = congratsEn;
                localStorage.setItem('auth','false')
            }, 5000); 
        } else if (language === 'sp') {
            gayDiv.innerText = spGay;
            setTimeout(() => {
                gayDiv.innerText = congratsSp;
                localStorage.setItem('auth','false')
            }, 5000); 
        }
    }

    if (window.location.pathname.includes('gay.html')) {
        checkAuth();
    }
});
