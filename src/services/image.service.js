const URI='https://pixabay.com/api/?key=14460552-4c95da82bd56b5a6b89fffac5'

export const getImages = async(name, pagina)=>{
  const res= await fetch(`${URI}&q=${name}&per_page=30&page=${pagina}`)
  const {hits} = await res.json()
  if(!hits){
    return <p>no result</p>
  }
  return hits
}