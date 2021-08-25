import styled from "styled-components";

// const something = () => {
//   return `font-weight: 700;`;
// };

export const Button = styled.button`
  width: 200px;
  height: 20px;
  background-color: ${(props) => props.theme.mybackgroudcolor};
  border: 2px solid ${(props) => props.bordercolor || "red"};
  color: ${(props) => props.theme.color || "black"};
`;

//extending styles
export const PrimaryButton = styled(Button)`
  background-color: green;
  color: white;
`;

export const SecondaryButton = styled(Button)`
  background-color: gray;
  color: white;
`;

export const ErrorMessage = styled.div`
  color: red;
`;

// export const Button = styled.button`
//   width: 200px;
//   height: 20px;
//   background-color: cyan;
//   border: 2px solid ${(props) => props.bordercolor || "red"};
//   &:hover {
//     background-color: pink;
//     cursor: pointer;
//   }
//   &.something {
//     font-weight: 800;
//   }

//   & ~ & {
//     //my sublings
//     color: green;
//   }
//   & + & {
//     //Next sibling
//     color: purple;
//   }
// `;
