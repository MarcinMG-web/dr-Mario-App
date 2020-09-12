import React from 'react'

const Row = ({posts}) => {

    return (
      
     posts.map(({id,name,email,body}) => (
        <tr key={id}>
          <th key={id} scope="row">{id}</th>
          <td key={name} >{name}</td>
          <td key={email} >{email}</td>
          <td key={body}>{body}</td>
            <td className="summaryRow px-0 py-0" >
              # {id} <br/>
              Name: {name} <br/>
              Email: {email} <br/>
              Body: {body} 
            </td>  
        </tr>
      )) 
    )
}
export default Row
