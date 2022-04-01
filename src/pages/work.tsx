import React from "react";
import styled from "styled-components";
// import { useRouteData } from "react-static";

// const Desc = styled.div`
//   margin: 0;
//   padding: 15px 0 25px 0;
//   line-height: 22px;
//   font-weight: 200;
//   color: #777777;
//   font-size: 13px;
//   text-align: center;
// `;

const HomePage = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

export default () => {
  // const res = useRouteData();
  // const data: any = res.data;
  // console.log(data);
  return <HomePage></HomePage>;
};
