import { Button, Input, Space, Table, Typography, Layout, Form } from "antd";
import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { loginUser } from "../store/actions";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useContext(Context);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsername("");
    setPassword("");

    dispatch(loginUser(username, password));

    if (inputRef.current) inputRef.current.focus();
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();

    setUsername("");
    setPassword("");

    // dispatch register user

    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <Layout>
    <Typography.Title level="2">Tere tulemast tagasi!!!🥰🥰🥰</Typography.Title>
    <Form onSubmit={handleSubmit}>
      <Input
        ref={inputRef}
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoFocus
      />
      <Input
        ref={inputRef}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoFocus
      />
      <Button type="submit">Submit</Button>
    </Form>
      <Typography.Title level="2">Palun liitu meie saidiga 🥺🥺🥺🥺🥺</Typography.Title>
      <Form onSubmit={handleSubmit2}>
        <Input
          ref={inputRef}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
        />
        <Input
          ref={inputRef}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Layout>
  );
}

export default Login;