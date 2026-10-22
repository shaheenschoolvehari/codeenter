'use client'
import headerData from "@/data/HeaderData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "../NavItems/NavItems";
import { useRootContext } from "@/Provider/context";
import useScrollUp from "@/hooks/useScrollUp";

const { navItems, logo_light } = headerData;
const HeaderInnerCloned = () => {
  const scrollToTop = useScrollUp(500);
  const { toggleSearch, handleToggle, toggleSidebar } = useRootContext();
  return (
    <header className={`main-header-inner sticky-header sticky-header--normal sticky-header--cloned  ${scrollToTop ? " active" : ""}`}>
      <div className='container'>
        <div className='main-header-inner__inner'>
          <div className='main-header-inner__logo'>
            <Link href='/'>
              <Image
                src={logo_light}
                alt='Code Enter'
                width={300}
                height={62}
                style={{ width: "auto", height: "62px", objectFit: "contain" }}
              />
            </Link>
          </div>

          <nav className='main-header-inner__nav main-menu'>
            <ul className='main-menu__list'>
              {navItems.map((item) => (
                <NavItems key={item.id} item={item} />
              ))}
              <li className='dot'></li>
            </ul>
          </nav>
          <div className='main-header-inner__right'>
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
      </div>
    </header>
  );
};

export default HeaderInnerCloned;
