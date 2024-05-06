import React, { Fragment } from "react";
import bgImg from "../bgImg.jpg" 

export default function AboutComponent() {
  const events = [
    {
      heading: "B.Tech",
      subHeading: "GGSIPU, Computer Science Engineering",
      grade: "9.2 CGPA",
      direction: "right",
    },
    {
      heading: "AISSCE (Science)",
      subHeading: "Modern Public School [CBSE], Engineering with CS",
      grade: "8.8 CGPA",
      direction: "left",
    },
    {
      heading: "AISSE",
      subHeading: "Modern Public School [CBSE]",
      grade: "9.4 CGPA",
      direction: "right",
    },
  ];
  const Professional = [
    {
      heading: "Technology Intern",
      subHeading: "TEC-DoT | Ministry of Communications",
      grade: (
        <div>
          Testing and validation of Quantum Key Distribution System. <br />
          Compilation of ongoing standardization activities at ITU-T, IEEE, ISO,
          ETSI etc in the area of Quantum Technology.
          <br />
          Addressed PPP-MII complaint cases and WTO enquiries.
        </div>
      ),
      direction: "right",
    },
    {
      heading: "Android App Developer",
      subHeading: "SmartBridge",
      grade: (
        <div>
          Developed Kotlin based android applications
          <br />
          Handled Jetpack Compose, MVVM architecture frameworks <br />
          App Lifecycle management <br />
          UI/UX development
        </div>
      ),
      direction: "left",
    },
  ];

  return (
    <div className="flex flex-col gap-y-3 w-full my-4" style={{backgroundImage: bgImg}}>
      <h1 style={{ textAlign: "center", color: "darkslategray" }}>
        <u>Education</u>
      </h1>
      {events.map((event, key) => (
        <Fragment key={key}>
          <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center  mx-auto">
            {event.direction === "left" && (
              <EventCard
                heading={event.heading}
                subHeading={event.subHeading}
                grade={event.grade}
              />
            )}
            <Pillar />
            {event.direction === "right" && (
              <EventCard
                heading={event.heading}
                subHeading={event.subHeading}
                grade={event.grade}
              />
            )}
          </div>
          {key < events.length - 1 && <Circle />}
        </Fragment>
      ))}
      <br />
      <h1 style={{ textAlign: "center", color: "darkslategray" }}>
        <u>Professional Experience</u>
      </h1>
      {Professional.map((profess, key) => (
        <Fragment key={key}>
          <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center  mx-auto">
            {profess.direction === "left" && (
              <EventCard
                heading={profess.heading}
                subHeading={profess.subHeading}
                grade={profess.grade}
              />
            )}
            <Pillar />
            {profess.direction === "right" && (
              <EventCard
                heading={profess.heading}
                subHeading={profess.subHeading}
                grade={profess.grade}
              />
            )}
          </div>
          {key < events.length - 1 && <Circle />}
        </Fragment>
      ))}
    </div>
  );
}

const Circle = () => {
  return <div className="rounded-full w-4 h-4 bg-stone-500 mx-auto"></div>;
};

const Pillar = () => {
  return (
    <div className="rounded-t-full rounded-b-full w-2 h-full bg-stone-500 mx-auto"></div>
  );
};

const EventCard = ({ heading, subHeading, grade }) => {
  return (
    <div className="flex flex-col gap-y-2 border shadow-md rounded-xl p-4">
      <div className="text-gray-800 font-bold text-lg border-b">{heading}</div>
      <div className="text-lg text-gray-700">{subHeading}</div>
      <div className="text-base text-sky-950 ">
        <i>{grade}</i>
      </div>
    </div>
  );
};

/*   return (
    
      <div class="edu">
        <h1>Professional Experiences</h1>
        <ul>
          <li>
            <b>Technology Intern</b>,
            <br /> TEC-DoT | Ministry of Communications
            <br />
            <ul>
              <li>
                Testing and validation of Quantum Key Distribution System.
              </li>
              <li>
                Compilation of ongoing standardization activities at ITU-T,
                IEEE, ISO, ETSI etc in the area of Quantum Technology.{" "}
              </li>
              <li>Addressed PPP-MII complaint cases and WTO enquiries.</li>
            </ul>
          </li>
          <br />
          <li>
            <b>Android App Developer</b>,
            <br />
            SmartBridge
            <br />
            <ul>
              <li>
                Developed Kotlin based applications with required features
              </li>
              <li>Tested App functionality</li>
              <li>Designed frontend section</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
 */
