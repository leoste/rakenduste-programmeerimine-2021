import { Link } from "react-router-dom";
import { Layout, Menu, Space, Typography } from "antd";
import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { logoutUser } from '../store/actions';

function Header() {
  const [current, setCurrent] = useState(window.location.pathname.replace('/', ''))
  const [state, dispatch] = useContext(Context)

  const handleLogout = () => {
    dispatch(logoutUser)
  }

  return (
    <Layout.Header>
      <Menu theme="dark" mode="horizontal" selectedKeys={[current]}>
        <Menu.Item key={''} onClick={e => setCurrent(e.key)}>
          <Link component={Typography.Link} to="/">Avaleht</Link>      
        </Menu.Item>
        <Menu.Item key={'titles'} onClick={e => setCurrent(e.key)}>
          <Link component={Typography.Link} to="/titles">Änksad Titleitused</Link>
        </Menu.Item>
        {state.auth.token && (
          <Menu.Item key={'logout'} onClick={e => setCurrent(e.key)}>
            <Link to="#" onClick={handleLogout}>Logout</Link>
          </Menu.Item>
        )}
        {!state.auth.token && (
          <>
          <Menu.Item key={'login'} onClick={e => setCurrent(e.key)}>
            <Link component={Typography.Link} to="/login">👉 Logi sisse või 😆</Link>
          </Menu.Item>
          <Menu.Item key={'register'} onClick={e => setCurrent(e.key)}>
          <Link component={Typography.Link} to="/register">"rega" juba täna!!! 👈</Link>
          </Menu.Item>
          </>
        )}
      </Menu>
    </Layout.Header>    
  );
}

export default Header
