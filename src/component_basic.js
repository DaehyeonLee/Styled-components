import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const Box = styled.div`
  //구조는 같고 값이 다를때 props이용해서 값 전달 받기
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
// const BoxTwo = styled.div`
//   background-color: tomato;
//   width: 100px;
//   height: 100px;
// `;
const Text = styled.span`
  color: white;
`;

//기존 스타일컴포넌트에 확장기능을 갖는 새로운 컴포넌트는 함수를 사용해서 컴포넌트를 전부 받아와서 사용
const Circle = styled(Box)`
  border-radius: 50px;
`;

const Component_basic = () => {
  return (
    // without styled-components
    // <div style={{ display: "flex" }}>
    //   <div style={{ backgroundColor: "teal", width: 100, height: 100 }}></div>
    //   <div style={{ backgroundColor: "tomato", width: 100, height: 100 }}></div>
    // </div>

    <Father>
      <Box bgColor="teal" />
      <Text>HElloooooooooo!!</Text>
      <Circle bgColor="tomato " />
    </Father>
  );
};

export default Component_basic;
