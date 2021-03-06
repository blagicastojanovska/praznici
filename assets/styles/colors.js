import { createGlobalStyle } from "styled-components";

export const colors = {
  white: "#FFF",
  whiteShade: "#FCF9F9",
  lightgrey: "#E4EBED",
  grey: "#848484",
  pink: "#EC6963",
  lightPink: "#FEECEC",
  pinkHover: "#FED2D2",
  pinkActive: "#FEACAC",
  yellow: "#F7C600",
  extraDarkBlue: "#2A3D3D",
  darkBlue: "#304848",
  blue: "#335E5D",
  greenYellowish: "#AFAF54",
  lightBlue: "#84C5B5",
  overlay: "RGBA(42, 61, 61, 0.3)",
};

export default createGlobalStyle`
  ::selection { background-color: rgba(236, 105, 99, .3); }

  body {
    color: ${colors.extraDarkBlue};
  }
`;
