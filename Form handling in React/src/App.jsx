import React from 'react'

const APP = () => {

 function submitHandler() {
    e.preventDefault();
    console.log("Form Submitted");
 }



   return (
    <div className="center-container">
      <div className="form-box">
        <form onSubmit= {(e) => {
          submitHandler(e)
        }
        }>
           <input type="text" placeholder="Enter Your Name" />
           <button>Submit</button>
        </form>   
      </div>
    </div>
  );
}


export default APP
