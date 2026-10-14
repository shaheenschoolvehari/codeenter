'use client'
import React from 'react';
import teamOneData from '@/data/TeamOneData';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';

const { tagLine, title, title2, carouselData } = teamOneData;

const TeamOne = ({ titleTwo }) => {
    // Double the items for seamless continuous infinite marquee loop (FalconSwift style)
    const duplicatedMembers = [...carouselData, ...carouselData];

    return (
        <section className="team-one" id="team">
            <Container>
                <div
                    className={`${titleTwo === "two" ? "sec-title-two" : "sec-title"
                        } text-center`}
                >
                    <h6
                        className={`${titleTwo === "two"
                            ? "sec-title-two__tagline"
                            : "sec-title__tagline"
                            }`}
                    >
                        <span
                            className={`${titleTwo === "two"
                                ? "sec-title-two__tagline__left icofont-rounded-double-left"
                                : "sec-title__tagline__left"
                                }`}
                        ></span>
                        {tagLine}
                        <span
                            className={`${titleTwo === "two"
                                ? "sec-title-two__tagline__right icofont-rounded-double-right"
                                : "sec-title__tagline__right"
                                }`}
                        ></span>
                    </h6>
                    <h3 className='sec-title__title'>{titleTwo === "two" ? title2 : title}</h3>
                </div>
            </Container>

            {/* Continuous Marquee Slider Container */}
            <div className="team-scroll-container">
                <div className="team-track">
                    {
                        duplicatedMembers.map(({ id, image, socials, title, href, designation }, index) =>
                            <div key={`${id}-${index}`} className="team-slide-item">
                                <div className="team-card">
                                    <div className="team-card__image">
                                        <Image src={image} alt={title} style={{ width: "100%", height: "auto" }} />
                                    </div>
                                    <div className="team-card__content">
                                        {/* Future update: Uncomment when team social media links are ready
                                        <div className="team-card__hover">
                                            <div className="team-card__social">
                                                <i className="fa fa-plus"></i>
                                                <div className="team-card__social__list">
                                                    {
                                                        socials.map(({ id, icon, title, link }) => <Link key={id} href={link}>
                                                            <FontAwesomeIcon icon={icon} />
                                                            <span className="sr-only">{title}</span>
                                                        </Link>)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        */}
                                        <h3 className="team-card__title">
                                            <Link href={href}>{title}</Link>
                                        </h3>
                                        <p className="team-card__designation">{designation}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default TeamOne;