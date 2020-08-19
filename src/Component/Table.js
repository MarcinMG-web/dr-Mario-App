import React, {useState, useEffect} from 'react'
import Row from './Row'
import axios from 'axios'


const Table = () => {

    const [isLoading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
        .then(response => {
            setLoading(false)
            setPosts(response.data)
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
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

    
      
    const spinner = () => {
      setInterval(() => {
        console.log('spiner')

        document.getElementById("spinner").style.display = "flex";
      }, 1000);
      
     
  }
  clearInterval(spinner)

  if(isLoading){
    return (`loading ...`)
  }
  

   return (
     

  <div className="dataTable">
  {/* spiner */}
  <div id="spinner" className="loading"></div>
    
  <div className="scrollContainer">
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col" className="headingTable" key={1}>ID</th>

          <th scope="col" className="headingTable" key={2} 
          onClick={() => sortClick("name") || spinner()}       
          >Name
          </th>

          <th scope="col" className="headingTable" key={3} 
          onClick={() => sortClick("email")|| spinner()}
          >Email
          </th>

          <th scope="col" className="headingTable" key={4} 
          onClick={() => sortClick("body")|| spinner()}
          >Body
          </th>
          
          <th scope="col" className="summaryHeadingTable" key={5}>Summary</th>
        </tr>
      </thead>
      <tbody >
        <Row posts={posts} />
      </tbody>
    </table>
  </div>
</div>


)}


export default Table

