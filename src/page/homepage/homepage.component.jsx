import React from "react";

import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";

//functional method so no lifecycle methods and no state
const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
