import React, {useState, useEffect} from 'react'
import Row from './Row'
import { getAllPosts } from '../services/ApiServices'

export interface IPost {
    postId: number,
    id: string,
    name: string,
    email: string,
    body: string,
}

export const Table = ():JSX.Element => {

    const [isLoading, setLoading] = React.useState(true)
    const [posts, setPosts] = useState<IPost[]>([])
    
    useEffect(() => {
    
        const getPostsData = async() => {
            setLoading(true)
            const getPosts = await getAllPosts();
            setLoading(false)
            setPosts(getPosts)
        }
    
        getPostsData();
    }, [])
    
    
    // Sort by alphabet
    const isSortClick = (properties:any) => {
        function compare(a:any, b:any) {
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
    const spinner = ():void => {
      document.getElementById('spinner')!.style.display = "flex";
    }
    const stopSpinner = ():void  => {
        const spinnerDelay = (): void => {
            document.getElementById('spinner')!.style.display = "none";
        }
        setTimeout(spinnerDelay, 2000);
    }
    
    if (isLoading) {
        return <h6>loading ...</h6>
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