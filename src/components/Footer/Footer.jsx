import footerData from '@/data/FooterData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const { logo, footerCubesBg, shape, widgetInfo, widgetSocial, footerAbout, services, quickLinks, bottomLinks } = footerData;

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="main-footer background-black">
            <div className="main-footer__bg background-black" style={{ backgroundImage: `url(${footerCubesBg.src})` }}></div>

            {/* Animated Blue Circle & Radar Shapes matching Screenshot 2 */}
            <div className="main-footer__shapes-wrap" aria-hidden="true">
                <div className="main-footer__radar-circle">
                    <div className="radar-ring radar-ring--outer"></div>
                    <div className="radar-ring radar-ring--middle"></div>
                    <div className="radar-ring radar-ring--inner" style={{ backgroundImage: `url(${shape.src})` }}></div>
                    <div className="radar-glow"></div>
                </div>

                {/* Top Bullseye circle matching Screenshot 2 */}
                <div className="main-footer__bullseye">
                    <span className="bullseye-ring"></span>
                    <span className="bullseye-dot"></span>
                </div>

                <div className="main-footer__floating-dot"></div>
                <div className="main-footer__floating-ring"></div>
            </div>

            <Container>
                <Row >
                    <Col md={6} lg={4} >
                        <div className="footer-widget footer-widget--about">
                            <div className="footer-widget--about__dot-accent">
                                <span className="dot-accent__ring"></span>
                                <span className="dot-accent__dot"></span>
                            </div>
                            <Link href="/" className="footer-widget__logo">
                                <Image src={logo} width={210} height={48} style={{ width: "auto", height: "48px", objectFit: "contain" }} alt="Code Enter" />
                            </Link>
                            <ul className="footer-widget__info">
                                <li><span className={widgetInfo.timeIcon}></span>{
                                    widgetInfo.time.split("\n").map((t, i) => <Fragment key={i}> {t} <br /></Fragment>)

                                }</li>
                                <li><span className={widgetInfo.locationIcon}></span>{widgetInfo.location}</li>
                                <li><span className={widgetInfo.telIcon}></ span><Link href={`${widgetInfo.subHref}:${widgetInfo.tel}`}>{widgetInfo.tel}</Link></li>
                                <li><span className={widgetInfo.emailIcon || "icofont-envelope"}></span><a href={`mailto:${widgetInfo.email}`}>{widgetInfo.email}</a></li>
                            </ul>
                            {/* Future update: Uncomment when company social media profiles are active
                            <div className="footer-widget__social">
                                {
                                    widgetSocial.map(({ id, href, icon, title }) =>
                                        <Link href={href} key={id}>
                                            <FontAwesomeIcon icon={icon} />
                                            <span className="sr-only">{title}</span>
                                        </Link>)
                                }

                            </div>
                            */}
                            <div className="footer-widget__image">
                                <Image src={footerAbout} alt="Code Enter" />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <div className="footer-widget footer-widget--links">
                            <h2 className="footer-widget__title">Our Services</h2>
                            <ul className="list-unstyled footer-widget__links">
                                {services.map(({ id, title, href }) => (
                                    <li key={id}>
                                        <Link href={href}>{title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <div className="footer-widget footer-widget--links footer-widget--last">
                            <h2 className="footer-widget__title">Quick Links</h2>
                            <ul className="list-unstyled footer-widget__links">
                                {quickLinks.map(({ id, title, href }) => (
                                    <li key={id}>
                                        <Link href={href}>{title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="main-footer__bottom">
                <Container className="container">
                    <Row >
                        <Col md={6} >
                            <p className="main-footer__copyright">
                                &copy; Copyright <span className="dynamic-year">{year}</span> by Code Enter.
                            </p>
                        </Col>
                        <Col md={6} >
                            <ul className="list-unstyled main-footer__bottom__list">
                                {bottomLinks.map(({ id, title, href }) => (
                                    <li key={id}>
                                        <Link href={href}>{title}</Link>
                                    </li>
                                ))}


                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer >
    );
};

export default Footer;