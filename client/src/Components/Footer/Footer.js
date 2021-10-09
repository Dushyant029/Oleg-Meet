import React from "react";
import "./Footer.css";
import heartIcon from "../../assets/heart.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const Footer = () => {
  return (
    <div className="footer">
      <p>
        Made with <img src={heartIcon} alt="heart"></img> by K. Dushyant
      </p>{" "}
      <div className="icons">
        <a href="https://www.linkedin.com/in/k-dushyant-reddy-060234165/" className="linkIcon">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/Dushyant029" className="githubIcon">
          <GitHubIcon />
        </a>
        
      </div>
    </div>
  );
};
export default Footer;
