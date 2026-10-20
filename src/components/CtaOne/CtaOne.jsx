import ctaOneData from '@/data/CtaOneData';
import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const {
    shapeLeft,
    shapeLeftRtl,
    shape,
    shapeRtl,
    image,
    icon,
    title,
    text } = ctaOneData

const CtaOne = ({ rtl, page }) => {


    return (
        <section className={`${page ? "cta-one--reverse" : "cta-one"}`}>
            <div className="cta-one__bg">
                {
                    page ? null : <div className="cta-one__bg__shape-left" style={{ backgroundImage: `url(${rtl ? shapeLeftRtl.src : shapeLeft.src})` }}></div>

                }
                <div className="cta-one__bg__shape" style={{ backgroundImage: `url(${rtl ? shapeRtl.src : page ? shapeRtl.src : shape.src})` }}></div>
            </div>
            <Container >
                <Row className={`d-flex align-items-center ${page ? "flex-row-reverse" : ""}`}>
                    <Col lg={7} className={`wow ${page ? "fadeInRight" : "fadeInLeft"} `} data-aos={`${page ? "fade-left" : "fade-right"} `} data-aos-delay="100">
                        <div className="cta-one__image">
                            <Image src={image} alt="Code Enter" />
                        </div>
                    </Col>
                    <Col lg={5} className=" wow fadeInUp" data-aos="fade-up" data-aos-delay="100">
                        <div className="cta-one__content">
                            <div className="cta-one__box">
                                <div className="cta-one__box__icon"><span className={icon}></span></div>
                                <h3 className="cta-one__box__title">{title}</h3>
                                <p className="cta-one__box__text">{text}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CtaOne;