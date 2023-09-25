import React from 'react'
import "./Speakers.css"

const speakers = [
    {
      name: "Prof. Jhuma Sadhukhan",
      position: "Director of Research and Innovation",
      department: "Environmental, Energy and Chemical Engineering",
      img: require("./images/Jhuma Sadhukhan.jpg"),
    },
    {
      name: "Prof. Animesh Jha",
      position: "Applied Materials Science",
      department: "School of Chemical and Process Engineering",
      img: require("./images/animeshjha.jpg"),
    },
    {
      name: "Dr. Fulvia Chiampo",
      position: "Associate Professor",
      department: "Department of Applied Science and Technology",
      img: require("./images/Fulvia Chiampo.jpg"),
    },
    {
        name: "Prof. Vimal Chandra Srivastava",
        position: "G B Pant Institute Chair Professor and Dean (International Relations)",
        department: "Indian Institute of Technology Roorkee",
        img: require("./images/Vimal Chandra Srivastava.jpg"),
    },
    {
      name: "Prof. Anil Verma",
      position: "Chemical Engineering Department",
      department: "Indian Institute of Technology Delhi",
      img: require("./images/Prof. Anil Verma.jpg"),
    },
    {
      name: "Prof. Amit Kumar Dhiman",
      position: "Department of Chemical Engineering",
      department: "Indian Institute of Technology Roorkee",
      img: require("./images/amitkumardhiman.jpg"),
    },
    {
      name: "Prof. Kishalay Mitra",
      position: "Department of Chemical Engineering",
      department: "Indian Institute of Technology Hyderabad",
      img: require("./images/Kishalay_Mitra.jpg"),
    },
    {
      name: "Prof. Chinmay Ghoroi",
      position: "Chemical Engineering Department",
      department: "Indian Institute of Technology Gandhinagar",
      img: require("./images/Chinmay Ghoroi.jpg"),
    },
    {
      name: "Dr. Prasun Roy",
      position: "Scientist-F",
      department: "Centre for Fire, Explosive and Environment Safety",
      img: require("./images/Prasun Roy.jpg"),
    },
    {
      name: "Dr. Bhanu Pratap Singh",
      position: "Senior Principal Scientist and Deputy Head",
      department: "Advanced Carbon Products and Metrology Section",
      img: require("./images/Bhanu Pratap Singh.jpg"),
    },
    {
      name: "Dr. H. J. Pant",
      position: "Outstanding Scientist and Head",
      department: "Isotope and Radiation Application Division",
      img: require("./images/H.J.Pant.jpg"),
    },
    {
      name: "Dr. Ram Chandar",
      position: "Director",
      department: "Huwel Lifesciences",
      img: require("./images/Ram Chandar.jpg"),
    },
    {
      name: "Dr. Sandip Patil",
      position: "Director",
      department: "E-Spin Nanotech Pvt. Ltd.",
      img: require("./images/Sandip Patil.jpg"),
    },
    {
        name: "Dr. Sachin Kumar",
        position: "Deputy Director/Scientist",
        department: "Sardar Swaran Singh National Institute of Bio-Energy",
        img: require("./images/Sachin-kumar.jpg"),
      },
  ];
  
  

export default function Speakers() {
  return (
    <div className="wrapper">

        <div className="speakers" id='speakers'>
          <div>
            <h1>Keynote Speakers</h1>
          </div>

          <div className="speakercont">
            {
                speakers.map( (speaker) => (

                    <div className="onespeaker">
                        <img src={speaker.img} className="speakerimg"/>
                        <h3>{speaker.name}</h3>
                        <h6>{speaker.position}</h6>
                        <h6>{speaker.department}</h6>
                    </div>

                ))
            }
            

          </div>
        </div>

    </div>
  )
}
