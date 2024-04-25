import React from "react";
// import ReactDOM from "react-dom/client";
// import profile from "./CyberBoy.jpg";
import profile from "./solo profile.jpg";
// import "./index.css";
// import email from "../assets/email.svg";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

export default function Navbar() {
  const linkedinProfileUrl =
    "https://www.linkedin.com/in/venkatesh-suravarapu-5b0852251/";
  const githubProfileUrl = "https://github.com/venkatesh2100";
  const twitterProfileUrl = "https://twitter.com/venky_officials";
  const instagarmProfileurl = "https://www.instagram.com/venky_official_insta/";
  const discordProfileUrl = "https://discordapp.com/users/633496869527617536";
  const youtubeProfileUrl = "https://www.youtube.com/channel/UCUOlyleseG8BgZF-nlPWz7w";

  return (
    <div className="App-NavBar">
      <img src={profile} />
      <div>
        <h1>Venkatesh Suravarapu</h1>
        <p>Fullstack Developer</p>
        <p>India</p>
        <div className="App-links">
          <a
            href="mailto:thisisvenky.ynm@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="Mail">Email</button>
          </a>
          <a
            href={linkedinProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="Link">LinkedIn</button>
          </a>
        </div>
        <div className="App-sublinks">
          <a href={twitterProfileUrl} target="_blank" rel="noopener noreferrer">
            <button className="twitter">Twitter</button>
          </a>
          <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
            <button className="github">Github</button>
          </a>
          <a
            href={instagarmProfileurl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="insta">Instagram</button>
          </a>
          <a
            href={youtubeProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="node">Youtube</button>
          </a>
          <a href={discordProfileUrl} target="_blank" rel="noopener noreferrer">
            <button className="cord">Discord</button>
          </a>
        </div>
      </div>
    </div>
  );
}
