
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Titles from "./pages/Titles";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Layout, Space, Typography } from "antd";
import 'antd/dist/antd.css';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Header></Header>
        <Layout>
          <Layout.Sider>
            <Typography.Title type="danger" level={3}>Daily Q&A</Typography.Title>
            <Typography.Paragraph type="warning">my idol is credited as once putting into song form the life advice, never to say never. What does this mean?</Typography.Paragraph>
            <Typography.Paragraph type="success">That is a great question. What it essentially means is that, when you get the chance, urge, possibility to say "never", you choose not to do it.</Typography.Paragraph>
            <Typography.Title type="danger" level={3}>Daily Motto</Typography.Title>
            <Typography.Paragraph type="success">😁😀✅✅🏁🏁🏁🏁🏁</Typography.Paragraph>
          </Layout.Sider>
          <Layout.Content>
            <Switch>
              <Route exact path="/" />
              <Route exact path="/titles" component={Titles} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </Layout.Content>
        </Layout>
        <Footer></Footer>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
