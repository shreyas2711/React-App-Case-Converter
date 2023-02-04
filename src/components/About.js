import React  from 'react'

export default function About(props) {
    
  // const [myStyle,setMyStyle] = useState({
      // const [btntext,setBtnText]=useState('Enable dark mode')
// })

        // const toggleStyle=()=>{
        //     if(myStyle.color === 'white'){
        //         setMyStyle({
        //             color:'black',
        //             backgroundColor:'white'
        //         })
        //         setBtnText("Enable dark mode")
        //     }
        //     else{
        //         setMyStyle({
        //             color:'white',
        //             backgroundColor:'black',
        //             border:'1px solid white'
        //         })
        //            setBtnText("Enable light mode")
        //     }
            
        // }

          let myStyle={
            color:props.mode==='dark'?'white':'#042743',
            backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white'
          }



  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}> 
    <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vitae exercitationem voluptate odio maxime in, doloribus officia fuga!
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aliquid! Sequi voluptatibus repellendus adipisci alias animi cupiditate facilis, sit rem aperiam at commodi obcaecati saepe.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi veritatis maxime, accusantium blanditiis nemo quisquam laudantium sint quis possimus dolores libero voluptas tempora? Dolorem, maiores?
      </div>
    </div>
  </div>
</div>
<div className="container my-3">  
</div>
    </div>
  )
}
