import React from 'react'

export default function Pagination(props) {
    return (
        <>
        <div className="p-2">
            <button className="btn btn-warning mr-2" onClick={props.anterior} >Anterior &larr;</button>
            <button className="btn btn-warning " onClick={props.siguiente}>Siguinete &rarr;</button>
            <button style={{float:'right'}} className="btn btn-danger" onClick={props.scroll}>subir</button>
         </div>
        </>
    )
}
