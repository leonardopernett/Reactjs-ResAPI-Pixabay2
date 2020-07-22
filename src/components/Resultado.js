import React from 'react'
import Image from './Image'
import Pagination from './Pagination'
export default function Resultado(props) {
    
  
const mostrarImagenes = ()=>{
    if(props.images.length === 0) return null;
   return (
       <>
         <div className="row ">
            { props.images.map(image=> (
                <Image {...image} key={image.id} />
            )) }  
         </div>
         <div className="row">
             <div className="col-md-12 text-center">
                 <Pagination scroll ={props.scroll} anterior={props.paginaAnterior} siguiente={props.paginaSiguiente} />
             </div>
         </div>
       </>
   )  
}

return (
    <div>
        {mostrarImagenes()}
    </div>
 )
}
