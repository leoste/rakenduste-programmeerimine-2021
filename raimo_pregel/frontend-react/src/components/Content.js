
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Posts from "../pages/Posts";
import { Layout, Space, Typography } from "antd";

function Content() {
  return (
    <Switch>
      <Route exact path="/" />
      <Route exact path="/posts" component={Posts} />
    </Switch>
  );
}

export default Content
