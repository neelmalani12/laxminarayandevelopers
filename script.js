var secret = "TGF4bWlARGV2QDEy";
var user_pass = prompt("આ વેબસાઈટ જોવા માટે પાસવર્ડ નાખો:");

if (user_pass === null || btoa(user_pass) !== secret) {
    alert("ખોટો પાસવર્ડ! તમે આ સાઈટ જોઈ શકશો નહીં.");
    window.location.href = "https://google.com";
}
//    Mobile Menu & Sidebar Logic (Cleaned)
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close-sidebar');

    if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.add('open');
            sidebar.classList.add('active');
            if (overlay) overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    const closeMenu = () => {
        if (sidebar) {
            sidebar.classList.remove('open');
            sidebar.classList.remove('active');
        }
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);

    document.addEventListener('click', (e) => {
        if (sidebar && (sidebar.classList.contains('open') || sidebar.classList.contains('active'))) {
            if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
                closeMenu();
            }
        }
    });
});

// ૨. Form Submit Logic (Fixed CORS Error)
const scriptURL = 'https://script.google.com/macros/s/AKfycbxkfYKmXcWjcPbsS78qbEtZehJ-6n4MGxkaFfvxwG6aFyqniHxrFyxKgExLXgspWeXzZA/exec';
const form = document.querySelector('#master-contact-form');

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const submitBtn = form.querySelector('button');
        submitBtn.innerText = "Sending...";
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
        fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: data })
            .then(response => {
                alert("Thank You! Information Submitted Successfully.");
                form.reset();
                submitBtn.innerText = "Submit Details";
            })
            .catch(error => {
                alert("Oops! Something went wrong. Please check your internet and try again.");
                console.error('Submission Error:', error);
                submitBtn.innerText = "Submit Details";
            });
    });
}

// ૩. Filter Function (For Area Cards)
function lxFilterArea(category, btn) {
    const allButtons = document.querySelectorAll('.lx-area-menu button');
    allButtons.forEach(b => {
        b.classList.remove('active');
        b.style.background = '#f1f2f6';
        b.style.color = '#333';
        b.style.boxShadow = 'none';
    });

    btn.classList.add('active');
    btn.style.background = '#FFB347';
    btn.style.color = '#000';
    btn.style.boxShadow = '0 4px 10px rgba(255, 179, 71, 0.4)';

    const track = document.getElementById('lxAreaSlider');
    if (track) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
    }

    document.querySelectorAll('.lx-area-card').forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}


document.addEventListener("DOMContentLoaded", function () {
    var userLang = navigator.language || navigator.userLanguage;
    var shortLang = userLang.substring(0, 2);
    var videoId = "CF5ApZr-VFE";
    var params = "?autoplay=1&mute=1&cc_load_policy=1&loop=1&playlist=" + videoId;

    var finalLang = "en";

    if (shortLang === "gu") {
        finalLang = "gu";
    } else if (shortLang === "hi") {
        finalLang = "hi";
    } else {
        finalLang = "en";
    }
    var dynamicSrc = "https://www.youtube.com/embed/" + videoId + params + "&cc_lang_pref=" + finalLang + "&hl=" + finalLang;

    var player = document.getElementById('laxmiPlayer');
    if (player) {
        player.src = dynamicSrc;
    }
    console.log("Detected Language: " + shortLang + " | CC Set To: " + finalLang);
});


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
