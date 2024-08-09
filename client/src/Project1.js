import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Project1() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <header className="header">
                <div className="header__content">
                    <div className="header__logo-container">
                        <div className="header__logo-img-cont">
                            <img src="/images/profile_photo.jpg" alt="Sarthak Boralkar" className="header__logo-img" />
                        </div>
                        <span className="header__logo-sub">Sarthak Boralkar</span>
                    </div>
                    <div className="header__main">
                        <ul className="header__links">
                            <li className="header__link-wrapper">
                                <Link to="/" className="header__link"> Home </Link>
                            </li>
                            <li className="header__link-wrapper">
                                <Link to="/#about" className="header__link"> About </Link>
                            </li>
                            <li className="header__link-wrapper">
                                <Link to="/#projects" className="header__link"> Projects </Link>
                            </li>
                            <li className="header__link-wrapper">
                                <Link to="/#contact" className="header__link"> Contact </Link>
                            </li>
                        </ul>
                        <div className="header__main-ham-menu-cont" onClick={toggleMenu}>
                            <img
                                src="/images/ham-menu.svg"
                                alt="hamburger menu"
                                className={`header__main-ham-menu ${isMenuOpen ? 'd-none' : ''}`}
                            />
                            <img
                                src="/images/ham-menu-close.svg"
                                alt="hamburger menu close"
                                className={`header__main-ham-menu-close ${isMenuOpen ? '' : 'd-none'}`}
                            />
                        </div>
                    </div>
                </div>
                <div className={`header__sm-menu ${isMenuOpen ? 'header__sm-menu--active' : ''}`}>
                    <div className="header__sm-menu-content">
                        <ul className="header__sm-menu-links">
                            <li className="header__sm-menu-link" onClick={() => setIsMenuOpen(false)}>
                                <Link to="/"> Home </Link>
                            </li>
                            <li className="header__sm-menu-link" onClick={() => setIsMenuOpen(false)}>
                                <Link to="/#about"> About </Link>
                            </li>
                            <li className="header__sm-menu-link" onClick={() => setIsMenuOpen(false)}>
                                <Link to="/#projects"> Projects </Link>
                            </li>
                            <li className="header__sm-menu-link" onClick={() => setIsMenuOpen(false)}>
                                <Link to="/#contact"> Contact </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            <section className="project-cs-hero">
                <div className="project-cs-hero__content">
                    <h1 className="heading-primary">URL Shortener</h1>
                    <div className="project-cs-hero__info">
                        <p className="text-primary">
                            This page provides a detailed case study of the Url-Shortener Open-Source Project, including the Project
                            Overview, Tools Used, and Live Links to the official product.
                        </p>
                    </div>
                    <div className="project-cs-hero__cta">
                        <a href="https://github.com/SarthJain37/Url-Shortener" className="btn btn--bg" target="_blank" rel="noopener noreferrer">Live Link</a>
                    </div>
                </div>
            </section>

            <section className="project-details">
                <div className="main-container">
                    <div className="project-details__content">
                        <div className="project-details__showcase-img-cont">
                            <img src="/images/url_shortener.png" alt="Project Image" className="project-details__showcase-img" />
                        </div>
                        <div className="project-details__content-main">
                            <div className="project-details__desc">
                                <h3 className="project-details__content-title">Project Overview</h3>
                                <p className="project-details__desc-para">
                                    The Url-Shortener project is an Open-Source initiative that provides a simple and efficient solution for
                                    creating shortened URLs. I created this project to help developers easily implement URL shortening
                                    functionality in their applications without having to build it from scratch.
                                </p>
                                <p className="project-details__desc-para">
                                    Since its inception, the Url-Shortener project has gained attention for its practicality and ease of use.
                                    The project repository has been visited and starred by numerous developers on GitHub, reflecting its value
                                    in the developer community.
                                </p>
                                <p className="project-details__desc-para">
                                    Url-Shortener allows users to generate short, easy-to-share links from long URLs. This is particularly
                                    useful for social media, marketing campaigns, or any scenario where space is limited, and user experience is
                                    critical. The project supports custom aliases, analytics tracking, and a simple API for integration into
                                    other applications.
                                </p>
                                <p className="project-details__desc-para">
                                    The project has been well-received and is being utilized by developers and organizations worldwide, helping
                                    them streamline their workflows and improve user engagement. It's rewarding to see how this project is
                                    making a difference in the way people share and manage URLs.
                                </p>
                                <p className="project-details__desc-para">
                                    Feel free to explore the project by visiting the Project Link
                                </p>
                            </div>
                            <div className="project-details__tools-used">
                                <h3 className="project-details__content-title">Tools Used</h3>
                                <div className="skills">
                                    <div className="skills__skill">HTML</div>
                                    <div className="skills__skill">CSS</div>
                                    <div className="skills__skill">JavaScript</div>
                                    <div className="skills__skill">Bootstrap</div>
                                    <div className="skills__skill">Python</div>
                                    <div className="skills__skill">Django</div>
                                    <div className="skills__skill">GIT</div>
                                    <div className="skills__skill">Github</div>
                                </div>
                            </div>
                            <div className="project-details__links">
                                <h3 className="project-details__content-title">See Live</h3>
                                <a href="https://github.com/SarthJain37/Url-Shortener" className="btn btn--med btn--theme project-details__links-btn" target="_blank" rel="noopener noreferrer">Live Link</a>
                                <Link to="/" className="btn btn--med btn--theme-inv project-details__links-btn">Go Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                        <a rel="noreferrer" target="_blank" href="#">Sarthak Boralkar</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Project1;