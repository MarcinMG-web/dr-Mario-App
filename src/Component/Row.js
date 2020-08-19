import React from 'react'

const Row = ({posts} ) => {

    return (
      
     posts.map(post => (
        <tr key={post.id}>
          <th key={post.id} scope="row">{post.id}</th>
          <td key={post.name} >{post.name}</td>
          <td key={post.email} >{post.email}</td>
          <td key={post.body}>{post.body}</td>
            <td className="summaryRow px-0 py-0" >
              # {post.id} <br/>
              Name: {post.name} <br/>
              Email: {post.email} <br/>
              Body: {post.body} 
            </td>  
        </tr>
      )) 
    )
}

export default Row
