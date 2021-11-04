import { Link } from "react-router-dom";
import { Layout, Space, Typography } from "antd";
import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";

function Header() {
  const [state, dispatch] = useContext(Context);

  return (
    <Layout.Header>
      <Space align="start" size="large">
        <Link component={Typography.Link} to="/">Avaleht</Link>      
        <Link component={Typography.Link} to="/posts">Änksad Postitused</Link>
        <Link component={Typography.Link} to="/login">👉 Logi sisse või 😆 "rega" juba täna!!! 👈</Link>
        <Typography.Paragraph type="warning">{state.auth.data !== undefined ? state.auth.data.user + "is logged in" : "noone is logged in"}</Typography.Paragraph>
      </Space>
    </Layout.Header>    
  );
}

export default Header
