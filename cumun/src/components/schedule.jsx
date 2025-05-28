import React, { useState } from "react";

const scheduleData = [
  {
    day: "Day 1 - August 8, 2025",
    events: [
      {
        time: "08:00 - 09:30",
        title: "Registration & Check-in",
        description: "Delegates arrive and complete registration at the conference venue",
      },
      {
        time: "10:00 - 11:30",
        title: "Opening Ceremony",
        description: "Official welcome by the Secretary-General and keynote address by distinguished guests",
      },
      {
        time: "11:45 - 13:00",
        title: "Committee Session I",
        description: "First formal session begins with roll call and agenda setting",
      },
      {
        time: "13:00 - 14:30",
        title: "Lunch Break",
        description: "Networking lunch for all delegates",
      },
      {
        time: "14:30 - 17:30",
        title: "Committee Session II",
        description: "Continuation of formal debate and working paper development",
      },
      {
        time: "18:00 - 20:00",
        title: "Welcome Reception",
        description: "Social event for delegates to network in an informal setting",
      },
    ],
  },
  {
    day: "Day 2 - August 9, 2025",
    events: [
      {
        time: "09:00 - 12:30",
        title: "Committee Session III",
        description: "Formal debate continues with working paper presentations",
      },
      {
        time: "12:30 - 13:30",
        title: "Lunch Break",
        description: "Lunch provided for all delegates",
      },
      {
        time: "13:30 - 17:00",
        title: "Committee Session IV",
        description: "Working papers are finalized and draft resolutions are introduced",
      },
      {
        time: "17:30 - 18:30",
        title: "Guest Lecture",
        description: "Special lecture by a diplomat or academic on current international affairs",
      },
      {
        time: "19:00 - 21:00",
        title: "Cultural Night",
        description: "Celebration of global cultures with performances and international cuisine",
      },
    ],
  },
  {
    day: "Day 3 - August 10, 2025",
    events: [
      {
        time: "09:00 - 12:00",
        title: "Committee Session V",
        description: "Final debate on draft resolutions and amendments",
      },
      {
        time: "12:00 - 13:00",
        title: "Lunch Break",
        description: "Final lunch for delegates",
      },
      {
        time: "13:00 - 15:30",
        title: "Committee Session VI",
        description: "Voting procedures and adoption of resolutions",
      },
      {
        time: "16:00 - 17:30",
        title: "Closing Ceremony",
        description: "Award presentation and closing remarks by the Secretary-General",
      },
      {
        time: "18:00 onwards",
        title: "Farewell Dinner",
        description: "Final networking opportunity and celebration of the conference's success",
      },
    ],
  },
];

const IconCalendar = () => (
  <svg
    className="w-6 h-6 text-red-600 mr-2"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    ></path>
  </svg>
);

const IconClock = () => (
  <svg
    className="w-5 h-5 text-red-600 mr-1"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
);

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-red-600 mb-2 tracking-wide">
            Conference Schedule
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-6 animate-pulse"></div>
          <p className="text-gray-700 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            The three-day conference is packed with committee sessions, networking
            events, and engaging activities. Below is the detailed schedule for each day.
          </p>
        </div>

        {/* Day Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {scheduleData.map((day, idx) => (
            <button
              key={idx}
              onClick={() => setActiveDay(idx)}
              className={`flex items-center space-x-2 px-5 py-2 rounded-md transition-colors duration-300
                ${
                  activeDay === idx
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-red-50 text-red-600 hover:bg-red-100"
                }
                focus:outline-none focus:ring-2 focus:ring-red-600`}
              aria-current={activeDay === idx ? "true" : undefined}
            >
              <IconCalendar />
              <span className="font-medium text-sm sm:text-base">{day.day.split(" - ")[0]}</span>
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto relative">
          <h3 className="text-2xl font-medium text-red-600 mb-8 text-center tracking-wide">
            {scheduleData[activeDay].day}
          </h3>

          <div className="relative border-l-2 border-red-300 pl-10">
            {scheduleData[activeDay].events.map((event, idx) => (
              <div
                key={idx}
                className="mb-10 relative group cursor-pointer"
              >
                {/* Dot */}
                <span className="absolute -left-5 top-2 w-5 h-5 rounded-full border-4 border-red-600 bg-white transition-transform group-hover:scale-110"></span>

                <div className="bg-red-50 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium text-red-600 tracking-tight">
                      {event.title}
                    </h4>
                    <div className="flex items-center text-red-600 font-medium text-sm">
                      <IconClock />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md shadow-md transition-colors duration-300"
          >
            Download Full Schedule
          </a>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
