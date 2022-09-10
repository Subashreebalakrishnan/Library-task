import axios from "axios";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";



function Edit () {


   const params = useParams ()
   const navigate = useNavigate()

    const formik= useFormik({

           initialValues : {
  
            Name:"",
            ISBN:"",
            Authors:"",
            Pages:"",
            Publisher:"",
            Country:""
           
   
        },
  
        validate : (values) =>  {
  
          let errors = {};
          if (values.Name===""){
           errors.Name= "Please enter name "
          }
          
          if (values.ISBN===""){
           errors.ISBN= "Please enter ISBN"
          }
  
           return errors;
  
           
        } ,
  
        onSubmit : async(values) => {   
  
         await axios.put (`https://6316eb8bcb0d40bc4146cfc2.mockapi.io/lib/${params.id}`,values)
         navigate("/library")
        },
     });

     useEffect (() => {

       loadUser()

     },[])

     let loadUser= async () => {

      try {

        let user = await axios.get (`https://6316eb8bcb0d40bc4146cfc2.mockapi.io/lib/${params.id}`)
        console.log(user.data)
        formik.setValues( {

            Name: user.data.Name,
            ISBN: user.data.ISBN,
            Authors: user.data.Authors,
            Pages: user.data.Pages,
            Publisher: user.data.Publisher,
            Country: user.data.Country,


        } )
         
      } catch (error) {
         
      }


     }
  
     return (
     <>
     <div className="container">
         <form onSubmit={formik.handleSubmit}>
         <div className="row">
        
           <div className="col-lg-6">
              <label>Name</label>
                <input className="form-control"
                 type={"text"}  
                value={formik.values.Name}
                onChange={formik.handleChange}
                name="Name"
                
                />
                <span style={{color:'red'}}>{formik.errors.Studentname}</span>
             </div>
  
  
             <div className="col-lg-6">
              <label>ISBN</label>
                <input className="form-control" 
                type={"text"}
                value={formik.values.ISBN}
                onChange={formik.handleChange}
                name="ISBN" 
                 />
                 <span style={{color:'red'}}>{formik.errors.TotalMarks}</span>
             </div>
              
             <div className="col-lg-6">
              <label>Authors</label>
                <input className="form-control" type={"text"}
                 value={formik.values.Authors}
                 onChange={formik.handleChange}
                 name="Authors"
                
                
                />
             </div>

             <div className="col-lg-6">
              <label>Pages</label>
                <input className="form-control" type={"text"}
                 value={formik.values.Pages}
                 onChange={formik.handleChange}
                 name="Pages"
                
                
                />
             </div>

             <div className="col-lg-6">
              <label>Publisher</label>
                <input className="form-control" type={"text"}
                 value={formik.values.Publisher}
                 onChange={formik.handleChange}
                 name="Publisher"
                
                
                />
             </div>

             <div className="col-lg-6">
              <label>Country</label>
                <input className="form-control" type={"text"}
                 value={formik.values.Country}
                 onChange={formik.handleChange}
                 name="Country"
                
                
                />
             </div>
  
             
  
             <div className="col-lg-6 mt-2">
              
                <input className="btn-primary" type={"submit"} value="Submit" disabled={!formik.isValid}/>
             </div>
           </div>
        </form>
     </div>
     </>
     )
  
  }





export default Edit