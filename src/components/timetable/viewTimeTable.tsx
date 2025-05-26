import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

// Type Definitions
interface TimeSlot {
  id: string;
  label: string;
  time: string;
}

interface WeekDay {
  id: string;
  date: number;
  label: string;
  fullName: string;
  isToday?: boolean;
}

interface Event {
  id: number;
  title: string;
  subtitle: string;
  time: string;
  day: string;
  duration: number;
  color: string;
  textColor: string;
}

interface TimetableData {
  timeSlots: TimeSlot[];
  weekDays: WeekDay[];
  events: Event[];
}

// Props Interfaces
interface DateHeaderProps {
  day: WeekDay;
  isSelected: boolean;
  onClick: (dayId: string) => void;
}

interface TimeSlotProps {
  timeSlot: TimeSlot;
}

interface EventCardProps {
  event: Event;
  onClick: (event: Event) => void;
}

interface DayColumnProps {
  day: WeekDay;
  events: Event[];
  timeSlots: TimeSlot[];
  onEventClick: (event: Event) => void;
  onAddEvent: (dayId: string, time: string) => void;
}

// Sample data structure
const timetableData: TimetableData = {
  timeSlots: [
    { id: '8am', label: '8:00 AM', time: '8am' },
    { id: '9am', label: '9:00 AM', time: '9am' },
    { id: '10am', label: '10:00 AM', time: '10am' },
    { id: '11am', label: '11:00 AM', time: '11am' },
    { id: '12pm', label: '12:00 PM', time: '12pm' },
    { id: '1pm', label: '1:00 PM', time: '1pm' },
    { id: '2pm', label: '2:00 PM', time: '2pm' },
    { id: '3pm', label: '3:00 PM', time: '3pm' },
    { id: '4pm', label: '4:00 PM', time: '4pm' }
  ],
  
  weekDays: [
    { id: 'mon', date: 14, label: 'Mon', fullName: 'Monday' },
    { id: 'tue', date: 15, label: 'Tue', fullName: 'Tuesday', isToday: true },
    { id: 'wed', date: 16, label: 'Wed', fullName: 'Wednesday' },
    { id: 'thu', date: 17, label: 'Thu', fullName: 'Thursday' },
    { id: 'fri', date: 18, label: 'Fri', fullName: 'Friday' },
    { id: 'sat', date: 19, label: 'Sat', fullName: 'Saturday' },
    { id: 'sun', date: 20, label: 'Sun', fullName: 'Sunday' }
  ],

  events: [
    {
      id: 1,
      title: 'Morning Assembly',
      subtitle: 'All Students',
      time: '8am',
      day: 'mon',
      duration: 1,
      color: 'bg-blue-200',
      textColor: 'text-blue-800'
    },
    {
      id: 2,
      title: 'English Literature',
      subtitle: 'Room 101',
      time: '9am',
      day: 'mon',
      duration: 2,
      color: 'bg-purple-200',
      textColor: 'text-purple-800'
    },
    {
      id: 3,
      title: 'Break Time',
      subtitle: '15 min',
      time: '11am',
      day: 'tue',
      duration: 1,
      color: 'bg-green-200',
      textColor: 'text-green-800'
    },
    {
      id: 4,
      title: 'Mathematics',
      subtitle: 'Advanced Calculus',
      time: '10am',
      day: 'wed',
      duration: 2,
      color: 'bg-blue-200',
      textColor: 'text-blue-800'
    },
    {
      id: 5,
      title: 'Science Lab',
      subtitle: 'Physics Experiment',
      time: '1pm',
      day: 'thu',
      duration: 2,
      color: 'bg-purple-200',
      textColor: 'text-purple-800'
    },
    {
      id: 6,
      title: 'History',
      subtitle: 'World War II',
      time: '9am',
      day: 'fri',
      duration: 1,
      color: 'bg-cyan-200',
      textColor: 'text-cyan-800'
    },
    {
      id: 7,
      title: 'Study Hall',
      subtitle: 'Self Study',
      time: '2pm',
      day: 'fri',
      duration: 2,
      color: 'bg-purple-200',
      textColor: 'text-purple-800'
    },
    {
      id: 8,
      title: 'Geography',
      subtitle: 'Climate Change',
      time: '12pm',
      day: 'mon',
      duration: 1,
      color: 'bg-cyan-200',
      textColor: 'text-cyan-800'
    }
  ]
};

// Date Header Component
const DateHeader: React.FC<DateHeaderProps> = ({ day, isSelected, onClick }) => (
  <button
    onClick={() => onClick(day.id)}
    className={` p-3 rounded-lg transition-all w-30 ${
      day.isToday 
        ? 'bg-blue-600 text-white' 
        : isSelected 
          ? 'bg-brand-50 text-blue-600'
          : 'bg-brand-50 text-blue-60'
    }`}
  >
    <div className='flex justify-between items-center'>
      <span className="text-md font-medium">{day.label}</span>
      <span className="text-2xl font-bold ">{day.date}</span>
    </div>
    {day.isToday?
    <div className='text-xs text-start'>
        3 / 6 Tasks done
    </div>
    :
    <div className='text-xs text-start bg-brand-500 text-white p-2 rounded-full w-fit'>
      12
    </div>
    }
    
   
  </button>
);

