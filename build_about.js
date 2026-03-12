const fs = require('fs');
const path = require('path');

try {
    const landingPath = path.join('c:', 'Users', 'admin', 'Downloads', 'ter', 'ter', 'landing.html');
    const aboutPath = path.join('c:', 'Users', 'admin', 'Downloads', 'ter', 'ter', 'about.html');
    const cssPath = path.join('c:', 'Users', 'admin', 'Downloads', 'ter', 'ter', 'landing.css');

    const landingHtml = fs.readFileSync(landingPath, 'utf8');

    // Extract Nav
    const navStart = landingHtml.indexOf('<!-- Floating Pill Navigation -->');
    let navEnd = landingHtml.indexOf('</nav>');
    if (navEnd > -1) {
        navEnd = landingHtml.indexOf('</div>', navEnd) + 6;
    }
    const navSection = landingHtml.substring(navStart, navEnd);

    // Extract Footer
    const footerStart = landingHtml.indexOf('<!-- Footer -->');
    const footerEnd = landingHtml.indexOf('</footer>') + 9;
    const footerSection = landingHtml.substring(footerStart, footerEnd);

    const aboutHtml = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About HeadQ | The Future of Work</title>
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Google Fonts: Outfit -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;800&display=swap" rel="stylesheet">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="landing.css">
</head>

<body>

    ${navSection}

    <!-- About Hero Section -->
    <section class="about-hero-section">
        <div class="about-hero-bg"></div>
        <div class="container position-relative z-3">
            <div class="row min-vh-100 align-items-center">
                <div class="col-lg-8 mx-auto text-center mt-5 pt-5">
                    <h5 class="section-tag mb-4" style="letter-spacing: 5px;">OUR STORY</h5>
                    <h1 class="display-3 fw-bold text-white mb-4">Rooted in <br><span class="text-orange">Co-operation.</span></h1>
                    <p class="lead text-white opacity-75 mx-auto" style="max-width: 600px;">
                        Designing Coworking Spaces Where Culture Meets Business.
                    </p>
                </div>
            </div>
        </div>
        <div class="scroll-indicator">
            <i class="fas fa-chevron-down text-white fs-4 opacity-50"></i>
        </div>
    </section>

    <!-- The HeadQ Identity text -->
    <section class="story-section py-5 my-5">
        <div class="container py-5">
            <div class="row align-items-center">
                <div class="col-lg-5 pe-lg-5 mb-5 mb-lg-0">
                    <div class="position-relative">
                        <img src="assets/office.png" alt="HeadQ Community" class="img-fluid rounded-4 shadow-lg" style="border: 1px solid rgba(255,255,255,0.1);">
                        <div class="story-glass-card">
                            <h2 class="fw-bold mb-0 text-white">Community First</h2>
                            <p class="text-white opacity-75 mb-0 small">Calicut to Kochi.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 ps-lg-5">
                    <h5 class="section-tag mb-3">ABOUT</h5>
                    <h2 class="mb-5 text-white fw-bold display-5">What Makes <span class="text-orange">HeadQ</span> Unique</h2>
                    <p class="text-muted fs-5 mb-4" style="line-height: 1.8;">
                        What makes HeadQ unique is the community we’ve worked to cultivate. It’s a design that’s rooted in co-operation. We believe work is about people and ideas.
                    </p>
                    <p class="text-muted fs-5 mb-4" style="line-height: 1.8;">
                        Our Space is inhabited by innovators and game changers who are confident in achieving their goals. Whether you are a startup with small bootstrap budgets, entrepreneur or a corporate intrapreneur, at HeadQ we help our community to expand their horizon. 
                    </p>
                    <div class="d-flex align-items-center mt-5 pt-3 border-top border-white border-opacity-10">
                        <div class="d-flex gap-3 text-orange fs-4 me-4">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <p class="text-white fw-bold mb-0 fs-5">We established our home base in Calicut and we’re expanding to Kochi.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Co-Founders Section -->
    <section class="founders-section py-5 my-5" style="background: radial-gradient(circle at center, rgba(255,107,0,0.05), #070707 70%);">
        <div class="container py-5">
            <div class="text-center mb-5 pb-5">
                <h5 class="section-tag">VISIONARIES</h5>
                <h2 class="display-5 text-white fw-bold mb-0">Meet The <span class="text-orange">Founders</span></h2>
            </div>
            
            <div class="row g-5 justify-content-center">
                <!-- Nisham M.A -->
                <div class="col-lg-3 col-md-6">
                    <div class="founder-card">
                        <div class="founder-img-wrapper">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Nisham M.A" class="founder-img">
                            <div class="founder-socials">
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                        <div class="founder-info">
                            <h4 class="text-white fw-bold mb-1">Nisham M.A</h4>
                            <p class="text-orange fw-medium mb-0 letter-spacing-1">Co-Founder</p>
                        </div>
                    </div>
                </div>
                
                <!-- Najeeb M.A -->
                <div class="col-lg-3 col-md-6">
                    <div class="founder-card mt-lg-5">
                        <div class="founder-img-wrapper">
                            <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="Najeeb M.A" class="founder-img">
                            <div class="founder-socials">
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                        <div class="founder-info">
                            <h4 class="text-white fw-bold mb-1">Najeeb M.A</h4>
                            <p class="text-orange fw-medium mb-0 letter-spacing-1">Co-Founder</p>
                        </div>
                    </div>
                </div>
                
                <!-- Janshar Shan -->
                <div class="col-lg-3 col-md-6">
                    <div class="founder-card">
                        <div class="founder-img-wrapper">
                            <img src="https://randomuser.me/api/portraits/men/68.jpg" alt="Janshar Shan" class="founder-img">
                            <div class="founder-socials">
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                        <div class="founder-info">
                            <h4 class="text-white fw-bold mb-1">Janshar Shan</h4>
                            <p class="text-orange fw-medium mb-0 letter-spacing-1">Co-Founder</p>
                        </div>
                    </div>
                </div>
                
                <!-- Azza F. -->
                <div class="col-lg-3 col-md-6">
                    <div class="founder-card mt-lg-5">
                        <div class="founder-img-wrapper">
                            <!-- Using portrait representing Azza -->
                            <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Azza F." class="founder-img">
                            <div class="founder-socials">
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                        <div class="founder-info">
                            <h4 class="text-white fw-bold mb-1">Azza F.</h4>
                            <p class="text-orange fw-medium mb-0 letter-spacing-1">Co-Founder</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    ${footerSection}

    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;

    fs.writeFileSync(aboutPath, aboutHtml);

    // Add custom css for About page into landing.css if it doesn't already exist
    const currentCss = fs.readFileSync(cssPath, 'utf8');
    if (!currentCss.includes('/* --- About Page Specific --- */')) {
        const extraCss = `\n
/* --- About Page Specific --- */
.about-hero-section {
    position: relative;
    overflow: hidden;
    background: #000;
}
.about-hero-bg {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(to bottom, rgba(5,5,5,0.7), rgba(5,5,5,1)), url('assets/hero_premium_new.png') center/cover;
    filter: blur(2px) brightness(0.6);
    z-index: 1;
}
.scroll-indicator {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    animation: bounce 2s infinite;
}
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
    40% { transform: translateY(-20px) translateX(-50%); }
    60% { transform: translateY(-10px) translateX(-50%); }
}

.story-glass-card {
    position: absolute;
    bottom: -30px;
    right: -30px;
    background: rgba(30, 30, 30, 0.85);
    backdrop-filter: var(--premium-blur);
    border: 1px solid rgba(255,255,255,0.1);
    padding: 25px 35px;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
}

.founder-card {
    text-align: center;
    transition: transform 0.4s ease;
}
.founder-card:hover {
    transform: translateY(-15px);
}
.founder-img-wrapper {
    position: relative;
    width: 220px;
    height: 280px;
    margin: 0 auto 25px;
    border-radius: 30px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.1);
    box-shadow: 0 15px 35px rgba(0,0,0,0.5);
}
.founder-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) contrast(1.1);
    transition: all 0.5s ease;
}
.founder-card:hover .founder-img {
    filter: grayscale(0%) contrast(1);
    transform: scale(1.05);
}
.founder-socials {
    position: absolute;
    bottom: -50px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 15px;
    padding: 15px;
    background: linear-gradient(to top, rgba(255,107,0,0.9), transparent);
    transition: bottom 0.4s ease;
}
.founder-card:hover .founder-socials {
    bottom: 0;
}
.founder-socials a {
    color: white;
    font-size: 1.2rem;
    transition: transform 0.3s ease;
}
.founder-socials a:hover {
    transform: translateY(-3px);
}
.letter-spacing-1 {
    letter-spacing: 1px;
}
`;
        fs.writeFileSync(cssPath, currentCss + extraCss);
    }

    console.log("Successfully generated about.html and updated CSS!");
} catch (e) {
    console.error(e);
}
