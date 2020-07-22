import React,{useState, useEffect} from 'react'
import Buscador from './components/Buscador'
import Resultado from './components/Resultado'
import {getImages} from './services/image.service';
import Snipper from './components/snipper'

export default function App() {

const [state, setstate] = useState("")
const [images, setImages]= useState([])
const [loading, setLoading]=useState(false)
const [pagina, setPagina]= useState("1");


useEffect(() => {
    consultarApi();
}, [state])

//metodo para subir el elemento cuando esta abajo con base al selector jumbotron en este caso
const scroll = ()=>{
    const element =  document.getElementById('jumbotron')
    return element.scrollIntoView('smoth','start')
}

const paginaAnterior = ()=>{
    //llamanos el state
    let pag = pagina;
    //verificamos si estamos en la pag 1 
    if(pag === 1) return null;
    //sumamos uno
    pag --;
    //add cambio state
    setPagina(pag)
    //llamamos la api
    consultarApi()
    scroll()
}

const paginaSiguiente = ()=>{
    //llamanos el state
    let pag = pagina;
    //sumamos uno
    pag ++;
    //add cambio state
    setPagina(pag)
    consultarApi()
    scroll()
}

const consultarApi = async ()=>{
    setLoading(true)

    //llamanos el servicio
     getImages(state, pagina).then(res=>{
        setLoading(false)
        setImages(res)
     }) 
}

const obtenerdatos = (value)=>{
  setstate(value)
}
    return ( 
        <div className="app container">
           <div className="jumbotron mt-5" id="jumbotron" style={{padding:'1em'}}>
               <p className="text-center lead">Buscador de Imagenes</p>
               <Buscador obtenerdatos={obtenerdatos} />
           </div>
           { loading ? <Snipper /> : 
            <Resultado
                images={images} 
                paginaAnterior={paginaAnterior} 
                paginaSiguiente={paginaSiguiente}
                scroll ={scroll}
              /> 
             }
        </div>
    )
}
