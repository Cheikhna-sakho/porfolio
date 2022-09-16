const Cube = ({data}) => {
  
    return (
        <div className='cube'>
            {data.map((sides,i) => {
                return <div key={i} className={`face ${sides.face}`}><img src={sides.src} alt="cote du cube" /></div>
            })}
        </div>
    )
}
export default Cube;