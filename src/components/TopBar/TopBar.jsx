
"use client";
import React from "react";
import Link from "next/link";
import headerData from "@/data/HeaderData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { icons } = headerData;

const tickerItems = [
  {
    id: "welcome",
    type: "welcome",
  },
  ...icons.map((item) => ({
    id: `contact-${item.id}`,
    type: "link",
    icon: item.icon,
    text: item.content,
    href: item.subHref ? `${item.subHref}:${item.content}` : item.href,
    target: item.href && item.href.startsWith("http") ? "_blank" : undefined,
  })),
];

const renderGroup = (keyPrefix) => (
  <div key={keyPrefix} className="topbar-marquee__group">
    {tickerItems.map((item, idx) => (
      <div key={`${keyPrefix}-${item.id}-${idx}`} className="topbar-marquee__item">
        {item.type === "welcome" ? (
          <span className="topbar-marquee__welcome">
            Welcome to Code Enter digital innovator
          </span>
        ) : (
          <Link
            href={item.href || "#"}
            target={item.target}
            rel={item.target ? "noopener noreferrer" : undefined}
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="topbar-marquee__icon"
            />
            <span>{item.text}</span>
          </Link>
        )}
      </div>
    ))}
  </div>
);

const TopBar = () => {
  return (
    <div className="topbar-one" id="home">
      <div className="topbar-marquee">
        <div className="topbar-marquee__track">
          {renderGroup("grp-1")}
          {renderGroup("grp-2")}
          {renderGroup("grp-3")}
          {renderGroup("grp-4")}
        </div>
      </div>
    </div>
  );
};

export default TopBar;