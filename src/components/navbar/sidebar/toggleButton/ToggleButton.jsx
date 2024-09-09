
const ToggleButton = ({setOpen}) => {
  return (
    <button className='' onClick={()=>setOpen(prev=>!prev)}>
        Button 
    </button>
  )
}

export default ToggleButton