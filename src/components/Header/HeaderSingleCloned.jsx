"use client";
import headerData from "@/data/HeaderData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useRootContext } from "@/Provider/context";
import useScroll from "@/hooks/useScroll";
import SingleNavItems from "../NavItems/SingleNavItems";

const { singleNavItems, main_logo } = headerData;

const HeaderSingleCloned = () => {
  const [mounted, setMounted] = useState(false);
  const scrollTop = useScroll(130);

  useEffect(() => {
    setMounted(true);
  }, []);
  const { handleToggle } = useRootContext();

  if (!mounted) {
    return null;
  }
  return (
    <header
      className={`main-header sticky-header sticky-header--one-page sticky-header--cloned ${
        scrollTop ? " active " : ""
      }`}
    >
      <Container fluid>
        <div className='main-header__inner'>
          <div className='main-header__logo'>
            <Link href='/'>
              <Image
                src={main_logo}
                alt='Code Enter'
                width={280}
                height={56}
                style={{ width: "auto", height: "56px", objectFit: "contain" }}
                priority
              />
            </Link>
          </div>

          <nav className='main-header__nav main-menu'>
            <ul className='main-menu__list one-page-scroll-menu'>
              {singleNavItems.map((item, index) => (
                <SingleNavItems key={index} item={item} />
              ))}
            </ul>
          </nav>
          <div className='main-header__right'>
            <div
              onClick={handleToggle}
              className='mobile-nav__btn mobile-nav__toggler'
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeaderSingleCloned;
