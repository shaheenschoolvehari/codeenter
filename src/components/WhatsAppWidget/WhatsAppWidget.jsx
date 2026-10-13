"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppWidget = () => {
  const [hovered, setHovered] = useState(false);
  const phoneNumber = "923171114440";
  const defaultMessage = encodeURIComponent(
    "Hello Code Enter, I would like to inquire about your services."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div
      style={{
        position: "fixed",
        right: "24px",
        bottom: "24px",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {/* Tooltip on hover */}
      <span
        style={{
          background: "#111827",
          color: "#fff",
          fontSize: "13px",
          fontWeight: "500",
          padding: "6px 12px",
          borderRadius: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          whiteSpace: "nowrap",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(10px)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
          pointerEvents: "none",
        }}
      >
        Chat with us on WhatsApp
      </span>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Chat with Code Enter on WhatsApp'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: "56px",
          height: "56px",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          boxShadow: hovered
            ? "0 6px 24px rgba(37, 211, 102, 0.75)"
            : "0 4px 16px rgba(37, 211, 102, 0.45)",
          transform: hovered ? "scale(1.1)" : "scale(1)",
          transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        <FontAwesomeIcon
          icon={faWhatsapp}
          style={{ fontSize: "32px", width: "32px", height: "32px" }}
        />
      </a>
    </div>
  );
};

export default WhatsAppWidget;
