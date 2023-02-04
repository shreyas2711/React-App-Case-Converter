import React, {useState} from 'react'


export default function TextForm(props) {

  // const [color,setcolor]=useState('light')

  // const changecolor=()=>{
  //   if(color==='light'){
  //     document.body.style.backgroundColor='green'
  //   }
  //   else if(color==='green'){
  //     setcolor('light')
  //   }
  // }
  // const [col,setcol]=useState('light')
  // const changecolor=()=>{
  //   if(col==='light'){
  //   setcol('green')
  //   document.body.style.backgroundColor='green'
  //   }
//     else{
//       setcol('light')
//       // setmodetext('Light Mode')
//       document.body.style.backgroundColor='white'

// }
// }
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked");
        let newText=text.toUpperCase()
        setText(newText);
        props.showAlert("Converted to Uppercase","Success");
    }
    const handleloClick=()=>{
        // console.log("Uppercase was clicked");
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase","Success");
    }
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const invertClick =(event)=>{
        let invertText=text.split("").reverse().join("");
        setText(invertText)
    }
    const whenclick=()=>{
      let removetext=text.replace(text,'');
      setText(removetext)
    }
    const trimm=()=>{
     let result=text.split(/[ ]+/)
      setText(result.join(" "))
    }

   
    
    // const copytext=()=>{
    //   console.log("im copy")
    //   var text=document.getElementById("mybox")
    //   text.select();
    //   text.setSelectionRange(0,9999)
    //   navigator.clipboard.writeText(text.value)
    // }
    const [text,setText]=useState('Enter text here');
    
  const countwords=()=>{
    let words = text.trim().split(" ").length;
    if (words === 1 && text.split(" ")[0] === "") {
      words = 0;
      return words;
    } else {
      return words;
      
    }
  }

    // setText=("shhsjdh")
  return (
    <>
    {/* <div className="container" {{color:props.mode==='dark'? 'white':'black' && 'light'?'black':'white'}}> */}
    <div className="container" style={{color:props.mode==='dark'? 'white':'black' && 'light'?'black':'white'}}>
    <h1 className='mb-3'>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" style={{backgroundColor:props.mode==='dark'? '#13466e':'light' && 'light'?'white':'dark',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={invertClick}>Click to invert</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={trimm}>Remove WhiteSpace</button> 
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={whenclick}>Click to remove text</button>
    {/* <button className="btn btn-primary mx-1" onClick={changecolor}>Click to change color</button> */}
    {/* <button className="btn btn-primary mx-1" onClick={copytext}>Click to Copy</button> */}
    </div>

    
    <div className="container my-2"  style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
      <p>{countwords()} words and {text.length} characters</p>
      
      <p>{0.008 * countwords()} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
