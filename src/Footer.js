import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <a
          href="https://github.com/britathompson/weather-react"
          target="_blank"
          rel="noreferrer"
          className="git-link"
        >
          Open-source code
        </a>{" "}
        by Brita Thompson
      </footer>
    </div>
  );
}