// Time Slot Component
const TimeSlot: React.FC<TimeSlotProps> = ({ timeSlot }) => (
  <div className="h-16 flex items-center justify-center border-t border-gray-200 w-20 text-sm text-gray-600 bg-gray-50">
    {timeSlot.label}
  </div>
);


// Event Card Component

const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
  const getTimeLabel = (time: string, duration: number): string => {
    const hourMap: Record<string, number> = {
      '8am': 8, '9am': 9, '10am': 10, '11am': 11, '12pm': 12,
      '1pm': 13, '2pm': 14, '3pm': 15, '4pm': 16,
    };
    const start = hourMap[time];
    const end = start + duration;
    const format = (h: number) => {
      const ampm = h >= 12 ? 'PM' : 'AM';
      const displayHour = h > 12 ? h - 12 : h === 0 ? 12 : h;
      return `${displayHour}:00 ${ampm}`;
    };

    return `${format(start)} - ${format(end)}`;
  };

  return (
    <div
      onClick={() => onClick(event)}
      className={`
        ${event.color} ${event.textColor}
        p-2 rounded-md cursor-pointer hover:shadow-md transition-all
        border border-opacity-20 border-gray-400 text-xs
      `}
      style={{ 
        height: `${event.duration * 4}rem`,
        minHeight: '3rem'
      }}
    >
      <div className="font-semibold text-sm">{event.title}</div>
      <div>{event.subtitle}</div>
      <div className="text-[10px] mt-1 opacity-70">{getTimeLabel(event.time, event.duration)}</div>
    </div>
  );
};


// Day Column Component
const DayColumn: React.FC<DayColumnProps> = ({ 
  day, 
  events, 
  timeSlots, 
  onEventClick 
}) => {
  const dayEvents = events.filter(event => event.day === day.id);
  
  return (
    <div className="flex-1 min-w-0 border-l border-gray-100">
      <div className="space-y-0">
        {timeSlots.map(timeSlot => {
          const slotEvents = dayEvents.filter(event => event.time === timeSlot.time);
          
          return (
            <div key={timeSlot.id} className="h-16 relative border-t border-gray-200 px-1 py-0.5">
              {slotEvents.map(event => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  onClick={onEventClick}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};


// Main Timetable Component
const ViewTimetable: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>('tue');
  const [currentWeek, setCurrentWeek] = useState<string>('This Week');

  const handleEventClick = (event: Event): void => {
    alert(`Event: ${event.title}\nTime: ${event.time}\nRoom: ${event.subtitle}`);
  };

  const handleAddEvent = (day: string, time: string): void => {
    alert(`Add new event for ${day} at ${time}`);
  };

  const navigateWeek = (direction: 'prev' | 'next'): void => {
    setCurrentWeek(direction === 'prev' ? 'Previous Week' : 'Next Week');
  };

  return (
    <div className="max-w-7xl mx-auto bg-white p-6 border border-brand-500 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="border-b border-gray-200 p-6 rounded-md">
        <div className="flex items-center justify-between mb-6 py-5 px-2 bg-brand-50">
          <h1 className="text-xl font-bold text-gray-500">Time Table</h1>
          
          {/* Week Navigation */}
          <div className="flex items-center space-x-8">
            <div className='flex items-center space-x-1'>
   <button 
              onClick={() => navigateWeek('prev')}
              className="p-2 hover:bg-gray-200 bg-white rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
           <div 
              className="p-2 bg-white rounded-lg transition-colors"
            >
              Today
            </div>
            
            <button 
              onClick={() => navigateWeek('next')}
              className="p-2 hover:bg-gray-200 bg-white rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            </div>
         

             <div className="flex items-center space-x-2 bg-white rounded-md py-1">
              <span className="text-sm text-gray-600 p-2">This</span>
              <span className="text-sm font-semibold bg-brand-50 p-2 rounded-md">Week</span>
              <span className="text-sm text-gray-600 p-2">Month</span>
            </div>
            
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Add New Event
            </button>
          </div>
        </div>

        {/* Date Headers */}
        <div className="flex space-x-2 items-center">
          <div className="w-20">GMT +1</div> {/* Space for time column */}
          {timetableData.weekDays.map(day => (
            <div key={day.id} className="flex">
              <DateHeader 
                day={day}
                isSelected={selectedDay === day.id}
                onClick={setSelectedDay}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Timetable Grid */}
     <div className="flex">
  {/* Time Column */}
  <div className="w-20 flex flex-col">
    {timetableData.timeSlots.map(slot => (
      <TimeSlot key={slot.id} timeSlot={slot} />
    ))}
  </div>

  {/* Day Columns */}
  <div className="flex-1 grid grid-cols-7">
    {timetableData.weekDays.map(day => (
      <DayColumn
        key={day.id}
        day={day}
        events={timetableData.events}
        timeSlots={timetableData.timeSlots}
        onEventClick={handleEventClick}
        onAddEvent={handleAddEvent}
      />
    ))}
  </div>
</div>

    </div>
  );
};

export default ViewTimetable;