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
    }, [])
    
    // Sort by alphabet
    const sortClick = (properties) => {
        function compare(a, b) {
            spinner();
            if (a[properties] < b[properties]) {
                return -1;
            }
            if (a[properties] > b[properties]) {
                return 1;
            }
            return 0;
        }

        const post = posts.sort(compare).slice();
        stopSpinner();
       
        setPosts(post);
    }

   // Spiner
    const spinner = () =>  {
      document.getElementById("spinner").style.display = "flex";
    }
    const stopSpinner = () => {
        const spinnerDelay = () => {
            document.getElementById("spinner").style.display = "none"
        }
        setTimeout(spinnerDelay, 2000);
    }
    
    if (isLoading) {
        return (`loading ...`)
    }


    return (

        <div className="dataTable">
                    
            <div id="spinner" className="loading"></div>

            <div className="scrollContainer">
                <table className="table table-striped table-dark">
                    <thead>
                      <tr>
                          <th scope="col" className="headingTable" key={1}>ID</th>

                          <th scope="col" className="headingTable" key={2}
                              onClick={() => sortClick("name")}
                          >Name
                          </th>

                          <th scope="col" className="headingTable" key={3}
                              onClick={() => sortClick("email")}
                          >Email
                          </th>

                          <th scope="col" className="headingTable" key={4}
                              onClick={() => sortClick("body")}
                          >Body
                          </th>
                          
                          <th scope="col" className="summaryHeadingTable" key={5}>Summary</th>
                      </tr>
                    </thead>
                    <tbody>
                    <Row posts={posts}/>
                    </tbody>
                </table>
            </div>
        </div>


    )
}


export default Table