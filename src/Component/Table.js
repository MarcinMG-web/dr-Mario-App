import React, {useState, useEffect} from 'react'
import Row from './Row'
import axios from 'axios'

const Table = () => {

    const [loading, setLoadin] = useState(true)
    const [error, setError] = useState('')
    const [posts, setPosts] = useState([])
 
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
        .then(response => {
            console.log(response)
            setLoadin(false)
            setPosts(response.data)
            setError('')
        })
        .catch(err => {
            console.log(err)
            setLoadin(false)
            setPosts([])
            setError('Something went wrong ... ')
       })
    },[])
    
   return (

<table className="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Body</th>
      <th scope="col">Sumary</th>
    </tr>
  </thead>
  <tbody>
    <Row posts={posts}/>
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
