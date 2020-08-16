import React, {useState, useEffect} from 'react'
import Row from './Row'
import axios from 'axios'

const Table = () => {

    const [loading, setLoadin] = useState(true)
    // const [error, setError] = useState('')
    const [posts, setPosts] = useState([])
    // const rowsArray = []

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
        .then(response => {
            console.log(response)
            setLoadin(false)
            setPosts(response.data)
            // setError('')
        })
        .catch(err => {
            console.log(err)
            setLoadin(false)
            setPosts([])
            // setError('Something went wrong ... ')
       })
    },[])
    
    const sortClick = () => {
      console.log('sortowanie')
      // sortowanie 
      // Array.prototype.sort(posts)
      // Array.posts.sort()
      // console.log(posts)
    }

    if(loading){
      return (`loading ...`)
    }

   return (

<table className="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col" className="scope" key={1} onClick={() => sortClick()}>ID</th>
      <th scope="col" className="scope" key={2} onClick={() => sortClick()}>Name</th>
      <th scope="col" className="scope" key={3} onClick={() => sortClick()}>Email</th>
      <th scope="col" className="scope" key={4} onClick={() => sortClick()}>Body</th>
      <th scope="col" className="sumaryCol" key={5} onClick={() => sortClick()}>Summary</th>
    </tr>
  </thead>
  <tbody key={Math.floor(Math.random()*1000)+1}>
    <Row posts={posts} />
    {/* 
    <th scope="row">{post.id}</th>
       <td>{post.name}</td>
       <td>{post.email}</td>
       <td>{post.body}</td>
    */}
    
  </tbody>
</table>
       
  )
  
}


export default Table
