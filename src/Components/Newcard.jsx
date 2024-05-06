import React from 'react';
 
const Newcard = (props) => {



  return (

   <div className="row row-cols-1 row-cols-md-3 g-3" >
   <div className="col" >
     <div className="card" >
     <img className='product-image'  src={props.image}></img>
       <div className="card-body">
         <h5 className="card-title">{props.title}</h5>
         <p className="card-text">{props.price}</p>
         <p className="card-text">{props.description}</p>
         <a href="#" className="card-link">Card link</a><br></br>
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link" style={{float:'right'}}>Another link</a>
         
      
       </div>
    </div>
 </div>
   <div className="col">
   <div className="card" >
   <img className='product-image'  src={props.image}></img>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.price}</p>
        <p className="card-text">{props.description}</p>
        <a href="#" className="card-link">Card link</a><br></br>
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link" style={{float:'right'}}>Another link</a>
       
      </div>
   </div>
   </div>
   <div className="col">
   <div className="card">
   <img className='product-image' src={props.image}></img>
      <div className="card-body">
     
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.price}</p>
        <p className="card-text">{props.description}</p>
 
        <a href="#" className="card-link">Card link</a><br></br>
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link" style={{float:'right'}}>Another link</a>
      </div>
   </div>
   </div>
   <div className="col">
   <div className="card" >
   <img className='product-image' src={props.image}></img>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.price}</p>
        <p className="card-text">{props.description}</p>
        <a href="#" className="card-link">Card link</a><br></br>
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link" style={{float:'right'}}>Another link</a>
     
      </div>
   </div>
   </div>
   <div className="col">
   <div className="card" >
   <img className='product-image' src={props.image}></img>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.price}</p>
        <p className="card-text">{props.description}</p>
        <a href="#" className="card-link">Card link</a><br></br>
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link" style={{float:'right'}}>Another link</a>
      </div>
   </div>
   </div>
   <div className="col">
   <div className="card" >
   <img className='product-image' src={props.image}></img>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.price}</p>
        <p className="card-text">{props.description}</p>
        <a href="#" className="card-link">Card link</a><br></br>
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link" style={{float:'right'}}>Another link</a>
      </div>
   </div>
   </div>
   
 </div>
  
  )
}

export default Newcard;
