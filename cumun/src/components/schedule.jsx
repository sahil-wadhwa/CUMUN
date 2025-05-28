import React, { useState } from 'react';

const scheduleData = [
  {
    day: "Day 1 - August 8, 2025",
    events: [
      { time: "08:00 - 09:30", title: "Registration & Check-in", description: "Delegates arrive and complete registration at the conference venue" },
      { time: "10:00 - 11:30", title: "Opening Ceremony", description: "Official welcome by the Secretary-General and keynote address by distinguished guests" },
      { time: "11:45 - 13:00", title: "Committee Session I", description: "First formal session begins with roll call and agenda setting" },
      { time: "13:00 - 14:30", title: "Lunch Break", description: "Networking lunch for all delegates" },
      { time: "14:30 - 17:30", title: "Committee Session II", description: "Continuation of formal debate and working paper development" },
      { time: "18:00 - 20:00", title: "Welcome Reception", description: "Social event for delegates to network in an informal setting" }
    ]
  },
  {
    day: "Day 2 - August 9, 2025",
    events: [
      { time: "09:00 - 12:30", title: "Committee Session III", description: "Formal debate continues with working paper presentations" },
      { time: "12:30 - 13:30", title: "Lunch Break", description: "Lunch provided for all delegates" },
      { time: "13:30 - 17:00", title: "Committee Session IV", description: "Working papers are finalized and draft resolutions are introduced" },
      { time: "17:30 - 18:30", title: "Guest Lecture", description: "Special lecture by a diplomat or academic on current international affairs" },
      { time: "19:00 - 21:00", title: "Cultural Night", description: "Celebration of global cultures with performances and international cuisine" }
    ]
  },
  {
    day: "Day 3 - August 10, 2025",
    events: [
      { time: "09:00 - 12:00", title: "Committee Session V", description: "Final debate on draft resolutions and amendments" },
      { time: "12:00 - 13:00", title: "Lunch Break", description: "Final lunch for delegates" },
      { time: "13:00 - 15:30", title: "Committee Session VI", description: "Voting procedures and adoption of resolutions" },
      { time: "16:00 - 17:30", title: "Closing Ceremony", description: "Award presentation and closing remarks by the Secretary-General" },
      { time: "18:00 onwards", title: "Farewell Dinner", description: "Final networking opportunity and celebration of the conference's success" }
    ]
  }
];

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">Conference Schedule</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The three-day conference is packed with committee sessions, networking events, and engaging activities. Below is the detailed schedule for each day.
          </p>
        </div>

        {/* Day tabs */}
        <div className="flex flex-wrap justify-center mb-10">
          {scheduleData.map((day, index) => (
            <button
              key={index}
              className={`px-6 py-3 font-medium rounded-md mx-2 mb-2 transition-colors duration-300 ${
                activeDay === index 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-100 text-red-800 hover:bg-gray-200'
              }`}
              onClick={() => setActiveDay(index)}
            >
              {day.day.split(' - ')[0]}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">
            {scheduleData[activeDay].day}
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 ml-0.5"></div>
            
            {scheduleData[activeDay].events.map((event, index) => (
              <div key={index} className="relative mb-8 ml-8">
                {/* Timeline dot */}
                <div className="absolute -left-10 top-5 w-4 h-4 rounded-full bg-red-600"></div>
                
                <div className="bg-gray-50 rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-red-600">{event.title}</h4>
                    <span className="text-sm font-medium text-red-600 bg-red-100 px-3 py-1 rounded-full mt-2 sm:mt-0">
                      {event.time}
                    </span>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors duration-300"
          >
            Download Full Schedule
          </a>
        </div>
      </div>
    </section>
  );
};

export default Schedule;