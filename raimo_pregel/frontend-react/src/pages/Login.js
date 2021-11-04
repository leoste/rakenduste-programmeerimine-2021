import { Button, Input, Space, Table, Typography, Layout, Form } from "antd";
import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { addPost, removePost, updateLogin } from "../store/actions";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useContext(Context);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsername("");
    setPassword("");

    addNewPost()

    if (inputRef.current) inputRef.current.focus();
  };

  const addNewPost = () => {
    const newPost = {
      id: Date.now(),
      username,
      password
    };

    // Salvestame andmebaasi ja kui on edukas, 
    // siis teeme dispatchi ja uuendame state lokaalselt

    dispatch(addPost(newPost));
  };

  return (
    <Layout>
      <Typography.Title level="2">Palun liitu meie saidiga 🥺🥺🥺🥺🥺</Typography.Title>
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
    </Layout>
  );
}

export default Login;