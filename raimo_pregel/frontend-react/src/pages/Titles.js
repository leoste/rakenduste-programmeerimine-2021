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
    e.preventDefault()

    const newTitle = {
      title,
      authorId: state.auth.user.id,
    }

    setTitle("")

    addNewTitle(newTitle)

    if (inputRef.current) inputRef.current.focus()
  };


  const addNewTitle = async (title) => {
    const res = await fetch('http://localhost:8081/api/title/create', {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify(title),
      })
  
      const returnData = await res.json()
  
      dispatch(addTitle(returnData))
  };

  console.log({ inputRef });

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: "Pealkiri :3",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "Looja 🙏🙏🙏",
      dataIndex: "authorId",
      key: "authorId"
    },
    {
      title: "Loodud",
      dataIndex: "createdAt",
      key: "createdAt"
    },
    {
      title: 'ära puuttu 😡😡😡',
      dataIndex: 'lastModified',
      key: 'lastModified',
    }
  ]

  return (
    <Layout>
      <Typography.Title level="1">Titles</Typography.Title>
      {state.auth.token &&
        (
          <form onSubmit={handleSubmit}>
            <Input
              style={{margin: '10px', maxWidth: '50%'}}
              ref={inputRef}
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              autoFocus
            />
            <Button htmlType="submit" type="primary">Submit</Button>
          </form>
        )
      }
      <Table dataSource={state.titles.data} columns={columns} />
    </Layout>
  );
}

export default Titles;
