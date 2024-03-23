import React from "react";
import { render } from "@testing-library/react";
import GiftItem from "../../src/components/GifItem";

describe("GiftItem", () => {
  const id = "1";
  const title = "Title";
  const url = "https://example.com/image.jpg";

  test("renders the gift item component", () => {
    const { container } = render(<GiftItem id={id} title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  // Add more test cases as needed
});
