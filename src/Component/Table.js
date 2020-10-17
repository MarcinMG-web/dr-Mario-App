import React, {useState, useEffect} from 'react'
import Row from './Row'
import { getAllPosts } from '../services/ApiServices'

const Table = () => {

    const [isLoading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])

    
    useEffect(() => {
    
        const getPostsData = async() => {
            
            const getPosts = await getAllPosts();
            setLoading(false)
            setPosts(getPosts)
        }
    
        getPostsData();
    }, [])
    
    
    // Sort by alphabet
    const isSortClick = (properties) => {
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
    const spinner = () => {
      document.getElementById("spinner").style.display = "flex";
    }
    const stopSpinner = () => {
        const spinnerDelay = () => {
            document.getElementById("spinner").style.display = "none";
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
                          <th scope="col" className="headingTable" >ID</th>

                          <th scope = "col" 
                          className = "headingTable" 
                          onClick={() => isSortClick("name")}
                          >Name
                          </th>

                          <th scope="col" 
                          className="headingTable" 
                          onClick={() => isSortClick("email")}
                          >Email
                          </th>

                          <th scope="col" 
                          className="headingTable" 
                          onClick={() => isSortClick("body")}
                          >Body
                          </th>
                          
                          <th scope="col" className="summaryHeadingTable">Summary</th>
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