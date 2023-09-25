import React from 'react'
import "./Speakers.css"

const speakers = [
    {
        name: "Prof. Jhuma Sadhukhan",
        position: "Director of Research and Innovation",
        department: "Environmental, Energy and Chemical Engineering, University of Surrey",
        image: require("./images/Jhuma Sadhukhan.jpg"),
        place: "United Kingdom",
    },
    {
        name: "Prof. Animesh Jha",
        position: "Applied Materials Science",
        department: "School of Chemical and Process Engineering",
        image: require("./images/animeshjha.jpg"),
        place: "United Kingdom",
    },
    {
        name: "Dr. Fulvia Chiampo",
        position: "Associate Professor",
        department: "Department of Applied Science and Technology",
        image: require("./images/Fulvia Chiampo.jpg"),
        place: "Italy",
    },
    {
        name: "Prof. Vimal Chandra Srivastava",
        position: "G B Pant Institute Chair Professor and Dean (International Relations)",
        department: "Indian Institute of Technology Roorkee",
        image: require("./images/Vimal Chandra Srivastava.jpg"),
        place: "India",
    },
    {
        name: "Prof. Anil Verma",
        position: "Chemical Engineering Department",
        department: "Indian Institute of Technology Delhi",
        image: require("./images/Prof. Anil Verma.jpg"),
        place: "India",
    },
    {
        name: "Prof. Amit Kumar Dhiman",
        position: "Department of Chemical Engineering",
        department: "Indian Institute of Technology Roorkee",
        image: require("./images/amitkumardhiman.jpg"),
        place: "India",
    },
    {
        name: "Prof. Kishalay Mitra",
        position: "Department of Chemical Engineering",
        department: "Indian Institute of Technology Hyderabad",
        image: require("./images/Kishalay_Mitra.jpg"),
        place: "India",
    },
    {
        name: "Prof. Chinmay Ghoroi",
        position: "Chemical Engineering Department",
        department: "Indian Institute of Technology Gandhinagar",
        image: require("./images/Chinmay Ghoroi.jpg"),
        place: "India",
    },
    {
        name: "Dr. Prasun Roy",
        position: "Scientist-F",
        department: "Centre for Fire, Explosive and Environment Safety",
        image: require("./images/Prasun Roy.jpg"),
        place: "India",
    },
    {
        name: "Dr. Bhanu Pratap Singh",
        position: "Senior Principal Scientist and Deputy Head",
        department: "Advanced Carbon Products and Metrology Section",
        image: require("./images/Bhanu Pratap Singh.jpg"),
        place: "India",
    },
    {
        name: "Dr. H. J. Pant",
        position: "Outstanding Scientist and Head",
        department: "Isotope and Radiation Application Division",
        image: require("./images/H.J.Pant.jpg"),
        place: "India",
    },
    {
        name: "Dr. Ram Chandar",
        position: "Director",
        department: "Huwel Lifesciences",
        image: require("./images/Ram Chandar.jpg"),
        place: "India",
    },
    {
        name: "Dr. Sandip Patil",
        position: "Director",
        department: "E-Spin Nanotech Pvt. Ltd.",
        image: require("./images/Sandip Patil.jpg"),
        place: "India",
    },
    {
        name: "Dr. Sachin Kumar",
        position: "Deputy Director/Scientist",
        department: "Sardar Swaran Singh National Institute of Bio-Energy",
        image: require("./images/Sachin-kumar.jpg"),
        place: "India",
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
                        <img src={speaker.image} className="speakerimg"/>
                        <h3>{speaker.name}</h3>
                        <h6>{speaker.position}</h6>
                        <h6>{speaker.department}</h6>
                        <h6>{speaker.place}</h6>
                    </div>

                ))
            }
            

          </div>
        </div>

    </div>
  )
}
