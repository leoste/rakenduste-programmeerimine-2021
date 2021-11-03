import { List } from "antd/lib/form/Form";
import { BrowserRouter, Link } from "react-router-dom";
import { Layout } from "antd";

function Header() {
  return (
    <Layout.Header>      
      <Link to="/">Avaleht</Link>
      <Link to="/posts">Änksad Postitused</Link>      
    </Layout.Header>    
  );
}

export default Header
