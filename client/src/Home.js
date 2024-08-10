import React, { useState } from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch('http://localhost:3001/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message. Please try again.');
        }
    };

    return (
        <div>
            {/* Header */}
            <header className="header">
                <div className="header__content">
                    <div className="header__logo-container">
                        <div className="header__logo-img-cont">
                            <img src="images/profile_photo.jpg" alt="Sarthak Boralkar" className="header__logo-img" />
                        </div>
                        <span className="header__logo-sub">Sarthak Boralkar</span>
                    </div>

                    <div className="header__main">
                        <ul className="header__links">
                            <li className="header__link-wrapper">
                                <Link to="/" className="header__link" onClick={() => scrollToSection('home')}> Home </Link>
                            </li>
                            <li className="header__link-wrapper">
                                <Link to="/" className="header__link" onClick={() => scrollToSection('about')}> About </Link>
                            </li>
                            <li className="header__link-wrapper">
                                <Link to="/" className="header__link" onClick={() => scrollToSection('projects')}> Projects </Link>
                            </li>
                            <li className="header__link-wrapper">
                                <Link to="/" className="header__link" onClick={() => scrollToSection('contact')}> Contact </Link>
                            </li>
                        </ul>

                        <div className="header__main-ham-menu-cont" onClick={toggleMenu}>
                            <img
                                src="images/ham-menu.svg"
                                alt="hamburger menu"
                                className={`header__main-ham-menu ${isMenuOpen ? 'd-none' : ''}`}
                            />
                            <img
                                src="images/ham-menu-close.svg"
                                alt="hamburger menu close"
                                className={`header__main-ham-menu-close ${isMenuOpen ? '' : 'd-none'}`}
                            />
                        </div>
                    </div>
                </div>

                <div className={`header__sm-menu ${isMenuOpen ? 'header__sm-menu--active' : ''}`}>
                    <div className="header__sm-menu-content">
                        <ul className="header__sm-menu-links">
                            <li className="header__sm-menu-link" onClick={() => { scrollToSection('home'); setIsMenuOpen(false); }}>
                                <a href="#home">Home</a>
                            </li>
                            <li className="header__sm-menu-link" onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }}>
                                <a href="#about">About</a>
                            </li>
                            <li className="header__sm-menu-link" onClick={() => { scrollToSection('projects'); setIsMenuOpen(false); }}>
                                <a href="#projects">Projects</a>
                            </li>
                            <li className="header__sm-menu-link" onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }}>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            {/* Home content */}
            <section id="home" className="home-hero">
                <div className="home-hero__content">
                    <h1 className="heading-primary">Hey, I'm Sarthak Boralkar</h1>
                    <div className="home-hero__info">
                        <p className="text-primary">
                            A versatile Full-Stack Web Developer and Data Analyst crafting innovative web solutions and
                            extracting actionable insights to drive the success of digital products.
                        </p>
                    </div>
                    <div className="home-hero__cta">
                        <a href="#projects" className="btn btn--bg">Projects</a>
                    </div>
                </div>

                <div className="home-hero__socials">
                    <div className="home-hero__social">
                        <a href="https://www.linkedin.com/in/sarthak-boralkar-70b328231/" className="home-hero__social-icon-link"
                            target="_blank" rel="noreferrer">
                            <img src="images/LinkedIn.png" alt="LinkedIn" className="home-hero__social-icon" />
                        </a>
                    </div>
                    <div className="home-hero__social">
                        <a href="https://github.com/SarthJain37" className="home-hero__social-icon-link" target="_blank" rel="noreferrer">
                            <img src="images/Github.png" alt="Github" className="home-hero__social-icon" />
                        </a>
                    </div>
                    <div className="home-hero__social">
                        <a href="images/Sarthak_Boralkar_Resume.pdf" className="home-hero__social-icon-link" target="_blank" rel="noreferrer">
                            <img src="images/Resume.png" alt="Resume" className="home-hero__social-icon" />
                        </a>
                    </div>
                </div>

                <div className="home-hero__mouse-scroll-cont">
                    <div className="mouse"></div>
                </div>
            </section>

            <section id="about" className="about sec-pad">
                <div className="main-container">
                    <h2 className="heading heading-sec heading-sec__mb-med">
                        <span className="heading-sec__main">About Me</span>
                        <span className="heading-sec__sub">
                            Here you will find more information about me, what I do, and my current skills mostly in terms of
                            programming and technology
                        </span>
                    </h2>
                    <div className="about__content">
                        <div className="about__content-main">
                            <h3 className="about__content-title">Get to know me!</h3>
                            <div className="about__content-details">
                                <p className="about__content-details-para">
                                    I'm a final-year <strong>IT engineering student at SPPU</strong> with a deep passion for
                                    <strong>continuous learning</strong> and <strong>applying technical skills</strong> in
                                    real-world settings. My focus is on leveraging educational knowledge to transition into
                                    practical expertise, particularly in <strong>corporate environments</strong>.
                                </p>
                                <p className="about__content-details-para">
                                    I'm <strong>proactive</strong> and <strong>mature</strong>, with strong
                                    <strong>communication</strong>, <strong>teamwork</strong>, and <strong>problem-solving
                                        abilities</strong>, ready to make a valuable impact in full-time employment
                                    opportunities.
                                </p>
                                <p className="about__content-details-para">
                                    I'm <strong>actively seeking job opportunities</strong> where I can
                                    <strong>contribute</strong>, <strong>learn</strong>, and <strong>grow</strong>. If you have
                                    an opportunity that aligns with my <strong>skills and experience</strong>, don't hesitate to
                                    reach out!
                                </p>
                            </div>
                            <a href="#contact" className="btn btn--med btn--theme dynamicBgClr">Contact</a>
                        </div>
                        <div className="about__content-skills">
                            <h3 className="about__content-title">My Skills</h3>
                            <div className="skills">
                                <div className="skills__skill">HTML</div>
                                <div className="skills__skill">CSS</div>
                                <div className="skills__skill">JavaScript</div>
                                <div className="skills__skill">Django</div>
                                <div className="skills__skill">Python</div>
                                <div className="skills__skill">GIT</div>
                                <div className="skills__skill">GitHub</div>
                                <div className="skills__skill">Wordpress</div>
                                <div className="skills__skill">Responsive Design</div>
                                <div className="skills__skill">Terminal</div>
                                <div className="skills__skill">Visual Studio</div>
                                <div className="skills__skill">Jupyter Notebook</div>
                                <div className="skills__skill">Anaconda</div>
                                <div className="skills__skill">PowerBi</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="projects sec-pad">
                <div className="main-container">
                    <h2 className="heading heading-sec heading-sec__mb-bg">
                        <span className="heading-sec__main">Projects</span>
                        <span className="heading-sec__sub">
                            Here you will find some of the personal and clients projects that I created with each project
                            containing its own case study
                        </span>
                    </h2>

                    <div className="projects__content">
                        <div className="projects__row">
                            <div className="projects__row-img-cont">
                                <img src="images/url_shortener.png" alt="Software Screenshot" className="projects__row-img"
                                    loading="lazy" />
                            </div>
                            <div className="projects__row-content">
                                <h3 className="

