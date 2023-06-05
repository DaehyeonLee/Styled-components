import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const animation = keyframes`
0%{
    transform: rotate(0deg);
    border-radius:0px;
}
50%{
    transform: rotate(360deg);
    border-radius:100px;
}
100%{
    transform: rotate(0deg);
    border-radius:0px;
}
`;

const Emoji = styled.span`
  font-size: 36px;
`;
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation} 1s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 56px;
    }
  }
`;
const Component_animation = () => {
  return (
    <Wrapper>
      <Title>hello</Title>
      <Box>
        <Emoji>😋</Emoji>
      </Box>
      <Emoji>🩳</Emoji>
    </Wrapper>
  );
};
export default Component_animation;
