/* ==========================================================
   Kikoma Global Investment Limited - Master JavaScript Suite
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* 1. Mobile Menu Toggle Logic */
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });

        // Close menu automatically when clicking any navigation link on mobile
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });
    }

    /* 2. Interactive Portfolio Tracking Portal Simulation (track.html) */
    const trackForm = document.getElementById('track-form');
    const resultBox = document.getElementById('result-box');
    const displayId = document.getElementById('display-id');

    if (trackForm && resultBox && displayId) {
        trackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const inputVal = document.getElementById('ref-id').value;
            displayId.textContent = inputVal;
            resultBox.style.display = 'block';
            resultBox.scrollIntoView({ behavior: 'smooth' });
        });
    }

    /* 3. FAQ Accordion Toggle Logic (faq.html) */
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (question) {
                question.addEventListener('click', () => {
                    faqItems.forEach(other => {
                        if (other !== item) other.classList.remove('active');
                    });
                    item.classList.toggle('active');
                });
            }
        });
    }

});


/* ==========================================================
   4. Export Inquiry & Trade Desk WhatsApp Handler
   ========================================================== */
function submitExportInquiry(event) {
    if (event) event.preventDefault();

    // Capture input values safely with fallback checks
    const commodity = document.getElementById('commodity') ? document.getElementById('commodity').value : 'N/A';
    const quantity = document.getElementById('quantity') ? document.getElementById('quantity').value : 'N/A';
    const packaging = document.getElementById('packaging') ? document.getElementById('packaging').value : 'N/A';
    const incoterm = document.getElementById('incoterm') ? document.getElementById('incoterm').value : 'N/A';
    const destination = document.getElementById('destination') ? document.getElementById('destination').value : 'N/A';
    
    const company = document.getElementById('company') ? document.getElementById('company').value : 'N/A';
    const contact = document.getElementById('contact') ? document.getElementById('contact').value : 'N/A';
    const email = document.getElementById('email') ? document.getElementById('email').value : 'N/A';
    const phone = document.getElementById('phone') ? document.getElementById('phone').value : 'N/A';
    const notes = document.getElementById('notes') ? document.getElementById('notes').value : 'N/A';

    // Build the structured message safely using encodeURIComponent
    let message = `*New Export Inquiry - Kikoma Global* %0A%0A` +
        `*Commodity:* ${encodeURIComponent(commodity)}%0A` +
        `*Quantity:* ${encodeURIComponent(quantity)} MT%0A` +
        `*Packaging:* ${encodeURIComponent(packaging)}%0A` +
        `*Incoterms:* ${encodeURIComponent(incoterm)}%0A` +
        `*Destination:* ${encodeURIComponent(destination)}%0A%0A` +
        `*Company:* ${encodeURIComponent(company)}%0A` +
        `*Contact Person:* ${encodeURIComponent(contact)}%0A` +
        `*Email:* ${encodeURIComponent(email)}%0A` +
        `*Phone:* ${encodeURIComponent(phone)}%0A` +
        `*Notes/Target:* ${encodeURIComponent(notes)}`;

    // Official trade desk WhatsApp line (+2349133161564)
    const whatsappNumber = "2349133161564"; 

    // Open WhatsApp with the properly formatted string
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}
