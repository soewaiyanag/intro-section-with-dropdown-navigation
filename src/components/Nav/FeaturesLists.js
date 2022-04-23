import React from "react";
import todoIcon from "@images/icon-todo.svg";
import calendarIcon from "@images/icon-calendar.svg";
import remindersIcon from "@images/icon-reminders.svg";
import planningIcon from "@images/icon-planning.svg";

const featuresItems = [
  {
    name: "Todo List",
    icon: todoIcon,
  },
  {
    name: "Calendar",
    icon: calendarIcon,
  },
  {
    name: "Reminders",
    icon: remindersIcon,
  },
  {
    name: "Planning",
    icon: planningIcon,
  },
];

const FeatureList = ({ name, icon }) => (
  <li className="items-center grid grid-cols-[1.2rem_1fr]">
    <img className="justify-self-center" src={icon} alt="icon" />
    <a className="ml-3" href="#">
      {name}
    </a>
  </li>
);

const FeaturesLists = () => {
  return (
    <ul className="space-y-4">
      {featuresItems.map((featuresItem) => {
        return (
          <FeatureList
            key={"key-" + featuresItem.name}
            name={featuresItem.name}
            icon={featuresItem.icon}
          />
        );
      })}
    </ul>
  );
};

export default FeaturesLists;
