export default function AddSchedule(){
    return (
        <>
         <div className=" mx-auto text-gray-600">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h1 className="text-xl font-semibold text-gray-600 mb-6">Add New Schedule</h1>
            
            <form className="space-y-6">
              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label  className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                        <input 
                            type="text" 
                            id="title" 
                            name="title"
                            placeholder="Exercise"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label  className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                        <select 
                            id="type" 
                            name="type"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Event</option>
                            <option value="meeting">Meeting</option>
                            <option value="appointment">Appointment</option>
                            <option value="reminder">Reminder</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label  className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                        <input 
                            type="text" 
                            id="date" 
                            name="date"
                            placeholder="Friday 20, March 2024"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label  className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                        <div className="flex items-center space-x-2">
                            <input 
                                type="text" 
                                id="time-from" 
                                name="time-from"
                                placeholder="8:00 AM"
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <span className="text-gray-500 font-medium">TO</span>
                            <input 
                                type="text" 
                                id="time-to" 
                                name="time-to"
                                placeholder="10:00 AM"
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label  className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                        <textarea 
                            id="description" 
                            name="description"
                            rows={1}
                            placeholder="The workout will include: biceps exercises, chest triceps, and light yoga"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select Manager</label>
                        <select 
                            id="manager" 
                            name="manager"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Bsate Lastic May</option>
                            <option value="john-doe">John Doe</option>
                            <option value="jane-smith">Jane Smith</option>
                            <option value="mike-johnson">Mike Johnson</option>
                        </select>
                    </div>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label  className="block text-sm font-medium text-gray-700 mb-2">Select Class</label>
                        <select 
                            id="class" 
                            name="class"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Class name</option>
                            <option value="yoga">Yoga Class</option>
                            <option value="fitness">Fitness Class</option>
                            <option value="aerobics">Aerobics Class</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select Speciality</label>
                        <select 
                            id="speciality" 
                            name="speciality"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Enter speciality</option>
                            <option value="cardio">Cardio</option>
                            <option value="strength">Strength Training</option>
                            <option value="flexibility">Flexibility</option>
                            <option value="weight-loss">Weight Loss</option>
                        </select>
                    </div>
                </div>

               
                <div className="pt-4">
                    <button 
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    </div>
        </>
    )
}