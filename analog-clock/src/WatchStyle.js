import styled from "styled-components";



export const WatchContainer = styled.svg`
  width: 100px;
  height: 100px;
`;

export const Circle = styled.circle`
  fill: #f2f2f2;
  stroke: #333;
  
`;

export const Line = styled.line`
  stroke: ${(props) => (props.color ? props.color : "#333")};
  stroke-width: 2;
`;
