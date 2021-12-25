import React from "react";

const Helmet = ({ children, title }) => {
  document.title = "Electronry - " + title;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>{children}</>;
};

export default Helmet;
