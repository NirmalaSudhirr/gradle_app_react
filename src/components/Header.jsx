import React from "react";

// use public folder image (no bundler import)
const craftsmanSrc = (process.env.PUBLIC_URL || '') + '/images/craftsman_logp.jpeg';

const Header = ({ isDesktop = false }) => {
  // Use rem and vw for better responsiveness
  const titleSize = isDesktop ? "2.8rem" : "2.2rem"; // ~45px / 36px
  const logoSize = isDesktop ? "100px" : "80px"; // left logo
  const craftsmanSize = logoSize; // match left logo size
  const craftsmanFallback =
    'data:image/svg+xml;charset=utf-8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${parseInt(craftsmanSize)}" height="${parseInt(craftsmanSize)}"><rect width="100%" height="100%" fill="#f8f9fa"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#6c757d" font-size="12">Craftsman</text></svg>`
    );

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
          Grading Application
        </h1>

        {/* Right craftsman logo (responsive) */}
        <div className="d-flex align-items-center">
          <img
            src={craftsmanSrc}
            alt="Craftsman Logo"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = craftsmanFallback;
            }}
            style={{
              width: craftsmanSize,
              height: craftsmanSize,
              objectFit: "contain",
              marginLeft: "12px",
              borderRadius: "8px",
            }}
          />
        </div>
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
