import headerData from '@/data/HeaderData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container } from 'react-bootstrap';

const { topbarFiveData } = headerData

const TopbarFive = () => {
    const { flag, infoHref, infoIcon, infoSubHref, infoTel, infoText, languages } = topbarFiveData
    return (
        <div className="topbar-five" id="home">
            <Container >
                <div className="topbar-five__inner">
                    <div className="topbar-five__info">
                        <div className="topbar-five__info__icon"><i className={infoIcon}></i></div>
                        {infoText}: <Link href={`${infoSubHref}:${infoHref}`}>{infoTel}</Link>
                    </div>
                    <div className="topbar-five__right">
                        <div className="topbar-five__language">
                            <Link href="#"><Image src={flag} alt="Code Enter" />English</Link>
                            <div className="topbar-five__language__dropdown">
                                {
                                    languages.map(({ id, flag, language }) => <Link key={id} href="#"><Image src={flag} alt="Code Enter" />{language}</Link>)
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TopbarFive;