import { useFormik } from "formik";
import axios from "axios"

function Create () {

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
         errors.Name= "Please enter Name "
        }
        
        if (values.ISBN===""){
         errors.ISBN= "Please enter ISBN"
        }

         return errors;

         
      } ,

      onSubmit : async (values) => {

            
          let user= await axios.post("https://6316eb8bcb0d40bc4146cfc2.mockapi.io/lib",values)
          alert ("User Created")
          
      },
   });

   return (
   <>
   <div className="container">
       <form onSubmit={formik.handleSubmit}>
       <div className="row">
      
         <div className="col-lg-6">
            <label>Book Name</label>
              <input className="form-control"
               type={"text"}  
              value={formik.values.Name}
              onChange={formik.handleChange}
              name="Name"
              
              />
              <span style={{color:'red'}}>{formik.errors.name}</span>
           </div>


           <div className="col-lg-6">
            <label>ISBN</label>
              <input className="form-control" 
              type={"text"}
              value={formik.values.ISBN}
              onChange={formik.handleChange}
              name="ISBN" 
               />
               <span style={{color:'red'}}>{formik.errors.Position}</span>
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
            <label>No.of.pages</label>
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

export default Create