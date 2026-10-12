
'use client'
import headerData from '@/data/HeaderData';
import Link from 'next/link';
import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { icons } = headerData

const TopBar = () => {
    return (
        <div className="topbar-one" id="home">
            <Container fluid>
                <div className="topbar-one__inner">
                    <ul className="list-unstyled topbar-one__info">
                        {icons.map(({ id, icon, content, subHref, href }) => (
                            <li key={id} className="topbar-one__info__item">

                                <i className="topbar-one__info__icon">

                                    <FontAwesomeIcon icon={icon} />
                                </i>

                                <Link href={subHref ? `${subHref}:${content}` : href}>{content}</Link>
                            </li>
                        ))}

                    </ul>
                </div>
            </Container >
        </div >
    );
};

export default TopBar;