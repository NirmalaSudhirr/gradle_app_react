import React from "react";

const Header = ({ isDesktop = false }) => {
  // Use rem and vw for better responsiveness
  const titleSize = isDesktop ? "2.8rem" : "2.2rem"; // ~45px / 36px
  const logoSize = isDesktop ? "100px" : "80px"; // bigger than before
  const subtitleSize = isDesktop ? "1.2rem" : "1rem"; // responsive text

  return (
    <header className="w-100">
      {/* Header with logo and title */}
      <div
        className="d-flex align-items-center justify-content-between px-3"
        style={{
          paddingTop: isDesktop ? "1.5rem" : "1rem",
          paddingBottom: "0.5rem",
        }}
      >
        {/* Logo at left */}
        <div className="d-flex align-items-center">
          <img
            src="/images/logo.png"
            alt="GreenLine Logo"
            style={{
              width: logoSize,
              height: logoSize,
              objectFit: "contain",
              marginRight: "12px",
              borderRadius: "8px",
            }}
          />

        </div>

        {/* Title */}
        <h1
          className="fw-bold mb-0 font-inter text-center flex-grow-1"
          style={{
            fontSize: titleSize,
            lineHeight: "1.1",
            color: "#333",
          }}
        >
          Grading App
        </h1>

        {/* Right spacer for balance */}
        <div style={{ width: logoSize }} />
      </div>

      {/* Divider */}
      <div
        className="w-100"
        style={{
          height: "2px",
          backgroundColor: "rgba(0, 0, 0, 0.15)",
          marginTop: isDesktop ? "1.5rem" : "1rem",
        }}
      />
    </header>
  );
};

export default Header;
