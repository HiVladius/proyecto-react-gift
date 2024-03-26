import React from "react";
import { render, screen } from "@testing-library/react";
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

  test("debe de mostrar la imagen con el URL y el alt de los props", () => {
    const { getByAltText } = render(
      <GiftItem id={id} title={title} url={url} />
    );
    const img = getByAltText(title);
    // screen.debug();

    // expect(screen.getByRole('img').src).toBe(url);
    // expect(screen.getByRole('img').alt).toBe(title)

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("debe de monstar el titulo en el componente", () => {
    render(<GiftItem id={id} title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });

  test('debe de tener la clase card', () =>{
    const { container } = render(<GiftItem id={id} title={title} url={url} />);
    const div = container.querySelector('div');
    expect(div.classList.contains('card')).toBe(true);
  })
});
