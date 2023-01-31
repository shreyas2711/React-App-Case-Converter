import React from "react"
// import React {useState} from 'react'
function Alert(props) {
    // const capitalize= (word)=>{
    //     const lower=word.toLowerCase(); 
    //     return lower.charAt(0).UpperCase()+lower.slice()
    // }
  return (
     props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{color:props.mode==='dark'?'white':'black'}}>
        <strong style={{color:props.mode==='dark'?'white':'black'}}>{props.alert.type}</strong>: {props.alert.msg}
        
     <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    
  )
}

export default Alert
