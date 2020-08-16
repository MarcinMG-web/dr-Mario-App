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
      console.log('sortowanie');
      
      

        // możesz łatwo zmienić to na dowolną właściwość, na przykład „email” lub „body”
        // let property = "name";  
    
    
        // JSON.data.children.sort(function(a, b) {
    
        //     // utwórz nowe zmienne, aby łatwo uzyskać dostęp do zagnieżdżonych danych do sortowania
        //     let property1 = a.data[property];
        //     let property2 = b.data[property];
    
        //     if (property1 < property2) {    //sprawdza „niższą” kolejność alfabetyczną
        //         return -1
        //     };
        //     if (property1 > property2) {    // sprawdza „wyższą” kolejność alfabetyczną
        //         return 1
        //     };
        //     return 0    // jeśli name są równe 
    
        // });

      
      console.log(posts);
      const sortedByName = posts.sort(function(a,b){
        return a.email - b.email;
       
      })
      
      console.log(sortedByName);
   
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
       
  )
  
}


export default Table
