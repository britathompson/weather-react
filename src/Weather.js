import React from "react";
import Search from "./Search";
import Current from "./Current";
import Stats from "./Stats";

import "./Weather.css";
import "./Search.css";
import "./Current.css";

export default function Weather() {
  return (
    <div className="Weather">
      <Search />
      <Current />
      <Stats />
    </div>
  );
}
