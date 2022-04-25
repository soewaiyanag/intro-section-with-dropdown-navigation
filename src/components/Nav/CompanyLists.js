import React from "react";

const companyItems = ["History", "Our Team", "Blog"];

const CompanyLists = () => {
  return (
    <ul className="space-y-4 min-w-max">
      {companyItems.map((companyItem) => {
        return (
          <li key={"key-" + companyItem}>
            <a className="w-full" href="#">
              {companyItem}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default CompanyLists;
