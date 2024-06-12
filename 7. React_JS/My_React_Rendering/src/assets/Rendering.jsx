
const Rendering = () => {
  return (
    <div>
        <h1>React Rendering Practice</h1>
        <ul>
            <Render name='oppo' ifPacked={true}/>
            <Render name='vivo' ifPacked={false}/>
            <Render name='fgt' ifPacked={true}/>
            <Render name='iphone' ifPacked={false}/>
        </ul>
      
    </div>
  )
}

export const Render = ({name , ifPacked}) => {

    if (ifPacked) {

        return <li>{name} + is available </li>   
        
    }
    return <li>{name} + 'is not available </li> 
}

export default Rendering
