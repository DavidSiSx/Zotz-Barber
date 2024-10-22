import React from "react";
import "./Skeleton.css";

const Skeleton = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton-header">
        <div className="skeleton-logo"></div>
        <div className="skeleton-nav">
          <div className="skeleton-nav-item"></div>
          <div className="skeleton-nav-item"></div>
          <div className="skeleton-nav-item"></div>
        </div>
      </div>

      <div className="skeleton-hero"></div>

      <div className="skeleton-section">
        <div className="skeleton-item"></div>
        <div className="skeleton-item"></div>
        <div className="skeleton-item"></div>
      </div>

      <div className="skeleton-footer">
        <div className="skeleton-footer-text"></div>
        <div className="skeleton-footer-info"></div>
      </div>
    </div>
  );
};

export default Skeleton;
