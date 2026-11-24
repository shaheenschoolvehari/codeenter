'use client'
import contactOneData from '@/data/ContactOneData';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useEffect, useState, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
const { infoIcon,
    infoTitle,
    image,
    imageRtl,
    bg,
    texts,
    tagLine,
    imageTwo,
    title,
    text } = contactOneData;
const ContactOne = ({ rtl }) => {

    const form = useRef(null);
    const [mounted, setMounted] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(form.current);

        try {
            const response = await fetch('/contact.php', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            if (response.ok && data.status === 'success') {
                toast.success('Email sent successfully!');
                if (form.current) form.current.reset();
            } else {
                toast.error(data.message || 'Failed to send email.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Failed to send email.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="contact-one" id="contact">
            <Container >
                <Row>
                    <Col lg={8} >
                        <div className="contact-one__info wow fadeInLeft" data-aos='fade-right' data-aos-delay="100">
                            <div className="contact-one__info__icon"><span className={infoIcon}></span></div>
                            <h3 className="contact-one__info__title" dangerouslySetInnerHTML={{ __html: infoTitle }}></h3>
                            <p className="contact-one__info__text">
                                {
                                    texts.map(({ id, title, subHref }) => <Link key={id} href={`${subHref}:${title}`}>
                                        {title}
                                    </Link>)
                                }
                            </p>
                            <p style={{ marginTop: '10px', color: '#fff', fontSize: '16px' }}>
                                <i className="fa fa-map-marker-alt" style={{ marginRight: '8px', color: 'var(--tolak-base, #3d72fc)' }}></i>
                                M-88 Sadiq trade center Gulberg Lahore
                            </p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="contact-one__image wow fadeInRight" data-aos='fade-left' data-aos-delay="200">
                            <Image src={rtl ? imageRtl : image} alt="Code Enter" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="contact-one__container wow fadeInUp" data-aos='fade-up' data-aos-delay="100">
                <div className="contact-one__wrapper" style={{ backgroundImage: `url(${bg.src})` }}>
                    <Row >
                        <Col lg={6} className="col-lg-6">
                            <div className="contact-one__image-two">
                                <Image src={imageTwo} alt="Code Enter" />
                            </div>
                        </Col>
                        <Col lg={6} className="col-lg-6">
                            <div className="contact-one__content">
                                <div className="sec-title text-left">
                                    <h6 className="sec-title__tagline"><span className="sec-title__tagline__left"></span>{tagLine}<span className="sec-title__tagline__right"></span></h6>
                                    <h3 className="sec-title__title">{title}</h3>
                                </div>
                                <p className="contact-one__content__text">
                                    {
                                        text.split("\n").map((t, i) => <Fragment key={i}>{t} <br /></Fragment>)
                                    }

                                </p>
                                <form onSubmit={handleSubmit} ref={form} className="contact-one__form contact-form-validated form-one">
                                    <div className="form-one__group">
                                        <div className="form-one__control">
                                            <input type="text" name="from_name" placeholder="Your Name" required />
                                        </div>
                                        <div className="form-one__control">
                                            <input type="email" name="email_id" placeholder="Email address" required />
                                        </div>
                                        <div className="form-one__control form-one__control--full">
                                            <textarea name="message" placeholder="Message" required></textarea>
                                        </div>
                                        <div className="form-one__control form-one__control--full">
                                            <button type="submit" className="tolak-btn" disabled={isSubmitting}><b>{isSubmitting ? 'Sending...' : 'Send Request'}</b><span></span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section >
    );
};

export default ContactOne;