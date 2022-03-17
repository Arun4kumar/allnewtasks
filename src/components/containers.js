import styledComponents from "styled-components";

const Main = styledComponents.section`
  display:flex;
  justify-content:center;
  min-height:100vh;
  background-image:url('${({ backgroundImage }) => backgroundImage}');
  background-repeat:no-repeat;
  background-size:100%;
  background-color:${({ backgroundColor }) => backgroundColor};
  @media screen and (min-width:500px) {
    background-image:url('${({ backgroundImageDesktop }) =>
    backgroundImageDesktop}');
  }
`;
export const Container = styledComponents.section`
  display:flex;
  flex-direction:column;
  padding:1rem;
  justify-content:center;
  gap : 1rem;
  width:100%;
  max-width:40rem;
`;
export const FilterContainer = styledComponents.section`
display:flex;
justify-content:center;
gap:1rem;
font-weight:700;
color:${({ color }) => color};
&>h1:hover{
    color:${({ colorHover }) => colorHover};
    cursor:pointer;
}
h1:nth-of-type(${({ child }) => (child + 1)}) {
  color:${({ active }) => (active)}
}
`;

export const ListContainer = styledComponents.section`
padding:1rem;
display:flex;
flex-direction:column;
gap:2px;
background-color:${({ backgroundColor }) => backgroundColor};
border-radius:5px;

`;

export const ListContainerCont = styledComponents.section`

display:flex;
flex-direction:column;

background-color:${({ backgroundColor }) => backgroundColor};
border-radius:5px;

`;

export const ItemDes = styledComponents.footer`

padding:1rem;
display:flex;
color:${({ color }) => color};
justify-content:space-between;
&>h1:hover{
    color:${({ hoverColor }) => hoverColor};
    cursor:pointer;
}
`;

const Background = ({
  children,
  backgroundColor,
  backgroundImage,
  backgroundImageDesktop,
}) => {
  return (

    <Main
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      backgroundImageDesktop={backgroundImageDesktop}
    >
      <Container>{children}</Container>
    </Main>

  );
};

export default Background;
