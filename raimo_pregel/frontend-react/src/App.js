import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShowMagic from "./components/ShowMagic";
import Header from "./components/Header";
import Posts from "./pages/Posts";
import { Layout } from "antd";
import 'antd/dist/antd.css';
import { List } from "antd/lib/form/Form";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/posts" component={Posts} />
        </Switch>
        <Layout.Footer>
          <h2>Aitäh et tulite mu vingele lehele :)</h2>
        </Layout.Footer>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
