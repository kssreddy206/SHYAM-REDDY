import React from 'react'

export default function Design({items}) {
  return (
    <div>
        <center>
        <table border="1">
            <tr>
                <td>{items.id}</td>
                <td>{items.title}</td>
                <td>{items.catagory}</td> 
                <td>{items.price}</td>
                <td><img src={items.image} alt="pic" width="40" height="70"/></td>
                <td><button ><p>Add Cart</p></button></td>
            </tr>
        </table>
        </center>
    </div>
  )
}
