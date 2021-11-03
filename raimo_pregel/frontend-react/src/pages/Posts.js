import { Table } from "antd";
import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { addPost, removePost, updatePosts } from "../store/actions";

function Posts() {
  const [title, setTitle] = useState("");
  const [state, dispatch] = useContext(Context);
  const inputRef = useRef(null);

  // Ilma dependency massivita ehk ilma [] kutsub välja igal renderdusel
  // tühja massiivi dependencyna esimest korda
  // saab ka kutsuda teatud state muutustel välja
  useEffect(() => {
    dispatch(updatePosts([
      {
        id: 1,
        title: "Test-prefetched-array-1"
      },
      {
        id: 2,
        title: "Test-prefetched-array-2"
      },
      {
        id: 3,
        title: "Test-prefetched-array-3"
      },
      {
        id: 4,
        title: "Test-prefetched-array-4"
      },
    ]))
  }, [])

  // Või võite panna eraldi nupu, et "Get latest from database" (Sync)

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitle("");

    addNewPost()

    if (inputRef.current) inputRef.current.focus();
  };


  const addNewPost = () => {
    const newPost = {
      id: Date.now(),
      title,
    };

    // Salvestame andmebaasi ja kui on edukas, 
    // siis teeme dispatchi ja uuendame state lokaalselt

    dispatch(addPost(newPost));
  };

  console.log({ inputRef });

  const dataSource = state.posts.data.map((e) => {
    return {
      key: e.id,
      title: e.title
    }
  }) || [];

  const columns = [
    {
      title: "Pealkiri :3",
      dataIndex: "title",
      key: "title"
    }
  ]

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Posts</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <button type="submit">Submit</button>
      </form>     
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default Posts;
