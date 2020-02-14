import React from "react";
import { shallow } from "enzyme";
import Weather from "./app_components/weather_component";

describe("<Weather />", () => {
  it("renders app page", () => {
    const div = shallow(<Weather />);
    expect(div.find("div.container").length).toEqual(1);
  });

  it("it renders a card div", () => {
    const card = shallow(<Weather />);
    expect(card.find("div.cards").length).toEqual(1);
  });
});
