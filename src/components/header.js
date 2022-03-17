import styledComponents from "styled-components";

export const H1 = styledComponents.h1`
font-weight:700;
font-size:2rem;
letter-spacing:1rem;
color:white;
`;
export const Theme = styledComponents.div`

img{
  height:1.5rem;
  cursor:pointer;
}

`;

export const Container = styledComponents.header`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:1rem 0;
`;

const Header = ({ img,changeTheme }) => {

  return (
    <Container>
      <H1>TODO</H1>
      <Theme>
        <img src={img} onClick={changeTheme} />
      </Theme>
    </Container>
  );
};

export default Header;
