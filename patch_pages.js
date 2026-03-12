const fs = require('fs');

// --- landing.html ---
let html = fs.readFileSync('landing.html', 'utf8');

// Add favicon after title
if (!html.includes('favicon.ico')) {
    html = html.replace(
        /<title>HeadQ[^<]*<\/title>/,
        function (match) {
            return match + '\n    <!-- Favicon -->\n    <link rel="icon" type="image/x-icon" href="assets/favicon/favicon.ico">\n    <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png">\n    <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png">\n    <link rel="apple-touch-icon" href="assets/favicon/apple-touch-icon.png">\n    <link rel="manifest" href="assets/favicon/site.webmanifest">';
        }
    );
}

// Fix footer social links in landing.html
html = html.replace(
    'href="#" class="fs-4"><i class="fab fa-facebook"></i></a>',
    'href="https://www.facebook.com/share/1GK1qBV1BL/" target="_blank" class="fs-4"><i class="fab fa-facebook"></i></a>'
);
html = html.replace(
    'href="#" class="fs-4"><i class="fab fa-instagram"></i></a>',
    'href="https://www.instagram.com/headq_coworking?igsh=MWE2cmFmbzh3OWcyag==" target="_blank" class="fs-4"><i class="fab fa-instagram"></i></a>'
);
html = html.replace(
    'href="#" class="fs-4"><i class="fab fa-linkedin"></i></a>',
    'href="https://www.linkedin.com/in/headq-coworking-space-824828200" target="_blank" class="fs-4"><i class="fab fa-linkedin"></i></a>'
);

fs.writeFileSync('landing.html', html);
console.log('landing.html done');

// --- contact.html ---
let chtml = fs.readFileSync('contact.html', 'utf8');

// Add favicon
if (!chtml.includes('favicon.ico')) {
    chtml = chtml.replace(
        /<title>HeadQ[^<]*<\/title>/,
        function (match) {
            return match + '\n    <!-- Favicon -->\n    <link rel="icon" type="image/x-icon" href="assets/favicon/favicon.ico">\n    <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png">\n    <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png">\n    <link rel="apple-touch-icon" href="assets/favicon/apple-touch-icon.png">\n    <link rel="manifest" href="assets/favicon/site.webmanifest">';
        }
    );
}

// Fix inline social links in contact sidebar - replace all three href="#" for social icons
chtml = chtml.replace(
    '<a href="#" style="color:rgba(255,255,255,0.5);font-size:1.1rem;transition:color 0.2s;" onmouseover="this.style.color=\'#f48c06\'" onmouseout="this.style.color=\'rgba(255,255,255,0.5)\'"><i class="fab fa-instagram"></i></a>',
    '<a href="https://www.instagram.com/headq_coworking?igsh=MWE2cmFmbzh3OWcyag==" target="_blank" style="color:rgba(255,255,255,0.5);font-size:1.1rem;transition:color 0.2s;" onmouseover="this.style.color=\'#f48c06\'" onmouseout="this.style.color=\'rgba(255,255,255,0.5)\'"><i class="fab fa-instagram"></i></a>'
);
chtml = chtml.replace(
    '<a href="#" style="color:rgba(255,255,255,0.5);font-size:1.1rem;transition:color 0.2s;" onmouseover="this.style.color=\'#f48c06\'" onmouseout="this.style.color=\'rgba(255,255,255,0.5)\'"><i class="fab fa-linkedin"></i></a>',
    '<a href="https://www.linkedin.com/in/headq-coworking-space-824828200" target="_blank" style="color:rgba(255,255,255,0.5);font-size:1.1rem;transition:color 0.2s;" onmouseover="this.style.color=\'#f48c06\'" onmouseout="this.style.color=\'rgba(255,255,255,0.5)\'"><i class="fab fa-linkedin"></i></a>'
);
chtml = chtml.replace(
    '<a href="#" style="color:rgba(255,255,255,0.5);font-size:1.1rem;transition:color 0.2s;" onmouseover="this.style.color=\'#f48c06\'" onmouseout="this.style.color=\'rgba(255,255,255,0.5)\'"><i class="fab fa-facebook"></i></a>',
    '<a href="https://www.facebook.com/share/1GK1qBV1BL/" target="_blank" style="color:rgba(255,255,255,0.5);font-size:1.1rem;transition:color 0.2s;" onmouseover="this.style.color=\'#f48c06\'" onmouseout="this.style.color=\'rgba(255,255,255,0.5)\'"><i class="fab fa-facebook"></i></a>'
);

// Fix footer social links
chtml = chtml.replace(
    'href="#" class="fs-4"><i class="fab fa-facebook"></i></a>',
    'href="https://www.facebook.com/share/1GK1qBV1BL/" target="_blank" class="fs-4"><i class="fab fa-facebook"></i></a>'
);
chtml = chtml.replace(
    'href="#" class="fs-4"><i class="fab fa-instagram"></i></a>',
    'href="https://www.instagram.com/headq_coworking?igsh=MWE2cmFmbzh3OWcyag==" target="_blank" class="fs-4"><i class="fab fa-instagram"></i></a>'
);
chtml = chtml.replace(
    'href="#" class="fs-4"><i class="fab fa-linkedin"></i></a>',
    'href="https://www.linkedin.com/in/headq-coworking-space-824828200" target="_blank" class="fs-4"><i class="fab fa-linkedin"></i></a>'
);

fs.writeFileSync('contact.html', chtml);
console.log('contact.html done');
console.log('All done!');
