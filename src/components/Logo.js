import styled from "styled-components";
import logo from "../assets/logo-tow.png";

const Logo = () => {
  return (
    <Wrapper>
      <img src={logo} alt="logo" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center; /* Align the logo vertically in the center */
  padding: 0 20px; /* Add some padding to the logo for spacing */

  img {
    max-width: 80%; /* Make sure the image doesn't exceed the width of its container */
    height: auto; /* Maintain the aspect ratio of the image */
  }
`;

export default Logo;
