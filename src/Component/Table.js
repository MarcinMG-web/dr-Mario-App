import React, {useState, useEffect} from 'react'
import Row from './Row'
import axios from 'axios'

const Table = () => {

    const [loading, setLoadin] = useState(true)
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
        .then(response => {
            // console.log(response)
            setLoadin(false)
            setPosts(response.data)
        })
        .catch(err => {
            console.log(err)
            setLoadin(false)
            setPosts([])
       })
    },[])
    
    const sortClick = (properties) => {
      function compare(a, b) {
          if (a[properties] < b[properties]) {
              return -1;
          }
          if (a[properties] > b[properties]) {
              return 1;
          }
          return 0;
      }
      const post = posts.sort(compare).slice();
      setPosts(post);
      console.log('sortClick')

  }
  
  console.log("posortowane",posts)

    if(loading){
      return (`loading ...`)
    }

   return (
<div className="DataTable">
  <div className="ScrollContainer">
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col" className="scope" key={1}>ID</th>
          <th scope="col" className="scope" key={2} onClick={() => sortClick("name")}>Name</th>
          <th scope="col" className="scope" key={3} onClick={() => sortClick("email")}>Email</th>
          <th scope="col" className="scope" key={4} onClick={() => sortClick("body")}>Body</th>
          <th scope="col" className="summaryCol" key={5} onClick={() => sortClick()}>Summary</th>
        </tr>
      </thead>
      <tbody >
        <Row posts={posts} />
        {/* 
        <th scope="row">{post.id}</th>
          <td>{post.name}</td>
          <td>{post.email}</td>
          <td>{post.body}</td>
        */}
        
      </tbody>
    </table>
  </div>
</div>
  )
  
}


export default Table

