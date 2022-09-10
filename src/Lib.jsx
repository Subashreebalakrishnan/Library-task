import axios from "axios"
import { useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";



function Lib() {

   
   
   
   const [user,setUser]= useState([]);
   const [isLoading,setLoading]=useState(false)

   useEffect (() => {

     loadData()
   },[]);

   let loadData= async()=> {
       
       setLoading(true)
      let user= await axios.get("https://6316eb8bcb0d40bc4146cfc2.mockapi.io/lib");

      setUser(user.data)
      setLoading(false)
   }

   let userDelete = async(id) =>{

    try {

       await axios.delete(`https://6316eb8bcb0d40bc4146cfc2.mockapi.io/lib/${id}`)
       loadData();
       
    } catch (error) {
       
    }

   }
   

  return <div className="container-fluid">
         <div className="d-sm-flex align-items-center justify-content-between mb-4">
                       <h1 className="h3 mb-0 text-gray-800">Users</h1>
                       <Link to="/Create" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                               className="fas fa-download fa-sm text-white-50"></i> Create User</Link>
                   </div>

   {

       isLoading ? <span>Loading...</span> : <div className="card shadow mb-4">
       <div className="card-header py-3">
           <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
           </div>
       <div className="card-body">
           <div className="table-responsive">
               <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                   <thead>
                       <tr>
    
                           <th>S.no</th>
                           <th>Name</th>
                           <th>ISBN</th>
                           <th>Authors</th>
                           <th>No.of.pages</th>
                           <th>Publisher</th>
                           <th>Country</th>
                           <th>Action</th>
    
                       </tr>
                   </thead>
                  
                   <tbody>
                     {
    
                      user.map((user,index) => {
    
                        return <tr>
                            <td>{index+1}</td>
                            <td>{user.Name}</td>
                            <td>{user.ISBN}</td>
                            <td>{user.Authors}</td>
                            <td>{user.Pages}</td>
                            <td>{user.Publisher}</td>
                            <td>{user.Country}</td>
                            <td>
                                <Link to={`/lib/${user.id}`}className="btn btn-sm btn-warning">View</Link>
                                <Link to={`/lib/edit/${user.id}`} className="btn btn-sm btn-primary">Edit</Link>
                                <button onClick={() => userDelete(user.id)} className="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
     
                      }
                      
                      )
     
                     }
    
    
                   </tbody>
               </table>
           </div>
       </div>
    </div>
   }
         
  
  
</div>
}

export default Lib