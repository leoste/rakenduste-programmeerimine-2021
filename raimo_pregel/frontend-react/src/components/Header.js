import { Link } from "react-router-dom";
import { Layout, Space, Typography } from "antd";

function Header() {
  return (
    <Layout.Header>
      <Space align="start" size="large">
        <Link component={Typography.Link} to="/">Avaleht</Link>      
        <Link component={Typography.Link} to="/posts">Änksad Postitused</Link>
        <Link component={Typography.Link} to="/login">👉 Logi sisse või 😆 "rega" juba täna!!! 👈</Link>
      </Space>
    </Layout.Header>    
  );
}

export default Header