projects__row-content-title">URL Shortener</h3>
                                <p className="projects__row-content-desc">
                                    Welcome to the URL Shortener project! This application allows you to shorten long URLs into
                                    concise, easy-to-share links. It's perfect for reducing the length of URLs for social media
                                    posts, emails, and other communications.
                                </p>
                                <Link to="/project-1" className="btn btn--med btn--theme dynamicBgClr">Case Study</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="contact sec-pad dynamicBg">
                <div className="main-container">
                    <h2 className="heading heading-sec heading-sec__mb-med">
                        <span className="heading-sec__main heading-sec__main--lt">Contact</span>
                        <span className="heading-sec__sub heading-sec__sub--lt">
                            Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
                        </span>
                    </h2>
                    <div className="contact__form-container">
                        <form onSubmit={handleSubmit} className="contact__form">
                            <div className="contact__form-field">
                                <label className="contact__form-label" htmlFor="name">Name</label>
                                <input
                                    required
                                    placeholder="Enter Your Name"
                                    type="text"
                                    className="contact__form-input"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="contact__form-field">
                                <label className="contact__form-label" htmlFor="email">Email</label>
                                <input
                                    required
                                    placeholder="Enter Your Email"
                                    type="email"
                                    className="contact__form-input"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="contact__form-field">
                                <label className="contact__form-label" htmlFor="message">Message</label>
                                <textarea
                                    required
                                    cols="30"
                                    rows="10"
                                    className="contact__form-input"
                                    placeholder="Enter Your Message"
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn--theme contact__btn">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="main-footer">
                <div className="main-container">
                    <div className="main-footer__upper">
                        <div className="main-footer__row main-footer__row-1">
                            <h2 className="heading heading-sm main-footer__heading-sm">
                                <span>Social</span>
                            </h2>
                            <div className="main-footer__social-cont">
                                <a target="_blank" rel="noreferrer"
                                    href="https://www.linkedin.com/in/sarthak-boralkar-70b328231/">
                                    <img className="main-footer__icon" src="images/LinkedIn.png" alt="LinkedIn" />
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://github.com/SarthJain37">
                                    <img className="main-footer__icon" src="images/Github.png" alt="Github" />
                                </a>
                            </div>
                        </div>
                        <div className="main-footer__row main-footer__row-2">
                            <h4 className="heading heading-sm text-lt">Sarthak Boralkar</h4>
                            <p className="main-footer__short-desc">
                                A versatile Full-Stack Web Developer and Data Analyst crafting innovative web solutions and
                                extracting actionable insights to drive the success of digital products.
                            </p>
                        </div>
                    </div>

                    <div className="main-footer__lower">
                        &copy; Copyright 2024. Made by
                        <a href="/" rel="noreferrer">Sarthak Boralkar</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;