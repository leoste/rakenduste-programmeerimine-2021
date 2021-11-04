import { Button, Input, Space, Table, Typography, Layout, Form } from "antd";
import FormItemLabel from "antd/lib/form/FormItemLabel";
import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { addPost, removePost, updatePosts } from "../store/actions";

function Posts() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [state, dispatch] = useContext(Context);
  const inputRef = useRef(null);

  // Ilma dependency massivita ehk ilma [] kutsub välja igal renderdusel
  // tühja massiivi dependencyna esimest korda
  // saab ka kutsuda teatud state muutustel välja
  useEffect(() => {
    dispatch(updatePosts([
      {
        id: 1,
        title: "Test-prefetched-array-1",
        author: "Jon Snow",
        date: new Date(2016, 11, 23)
      },
      {
        id: 2,
        title: "Test-prefetched-array-2",
        author: "Misato",
        date: new Date(2017, 3, 5)
      },
      {
        id: 3,
        title: "Test-prefetched-array-3",
        author: "LLLL testttt",
        date: new Date(2019, 8, 17)
      },
      {
        id: 4,
        title: "Test-prefetched-array-4",
        author: "yeah",
        date: new Date(2019, 9, 19)
      },
    ]))
  }, [])

  // Või võite panna eraldi nupu, et "Get latest from database" (Sync)

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitle("");
    setAuthor("");
    setDate("");

    addNewPost()

    if (inputRef.current) inputRef.current.focus();
  };


  const addNewPost = () => {
    const newPost = {
      id: Date.now(),
      title,
      author,
      date
    };

    // Salvestame andmebaasi ja kui on edukas, 
    // siis teeme dispatchi ja uuendame state lokaalselt

    dispatch(addPost(newPost));
  };

  console.log({ inputRef });

  const dataSource = state.posts.data.map(e => { return { ...e, date: e.date.toDateString() }; }) || [];

  const columns = [
    {
      title: "Pealkiri :3",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "Looja 🙏🙏🙏",
      dataIndex: "author",
      key: "author"
    },
    {
      title: "Loodud",
      dataIndex: "date",
      key: "date"
    }
  ]

  return (
    <Layout>
      <Typography.Title level="1">Posts</Typography.Title>
      <Form onSubmit={handleSubmit}>
        <Input
          ref={inputRef}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <Input
          ref={inputRef}
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          autoFocus
        />
        <Input
          ref={inputRef}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          autoFocus
        />
        <Button type="submit">Submit</Button>
      </Form>
      <Table dataSource={dataSource} columns={columns} />
    </Layout>
  );
}

export default Posts;
