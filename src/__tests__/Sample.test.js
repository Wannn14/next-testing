import { render, fireEvent, screen } from "@testing-library/react";
import Kom from "./../pages/index";

test("coba dulu", () => {
  render(<Kom />);
  fireEvent.click(screen.getByText("contoh button bootstrap"));
  expect(screen.getByRole("button"));
});

// function Sample() {
//   return <div>isi komponen</div>;
// }

// describe("Belajar Unit Testing", () => {
//   test("render komponen Sample", () => {
//     const { getByText } = render(<Sample />);
//     const textValue = getByText(/isi komponen/);
//     expect(textValue).toBeInTheDocument();
//   });
// });
