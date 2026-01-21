import { useState, useEffect } from 'react'
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const DataFetching = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [id, setId] = useState<string>('1');
  const [idFromButtonClick, setIdFromButtonClick] = useState<number>(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then(res => {
        setPost(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [idFromButtonClick]);

  function handleFetchButton() {
    console.log('hello')
    setIdFromButtonClick(id)
    console.log(id)
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setId(e.target.value);
  }

  return (
    <div>
      <input 
        type='text' 
        placeholder="id" 
        value={id} 
        onChange={handleInputChange} 
        className='border p-2 mr-2'
      />
      <button type='button' className='bg-blue-300 p-2' onClick={handleFetchButton}>Fetch</button>
      <div className='mt-4'>
        {post && (
          <div>
            <h3 className='font-bold'>Title: {post.title}</h3>
            <p className='mt-2'>{post.body}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default DataFetching