import React from 'react';
import { Col as AntCol } from "antd"

const Col = ({ children, ...props }) => <AntCol
  xs={{ span: 23 }}
  sm={{ span: 23 }}
  md={{ span: 21 }}
  lg={{ span: 20 }}
  xl={{ span: 18 }}
  {...props}
>{children}</AntCol>;

export default Col;
