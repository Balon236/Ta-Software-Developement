export default function AddNew(){
    return (
        <>
        <div className="w-full border border-brand-500 p-10 bg-white ">
            <p className="text-2xl text-center text-brand-500">Enter New Details of the weight</p>
            <div className="border border-gray-300 p-10 mt-5 px-auto w-full ">
                <div className="mx-auto mb-4">
                    <label  className="block text-xl font-medium text-gray-700 mb-2">Weight</label>
                    <input 
                        type="number" 
                        id="weight" 
                        name="weight"
                        placeholder="Enter New Weight"
                        className="w-full px-3 py-2 border  border-brand-500 rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="mx-auto mb-4">
                    <label  className="block text-xl font-medium text-gray-700 mb-2">Date</label>
                    <input 
                        type="date" 
                        id="date" 
                        name="date"
                        placeholder=""
                        className="w-full px-3 py-2 border  border-brand-500 rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="mx-auto mb-4">
                    <label  className="block text-xl font-medium text-gray-700 mb-2">Taken By</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        placeholder="Enter your name"
                        className="w-full px-3 py-2 border  border-brand-500 rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
               <div className="flex justify-center">
                <button id="saveBtn" className="bg-blue-600 text-white px-16 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-200">
                    Save
                </button>
            </div>

            </div>
        </div>
        </>
    )
}