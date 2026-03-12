:root {
    --primary-gradient: linear-gradient(135deg, #2d5a27 0%, #76b82a 100%);
    --dark-green: #2d5a27;
    --logo-green: #76b82a;
    --cream-bg: #fdfbf4;
    --white: #ffffff;
}

body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    background-color: var(--cream-bg);
    overflow-x: hidden;
}

/* Header & Nav */
header {
    background: var(--white);
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 5%;
}

.logo {
    font-size: 1.6rem;
    font-weight: 800;
    color: var(--dark-green);
}

.logo span { color: var(--logo-green); }

.nav-links { list-style: none; display: flex; gap: 25px; align-items: center; }

.nav-links a { text-decoration: none; color: #333; font-weight: 600; }

.nav-phone { color: var(--logo-green) !important; }

/* Hero Slider */
.hero-slider {
    position: relative;
    height: 75vh;
    background: #000;
}

.slide {
    position: absolute;
    width: 100%;
    height: 100%;
    display: none;
}

.slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
}

/* The "Pop" Animation */
.pop-in {
    animation: popEffect 0.8s cubic-bezier(0.26, 0.53, 0.74, 1.48);
}

@keyframes popEffect {
    0% { transform: scale(1.2); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
}

.hero-text {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    width: 90%;
}

.hero-text h1 { font-size: 3.5rem; margin: 0; text-shadow: 0 4px 10px rgba(0,0,0,0.5); }

/* Quote Section Layering */
.quote-info {
    padding: 0 20px 60px;
    margin-top: -80px;
    position: relative;
    z-index: 10;
}

.quote-card {
    background: var(--white);
    max-width: 850px;
    margin: 0 auto;
    padding: 50px;
    border-radius: 20px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
    text-align: center;
    border-top: 6px solid var(--logo-green);
}

.contact-grid { display: flex; justify-content: center; gap: 50px; margin: 30px 0; }

.phone-link { font-size: 1.6rem; font-weight: 800; color: var(--dark-green); text-decoration: none; display: block; }

.cta-button {
    background: var(--primary-gradient);
    color: white;
    border: none;
    padding: 18px 45px;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.3s;
}

.cta-button:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(118, 184, 42, 0.4); }

/* Services Grid */
.services {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    padding: 80px 10%;
}

.service-card {
    background: white;
    padding: 40px;
    border-radius: 20px;
    text-align: center;
    transition: 0.4s;
}

.service-card:hover { background: var(--primary-gradient); color: white; transform: translateY(-10px); }

.service-card .icon { font-size: 3rem; margin-bottom: 20px; display: block; }

footer { background: #222; color: white; padding: 40px; text-align: center; }
