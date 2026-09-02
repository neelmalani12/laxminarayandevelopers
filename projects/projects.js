function toggleFAQ(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('active');
}
function switchTab(evt, tabId) {
    const buttons = document.querySelectorAll(".tab-trigger");
    buttons.forEach(btn => btn.classList.remove("active"));
    evt.currentTarget.classList.add("active");
    const target = document.getElementById(tabId);
    if (target) {
        const offset = 200;
        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: "smooth"
        });
    }
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbxkfYKmXcWjcPbsS78qbEtZehJ-6n4MGxkaFfvxwG6aFyqniHxrFyxKgExLXgspWeXzZA/exec';
const form = document.querySelector('#master-contact-form');
form.addEventListener('submit', e => {
    e.preventDefault();
    form.querySelector('button').innerText = "Sending...";
    const data = new FormData(form);
    for (let [key, value] of data.entries()) {
        let lowerKey = key.toLowerCase();
        if (lowerKey.includes('phone') || lowerKey.includes('mobile') || lowerKey.includes('number') || lowerKey.includes('contact')) {
            let cleanPhone = "'" + value.replace(/[^0-9+]/g, '');
            data.set(key, cleanPhone);
        }
        else if (typeof value === 'string' && value.trim().startsWith('+')) {
            data.set(key, "'" + value.trim());
        }
    }
    fetch(scriptURL, { method: 'POST', body: data })
        .then(response => {
            alert("Thank You! Information Submitted Successfully.");
            form.reset();
            form.querySelector('button').innerText = "Get Offer";
        })
        .catch(error => {
            alert("Oops! It seems your internet is slow. Please re-submit your inquiry.");
            form.querySelector('button').innerText = "Get Offer";
        });
});
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close-sidebar');
    if (menuBtn && sidebar && overlay) {
        menuBtn.addEventListener('click', () => {
            sidebar.classList.add('open');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    const closeMenu = () => {
        if (sidebar) sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    };
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbxkfYKmXcWjcPbsS78qbEtZehJ-6n4MGxkaFfvxwG6aFyqniHxrFyxKgExLXgspWeXzZA/exec';
const form = document.querySelector('#master-contact-form');
form.addEventListener('submit', e => {
    e.preventDefault();
    form.querySelector('button').innerText = "Sending...";
    const data = new FormData(form);
    for (let [key, value] of data.entries()) {
        let lowerKey = key.toLowerCase();
        if (lowerKey.includes('phone') || lowerKey.includes('mobile') || lowerKey.includes('number') || lowerKey.includes('contact')) {
            let cleanPhone = "'" + value.replace(/[^0-9+]/g, '');
            data.set(key, cleanPhone);
        }
        else if (typeof value === 'string' && value.trim().startsWith('+')) {
            data.set(key, "'" + value.trim());
        }
    }
    fetch(scriptURL, { method: 'POST', body: data })
        .then(response => {
            alert("Thank You! Information Submitted Successfully.");
            form.reset();
            form.querySelector('button').innerText = "Get Offer";
        })
        .catch(error => {
            alert("Oops! It seems your internet is slow. Please re-submit your inquiry.");
            form.querySelector('button').innerText = "Get Offer";
        });
});