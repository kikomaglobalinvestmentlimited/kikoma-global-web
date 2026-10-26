/**
 * Kikoma Global Investment - Inquiry Form & WhatsApp Handler
 * This script safely formats user inputs and routes export/trade desk queries to WhatsApp.
 */

function submitExportInquiry(event) {
    if (event) event.preventDefault();

    // 1. Capture input values safely from your form elements
    // (Ensure your form input IDs match these: commodity, quantity, packaging, incoterm, destination, company, contact, email, phone)
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

    // 2. Build the structured message safely using encodeURIComponent to prevent breaking code bugs
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

    // 3. Define your official trade desk WhatsApp line (e.g., +2349133161564 formatted for API)
    const whatsappNumber = "2349133161564"; 

    // 4. Open WhatsApp with the properly encoded string
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');

    // Optional: Close modal or reset form if applicable
    // closeFcoModal();
}
