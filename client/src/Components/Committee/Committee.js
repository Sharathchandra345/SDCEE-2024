import React from 'react'
import "./Comittee.css"

const organizing = [
    {
        name: "Dr. Shilpi Verma",
        img: require("./images/shilpiverma.jpg"),
        dept: "Energy & Environment, TIET Patiala"
    },
    {
        name: "Dr. Anoop Verma",
        img: require("./images/anoopverma.jpg"),
        dept: "Energy & Environment, TIET Patiala"
    },
    {
        name: "Dr. Sapna Sharma",
        img: require("./images/sapnasharma.jpg"),
        dept: "Mathematics, TIET Patiala"
    },
    {
        name: "Dr. B. C. Mohanty",
        img: require("./images/bcmohantay.jpg"),
        dept: "Physics & Material Science, TIET, Patiala"
    },
    {
        name: "Dr. Dwarika N. Ratha",
        img: require("./images/dvarikanratha.jpg"),
        dept: "Civil Engineering, TIET, Patiala"
    },
    {
        name: "Dr. S. S. Mallick",
        img: require("./images/ssmalick.jpg"),
        dept: "Mechanical Engineering, TIET, Patiala"
    },
    {
        name: "Dr. Sharad Saxena",
        img: require("./images/sharadsaxena.jpg"),
        dept: "Computer Science & Eng, TIET, Patiala"
    },
    {
        name: "Dr. Amit Dhir",
        img: require("./images/amitdhir.jpg"),
        dept: "Energy & Environment, TIET, Patiala"
    },
    {
        name: "Dr. Bonamali Pal",
        img: require("./images/bonamalipal.jpg"),
        dept: "Chemistry & Biochemistry, TIET Patiala"
    },
    {
        name: "Dr. B K Chudasama",
        img: require("./images/bkchudasama.jpg"),
        dept: "Physics & Material Science, TIET, Patiala"
    }
];


const Chairperson = {
    name: "Prof. Rajeev Meheta",
}

const Convener = {
    name: "Dr. Avinash Chandra",
}

const Orgsecs = [
    {
        name: "Dr. Sangmitra Barman",
    },
    {
        name: "Dr. Jaiprakash Kushwaha",
    },
    {
        name: "Dr. Neetu Singh",
    },
]

const jointsecs = [
    {
        name: "Dr. Vivek Pawar",

    },
    {
        name: "Dr. Himali Horo",
    }
]

const advcom = ['Prof. Shang Dai', 'Prof. Mika Sillanpaa', 'Prof. Roop Mahajan', 'Prof S. N. Upadhyay (Rtd.)', 'Prof. Anil Verma', 'Prof. V. C.Srivastava', 'Prof. Amit Dhiman', 'Prof. Narasimha Mangadoddy', 'Prof. Manojkumar C. Ramteke', 'Prof. R.K. Upadhyay', 'Prof. Girish M. Joshi', 'Prof. Raghvendra Gupta', 'Dr. Sunil Dhole', 'Dr. Sandip Patil']

export default function Committee() {
  return (
    <div className='committee' id='team'>
        <div className="wrapper">

            <div className="patrons">
                <div className="patron">
                    <img src={require("./images/padmakumarnair.jpg")} alt="" width={"60%"} />
                    <h2 className='patronhead'>Chief Patron</h2>
                    <h5 className='patronname'>Prof. Padmakumar Nair</h5>
                    <p className='patronpost'>Director, TIET</p>
                </div>
                <div className="patron" style={{marginTop: "300px"}}>
                <img src={require("./images/ajaybatish.jpg")} alt="" width={"60%"} />
                    <h2 className='patronhead'>Patron</h2>
                    <h5 className='patronname'>Prof. Ajay Batish</h5>
                    <p className='patronpost'>Deputy Director, TIET</p>
                </div>
            </div>

            <div className="othercom1">
                <h3>Core Team</h3>

                <h5 className="post">Chairperson</h5>
                <p className="name">Prof. Rajeev Meheta</p>

                <h5 className="post">Convener</h5>
                <p className="name">Dr. Avinash Chandra</p>

                <h5 className="post">Organizing Secretaries</h5>
                {Orgsecs.map((member) => (
                    <p className="name">{member.name}</p>
                ))}

                <h5 className="post">Joint Secretaries</h5>
                {jointsecs.map((member) => (
                    <p className="name">{member.name}</p>
                ))}
            </div>


            <div className="orgcom">
                <h1>ORGANIZING COMMITTEE</h1>

                <div className="orgcommembers">

                    {organizing.map((member, i) => (
                        <div className="orgcommember">
                            <img src={member.img} alt="" className='orgcommemberimg'/>
                            <div className='v-center'>
                                <h6>{member.name}</h6>
                                <p>{member.dept}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <div className="othercom">
                <div className="othercom1">
                    <h3>Advisory Committee</h3>
                    {advcom.map((name) => (
                        <p className="name">{name}</p>
                    ))}
                </div>
                <div className="othercom1">
                    <h3>Student Committee</h3>

                    <h5 className="post">Web Designers</h5>
                    <p className="name">Tithi Srivastava</p>
                    <p className="name">Akhilesh Bhardvaj</p>
                    <p className="name">Saanvi Mangla</p>
                    <p className="name">Arnav Gupta</p>

                    <h5 className="post">Brouchure Designers</h5>
                    <p className="name">Ishita Bharadwaaj</p>
                    <p className="name">Sudipta Bora</p>

                    <h5 className="post">Developers</h5>
                    <p className="name">Sharath Chandra</p>
                    <p className="name">Saaransh Gupta</p>
                </div>
            </div>
        </div>
    </div>
  )
}
