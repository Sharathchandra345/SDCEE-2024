import React from 'react'
import "./Speakers.css"

export default function Speakers() {
  return (
    <div className="wrapper">

        <div className="speakers">
          <div>
            <h1>Keynote Speakers</h1>
          </div>

          <div className="speakercont">
            <div className="onespeaker">
                <div className="speakerimg"></div>
                <h3>NAME</h3>
                <h5>NAME</h5>
            </div>

            <div className="onespeaker">
                <div className="speakerimg"></div>
            </div>

            <div className="onespeaker">
                <div className="speakerimg"></div>
            </div>

          </div>
        </div>

    </div>
  )
}
