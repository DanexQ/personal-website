import React from "react";

const MobileMenu = ({
  linksElements,
}: {
  linksElements: React.ReactNode[];
}) => {
  return <ul className="flex-col sm:hidden">{linksElements}</ul>;
};

export default MobileMenu;
