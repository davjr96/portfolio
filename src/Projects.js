import React, { Component } from "react";
import "./App.css";
import Project from "./Project";
class Projects extends Component {
  render() {
    return (
      <div>
        <Project
          img="portfolio/vagrades.png"
          title="VA Grades"
          subtitle="Full Stack Web Development"
          link="http://www.vagrades.com"
          why={`This project began when a friend realized that grade distribution data for all UVA classes was available through Freedom of Information Act Requests.
          When he obtained the data we saw how useful this data could be to students scheduling classes for next semester.
          From there we decided to take this publicly available information and publish it in an easily accessible format.`}
          description={`VA Grades started as a database of grade distributions for all UVA classes. From here we expanded to include courses
            at GMU and JMU. We also added a blog. All of the data is stored in a searchable and sortable table to allow users to easily find
            what they are looking for. Once the correct class is found a user can view the grade distribution by section/professor and see some statistics
            such as average GPA and standard deviation. There is also a visualization.`}
          technologies={`• Python Flask • MongoDB Atlas • D3js • Bootstrap • AWS EC2 • AWS Route 53 •`}
          takeaways={`This project gave me insight into developing large scale applications.
                      We are hosting a good amount of data (Almost 100k individual records) which is used by a lot of people.
                      As of summer 2017 we had about 8000 unique users, which is almost half of UVA's Undergraduate population!`}
          status={`Version 2 of vagrades.com is scheduled to be released in Q4 2017. This version will be a complete re-write using NodeJS, ReactJS, and PostgresSQL.`}
        />
        <hr />
        <Project
          img="portfolio/snapstream.png"
          title="SnapStream"
          subtitle="Mobile app and Back-End API Development"
          link=""
          why={`This was a project for the Hack UVA 2017 hackathon.`}
          description={`This app allows the sharing of photos by location. It is intended to be used for events so that everyone who attended
            an event can easily share photos. I was in charge of writing the back end for our app. The Back-End consisted of an AWS EC2 instance
            running a flask webserver. The flask webserver handled the creation of events and uploading of pictures. The pictures were stored in
            an AWS S3 bucket.`}
          technologies={`• Python Flask • MongoDB Atlas • AWS EC2 • AWS Route 53 • AWS S3 •`}
          takeaways={`This project was a good intro to developing on a team under a time crunch. We had 24 hours to complete the application.`}
          status={`Completed`}
        />
        <hr />
        <Project
          img="portfolio/timer.jpg"
          title="Alpine Ski Racing Timer"
          subtitle="Full Stack Web Development and Embedded Systems"
          link="http://www.vassttimes.com"
          why={`I’m a member of UVAs Ski racing team and during the winter we practice twice a week at Wintergreen Mountain.
            As the team has been getting more and more competitive recently with some very good results in national competition we have been looking into setting up a timing system in order to quantify improvement at practices.
            Traditional Timing systems cost thousands of dollars so I set out to build one using off the shelf components.`}
          description={`The system had a couple of requirements. It must be able to precisely time racers from top to the bottom of the course and differentiate between them.
            It must also be easily set up and taken down along with waterproof and resilient to sub 0 temperatures.
            I decided to use a wireless link between the finish line and the start line in order for the system to be easily set up and adapt to different course lengths.
            I chose the RFM96W LoRa Radio from Adafruit.com. These units were chosen due to their low cost, long range, and widely available example code.
            For the finish line I was able to get an “Adafruit Feather” with one of these radios built in. This had an Arduino compatible MCU already built in.
            To round off the finish line I used an IR Beam as a tripwire.
            This would detect when racers crossed the finish line, and ping the start gate accordingly.
            The parts were placed in a waterproof enclosure on a breadboard for testing, and then secured to a Slalom Ski Gate to hold it in place at the bottom of the course.
            The start gate was much more complicated. It needed to detect when a race started the course, identify the racer, and record the time.
            For the brains of the start gate I chose an ESP8266 “Thing”.
            This MCU was chosen as it was Arduino compatible, but also includes Wi-Fi.
            This would allow me to upload the times to the internet, so laps could be checked on a cell phone on the way back to the top of the course.
            I also used another Adafruit radio Module and a Sparkfun Open Log at the top.
            When a racer started the course, the time was noted, when they cross the finish line the radio relayed to the start gate and the time was finished.
            The time is then uploaded to the custom NodeJS webserver using the Arduino library over a Wi-Fi hotspot. Racers could then see their times.`}
          technologies={`• NodeJS • MongoDB Atlas • ReactJS • AWS EC2 • AWS Route 53 • ESP8266 • Custom Circuitry • Embedded C •`}
          takeaways={`This project was my first experience developing an IOT device. I learned a lot about interfacing embedded systems with the internet.
            It was also my first Node and React project and tought me a lot about both of those technologies.`}
          status={`By winter 2017-2018 I would like to build a regulation start gate (Pole tripped by the racer’s shins) and have an RFID based recognition system, so racers names would show next to their times on the Website.`}
        />
        <hr />
        <Project
          img="portfolio/Screenshots.jpg"
          title="Tassa"
          subtitle="Mobile Web Development"
          link="https://play.google.com/store/apps/details?id=com.tassa"
          why={`A friend came to me with an idea for an app which allows users to find a place to meet other people.
            I also wanted to learn Android Development and thus Tassa was born.`}
          description={`Tassa is a social app which allows groups of friends to find a convenient location to meet.
            It allows for up to three locations to be entered and it will find places by category that is in between the entered locations.
            The Android version Tassa was written entirely in Java using Android Studio.
            The iOS version was written using Xamarin Studio and C#.
            Tassa uses Factual's API for place search and Google's Places API for the geocoding of addresses.`}
          technologies={`• Android Java • Google Maps API • Factual API • Xamarin Studio •`}
          takeaways={`This project was my first experience developing a mobile app.
            I started from nothing and was able to develop this app. `}
          status={`Tassa is currently available on the Google Play Store`}
        />
        <hr />
        <Project
          img="portfolio/Door.jpg"
          title="Handicap Door Opener"
          subtitle="Mobile App Development and Embedded Systems Design"
          link="https://news.virginia.edu/content/students-do-not-become-engineers-sitting-lectures"
          why={`This was the final team project for my Intro to Engineering course first during my first year at UVA.
            Our assignment was to improve accessibility.
            During our initial audit we found the doors at UVA to be heavy and difficult to open, especially for a handicapped person.`}
          description={`We decided to tackle this issue two ways.
            Through a recessed floor mounted button designed to be activated by a wheelchair wheel or crutch, but not feet, and through a mobile application which could remotely open doors.
            I was in charge of the circuit and software design.
            The floor button contained a series of switches which activated when pressed.
            These were wired into a Raspberry Pi Single Board computer.
            Code written in C on the raspberry pi then triggered the door opening mechanism.
            The Android app was developed in Java using Android Studio.
            Its interface was based on Google Maps, with a marker located over each door.
            When the marker was clicked on, another screen with an "open" button would appear.
            When this button was pressed a signal was sent to the raspberry pi and the corresponding door opener triggered.
            The location and data for each door was stored on an Amazon Webservices Database, and loaded each time the app was opened.
            Our project was featured in UVaToday.`}
          technologies={`• Android Java • Google Maps API • Raspberry PI • Embedded C •`}
          takeaways={`This was my first major project in College and I learned a lot about working on a team with structured deadlines. `}
          status={`Completed`}
        />
        <hr />
        <Project
          img="portfolio/Charger.JPG"
          title="THERMOELECTRIC CHARGER"
          subtitle="Circuit Design"
          why={`This project was for my High School science fair.
            It was inspired during an extended power outage when my family was looking for a way to easily charge phones.`}
          description={`This device enables you to charge cell phones using only a heat source.
            The picture shows the top of the device where the circuitry lies.
            The Purple PCB was custom designed by me using Eagle CAD software.
            It contains a USB charging port to plug phones into, an LED indicator light, and USB Charging circuitry.
            The red board is a boost regulator. This delivers the required 5V to the USB port, from the ~1V that the Thermoelectric Cooler (TEC) generates.
            A TEC on the bottom produces a heat differential between its two sides when electricity is applied using the Peltier effect.
            The Seebeck effect is the opposite phenomenon- when a temperature differential exists between the sides of the device, electricity is produced.
            I use the voltage produced by the Seebeck effect to charge a cell phone.
            Surrounding the TEC is a heatsink attached to a custom built enclosure.
            The TEC is attached to the heatsink with thermally conductive glue.`}
          technologies={`• Custom PCB • Boost Voltage Regulator •`}
          takeaways={`This projet was a good intro into the scientific process. It took a lot of trial an error to get a fuctioning version.`}
          status={`Completed`}
        />
      </div>
    );
  }
}

export default Projects;
