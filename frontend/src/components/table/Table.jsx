import React from 'react'
import "./table.css";
const Table = ({data}) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Description</td>
            <td>Category</td>
            <td>Amount</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          {
            data?.map((item) =>(
              <tr key={item._id}>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>{item.amount}</td>
                <td>{new Date(item.updatedAt).toLocaleDateString()}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default Table
