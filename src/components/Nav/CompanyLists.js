import React from "react";

const companyItems = ["History", "Our Team", "Blog"];

const CompanyLists = () => {
  return (
    <ul className="space-y-4">
      {companyItems.map((companyItem) => {
        return <li>{companyItem}</li>;
      })}
    </ul>
  );
};

export default CompanyLists;
