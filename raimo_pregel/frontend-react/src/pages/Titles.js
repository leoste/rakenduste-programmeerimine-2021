import { Button, Input, Space, Table, Typography, Layout, Form } from "antd";
import FormItemLabel from "antd/lib/form/FormItemLabel";
import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { addTitle, removeTitle, updateTitles } from "../store/actions";

function Titles() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [state, dispatch] = useContext(Context);
  const inputRef = useRef(null);

  // Ilma dependency massivita ehk ilma [] kutsub välja igal renderdusel
  // tühja massiivi dependencyna esimest korda
  // saab ka kutsuda teatud state muutustel välja
  useEffect(() => {    
    fetch('http://localhost:8081/api/title').then(res => {
      return res.json();
    }).then(async (data) => {
      await dispatch(updateTitles(data))
    })
  }, [])

  // Või võite panna eraldi nupu, et "Get latest from database" (Sync)

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTitle()

    if (inputRef.current) inputRef.current.focus();
  };


  const addNewTitle = () => {
    const newTitle = {
      id: Date.now(),
      title,
      author,
      date
    };

    // Salvestame andmebaasi ja kui on edukas, 
    // siis teeme dispatchi ja uuendame state lokaalselt

    dispatch(addTitle(newTitle));
  };

  console.log({ inputRef });

  const dataSource = state.titles.data.map(e => { return { ...e, date: e.date.toDateString() }; }) || [];

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
      <Typography.Title level="1">Titles</Typography.Title>
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

export default Titles;
