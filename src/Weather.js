import React from "react";
import Search from "./Search";
import Stats from "./Stats";

import "./Weather.css";
import "./Search.css";

export default function Weather() {
  return (
    <div className="Weather">
      <Search defaultCity="London" />
      <Stats />
    </div>
  );
}
