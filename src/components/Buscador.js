import React,{useState} from 'react'

export default function Buscador(props) {

 const [value, setValue]= useState('')


 const getData = (e)=>{
    e.preventDefault();
    //send component app y que se haga la busque cuando los ditio sean mayor a 3 
   if(value.length >3){
      props.obtenerdatos(value)
   }
   
 }

    return (
        <>
         <form onSubmit={getData}>
             <div className="row"> 
                  <div className="form-group col-md-8">
                     <input type="text" onKeyUp={getData} onChange={(e)=>setValue(e.target.value)} className="form-control" placeholder="Search your image....."/>
                  </div>
                  <div className="form-group col-md-4">
                     <button className="btn btn-primary btn-block">Search</button>
                  </div>
             </div>
         </form>
       </>
    )
}
