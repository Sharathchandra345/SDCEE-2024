import React from "react";
import "./Comittee.css";

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
};

const Convener = {
  name: "Dr. Avinash Chandra",
};

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
];

const jointsecs = [
  {
    name: "Dr. Vivek Pawar",
  },
  {
    name: "Dr. Himali Horo",
  },
];

const advcom = [
  { name: "Prof. Shang Dai", department: "University of Leeds, UK" },
  { name: "Prof. Animesh Jha", department: "University of Leeds, UK" },
  { name: "Prof. Ali Hassanpour", department: "University of Leeds, UK" },
  { name: "Prof. Mika Sillanpaa", department: "Aarhus University, Denmark" },
  { name: "Prof. Roop Mahajan", department: "Virginia Tech, USA" },
  {
    name: "Prof S.N. Upadhyay (Rtd.)",
    department: "IIT(BHU), Varanasi, INDIA",
  },
  { name: "Prof. Anil Verma", department: "IIT Delhi, INDIA" },
  { name: "Prof. V.C. Srivastava", department: "IIT Roorkee, INDIA" },
  { name: "Prof. Amit Dhiman", department: "IIT Roorkee, INDIA" },
  { name: "Prof. Narasimha Mangadoddy", department: "IIT Hyderabad, INDIA" },
  {
    name: "Prof. Rajat Chakrabarty",
    department: "Jadavpur University, Kolkata, INDIA",
  },
  { name: "Dr. Bhanu Pratap Singh", department: "CSIR-NPL, New Delhi, INDIA" },
  {
    name: "Dr. Prasun Roy",
    department: "Scientist-F, CFEES, DRDO, Delhi, INDIA",
  },
  { name: "Dr. H.J. Pant", department: "Head, IRAD, BARC, Mumbai, INDIA" },
  { name: "Prof. Manoj K.C. Ramteke", department: "IIT Delhi, INDIA" },
  { name: "Prof. Ajay Mandal", department: "IIT(ISM) Dhanbad, INDIA" },
  { name: "Prof. Chinmay Ghoroi", department: "IIT Gandhinagar, INDIA" },
  { name: "Prof. R.K. Upadhyay", department: "IIT(BHU), Varanasi, INDIA" },
  {
    name: "Prof. G. M. Joshi",
    department: "ICT, Mumbai (Marathwada Jalna Campus), INDIA",
  },
  { name: "Prof. Raghvendra Gupta", department: "IIT Guwahati, INDIA" },
  {
    name: "Dr. Raj Kumar Arya",
    department: "Dr. B.R. Ambedkar, NIT Jalandhar, INDIA",
  },
  { name: "Dr. Arvind Kumar Gautam", department: "NIT Hamirpur, INDIA" },
  {
    name: "Dr. S. Kumar",
    department: "Dy. Director, SSN Inst. of Bioenergy, Kapurthala, INDIA",
  },
  {
    name: "Dr. Sunil Dhole",
    department: "CEOs, Chemdist Group of Companies, INDIA",
  },
  {
    name: "Dr. Sandip Patil",
    department: "Director, E-Spin Nanotech, Kanpur, INDIA",
  },
  {
    name: "Dr. Ammu Prhashanna",
    department: "Principal Scientist, Mondelez Int., NY, USA",
  },
  {
    name: "Dr. Ram Chandar",
    department: "Director, Huwel Lifesciences, Hyderabad, INDIA",
  },
];

export default function Committee() {
  return (
    <div className="committee" id="team">
      <div className="wrapper">
        <div className="patrons">
          <div className="patron">
            <img
              src={require("./images/padmakumarnair.jpg")}
              alt=""
              width={"60%"}
            />
            <h2 className="patronhead">Chief Patron</h2>
            <h5 className="patronname">Prof. Padmakumar Nair</h5>
            <p className="patronpost">Director, TIET</p>
          </div>
          <div className="patron" style={{ marginTop: "300px" }}>
            <img
              src={require("./images/ajaybatish.jpg")}
              alt=""
              width={"60%"}
            />
            <h2 className="patronhead">Patron</h2>
            <h5 className="patronname">Prof. Ajay Batish</h5>
            <p className="patronpost">Deputy Director, TIET</p>
          </div>
        </div>

        <div className="orgcom">
          <h1>ORGANIZING COMMITTEE</h1>

          <div className="orgcommembers">
            {organizing.map((member, i) => (
              <div className="orgcommember">
                <img src={member.img} alt="" className="orgcommemberimg" />
                <div>
                    <h5>{member.name}</h5>
                    <p>{member.dept}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="orgcom">
          <h1>ORGANIZING COMMITTEE</h1>

          <div className="orgcommembers">
            {organizing.map((member, i) => (
              <div className="orgcommember">
                <img src={member.img} alt="" className="orgcommemberimg" />
                <div>
                    <h5>{member.name}</h5>
                    <p>{member.dept}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="othercom">
          <div className="othercom1">
            <h3>Advisory Committee</h3>
            <div className="committee-list">
              {advcom.map((person, index) => (
                <div key={index} className="committee-item">
                  <p className="name-department">
                    <span className="name-adv">
                      <strong>{person.name}</strong>
                    </span>
                    ,{" "}
                    <span className="department-adv">{person.department}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="othercom1">
            <h3>Student Committee</h3>

            <h5 className="post">Web Designers</h5>
            <p className="name">Tithi Srivastava</p>
            <p className="name">Akhilesh Bhardwaj</p>
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
  );
}
