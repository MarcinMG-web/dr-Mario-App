import React from 'react'

const Row = ({posts}) => {

    return (
      
    posts.map(post => (
    <tr>
       <th scope="row">{post.id}</th>
       <td>{post.name}</td>
       <td>{post.email}</td>
       <td>{post.body}</td>
       <td>
         ID:{post.id} <br/>
         Name:{post.name} <br/>
         Email:{post.email} <br/>
         Body:{post.body} <br/>
       </td>
    </tr>
    ))


    )
}

export default Row
