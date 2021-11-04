import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { Layout } from "antd";
import 'antd/dist/antd.css';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
