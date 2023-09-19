import React from 'react'
import "./Comittee.css"

export default function Committee() {
  return (
    <div className='committee'>
        <div className="wrapper">

            <div className="patrons">
                <div className="patron">
                    <img src={require("./images/anoopverma.jpg")} alt="" width={"60%"} />
                    <h2 className='patronhead'>Cheif Patron</h2>
                    <h5 className='patronname'>Prof. Padmakumar Nair</h5>
                    <p className='patronpost'>Director, TIET</p>
                </div>
                <div className="patron" style={{marginTop: "300px"}}>
                <img src={require("./images/anoopverma.jpg")} alt="" width={"60%"} />
                    <h2 className='patronhead'>Patron</h2>
                    <h5 className='patronname'>Prof. Ajay Batish</h5>
                    <p className='patronpost'>Deputy Director, TIET</p>
                </div>
            </div>
            <div className="orgcom">
                <h2>ORGANIZING COMMITTEE</h2>
                <p>Department of Chemical Engineering TIET, Patiala</p>

                <div className="orgcommembers">
                    <div className="orgcommember">
                        <img src={require("./images/anoopverma.jpg")} alt="" className='orgcommemberimg'/>
                        <h5>Dr. Anoop Verma</h5>
                    </div>
                    <div className="orgcommember">
                        <img src={require("./images/anoopverma.jpg")} alt="" className='orgcommemberimg'/>
                        <h6>Dr. Anoop Verma</h6>
                    </div>
                    <div className="orgcommember">
                        <img src={require("./images/anoopverma.jpg")} alt="" className='orgcommemberimg'/>
                        <h6>Dr. Anoop Verma</h6>
                    </div>
                    <div className="orgcommember">
                        <img src={require("./images/anoopverma.jpg")} alt="" className='orgcommemberimg'/>
                        <h6>Dr. Anoop Verma</h6>
                    </div>
                    <div className="orgcommember">
                        <img src={require("./images/anoopverma.jpg")} alt="" className='orgcommemberimg'/>
                        <h6>Dr. Anoop Verma</h6>
                    </div>
                    <div className="orgcommember">
                        <img src={require("./images/anoopverma.jpg")} alt="" className='orgcommemberimg'/>
                        <h6>Dr. Anoop Verma</h6>
                    </div>
                    <div className="orgcommember">
                        <img src={require("./images/anoopverma.jpg")} alt="" className='orgcommemberimg'/>
                        <h6>Dr. Anoop Verma</h6>
                    </div>
                </div>
            </div>

            <div className="othercom">
                <div className="othercom1">
                    <h3>Core Team</h3>

                    <h5 className="post" style={{marginTop: "50px"}}>Chairperson</h5>
                    <p className="name">Prof. Rajeev Meheta</p>

                    <h5 className="post">Convener</h5>
                    <p className="name">Dr. Avinash Chandra</p>

                    <h5 className="post">Organizing Secretaries</h5>
                    <p className="name">Prof. Rajeev Meheta</p>
                    <p className="name">Prof. Rajeev Meheta</p>
                    <p className="name">Prof. Rajeev Meheta</p>

                    <h5 className="post">Joint Secretaries</h5>
                    <p className="name">Prof. Rajeev Meheta</p>
                </div>
                <div className="othercom1">
                    <h3>Advisory Committee</h3>
                    <p className="name" style={{marginTop: "50px"}}>Prof. Rajeev Meheta</p>
                    <p className="name">Prof. Rajeev Meheta</p>
                    <p className="name">Prof. Rajeev Meheta</p>
                    <p className="name">Prof. Rajeev Meheta</p>
                    <p className="name">Prof. Rajeev Meheta</p>
                    <p className="name">Prof. Rajeev Meheta</p>
                    <p className="name">Prof. Rajeev Meheta</p>
                    <p className="name">Prof. Rajeev Meheta</p>
                    <p className="name">Prof. Rajeev Meheta</p>
                    <p className="name">Prof. Rajeev Meheta</p>
                    <p className="name">Prof. Rajeev Meheta</p>
                    <p className="name">Prof. Rajeev Meheta</p>
                </div>
                <div className="othercom1">
                    <h3>Student Committee</h3>

                    <h5 className="post" style={{marginTop: "50px"}}>Web Designers</h5>
                    <p className="name">Tithi Srivastava</p>
                    <p className="name">Prof. Rajeev Meheta</p>
                    <p className="name">Prof. Rajeev Meheta</p>
                    <p className="name">Prof. Rajeev Meheta</p>

                    <h5 className="post">Brouchure Designers</h5>
                    <p className="name">Dr. Avinash Chandra</p>

                    <h5 className="post">Developers</h5>
                    <p className="name">Sharath Chandra</p>
                    <p className="name">Saaransh Gupta</p>
                </div>
            </div>
        </div>
    </div>
  )
}
