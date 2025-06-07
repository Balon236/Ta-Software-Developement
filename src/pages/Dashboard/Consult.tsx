import AppHeader from "../../layout/AppHeader"
export default function Consult(){
    return(
        <>
        <AppHeader title="Consultant Dashboard" subTitle="Consult a student"/>
        <div className="bg-white border border-brand-500 p-4">
            <p className="text-2xl font-bold text-brand-500 text-center">CLIENT CONSULATION FORM</p>
            <form>
                <div>
                    <p className="text-lg font-semibold text-brand-500">STUDENT INFO</p>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="mb-4">
                            <label  className="block text-xl font-medium text-gray-700 mb-2">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name"
    
                                className="w-full px-3 py-2 border  border-brand-500 rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                                                <div className="mb-4">
                            <label  className="block  text-md font-medium text-gray-700 mb-2">Class</label>
                            <select
                                name="class"
                                className="w-full px-3 py-2 border  border-brand-500 rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value={"Form One"}>Form One</option>
                                <option value={"Form Two"}>Form Two</option>
                            </select>
                        </div>
                                                <div className="mb-4">
                            <label  className="block  text-md font-medium text-gray-700 mb-2">Name</label>
                            <select
                                name="gender"
                                className="w-full px-3 py-2 border  border-brand-500 rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value={"Male"}>Male</option>
                                <option value={"Female"}>Female</option>
                            </select>
                        </div>
                
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="mb-4">
                            <label  className="block  text-md font-medium text-gray-700 mb-2">Student Came in for?</label>
                            <input 
                                type="text" 
                                id="studentFor" 
                                name="studentFor"
    
                                className="w-full px-3 py-2 border  border-brand-500 rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label  className="block text-md font-medium text-gray-700 mb-2">Score for Trauma Screening</label>
                            <input 
                                type="number" 
                                id="traumaScore" 
                                name="scoreforTrauma"
    
                                className="w-full px-3 py-2 border  border-brand-500 rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                                              
                
                    </div>
                </div>
                <div>
                    <p className="text-lg font-semibold text-brand-500">CONSULTANT INFO</p>
                     <div className="grid grid-cols-2 gap-6">
                        <div className="mb-4">
                            <label  className="block  text-md font-medium text-gray-700 mb-2">Name</label>
                            <input 
                                type="text" 
                                id="consultant Name" 
                                name="consultant Name"
    
                                className="w-full px-3 py-2 border  border-brand-500 rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label  className="block text-md font-medium text-gray-700 mb-2">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
    
                                className="w-full px-3 py-2 border  border-brand-500 rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                                              
                
                    </div>
                </div>
                <div>
                    <p className="text-lg font-semibold text-brand-500">REPORT ON CONSULTAION</p>
                    <textarea maxLength={1000} placeholder="Enter Text ....." className="w-full px-3 py-2 border  border-brand-500 rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                     <div className="flex justify-end gap-2">
                        <button className="bg-red-400 px-4 py-1 rounded-md text-white">Edit</button>
                        <button className="bg-brand-400 px-4 py-1 rounded-md text-white">Save</button>
                     </div>
                </div>
                <div>
                    <p className="text-lg font-semibold text-brand-500">FOLLOW UP MECHANISM</p>
                     <textarea maxLength={1000}  rows={5} className="w-full px-3 py-2 border  border-brand-500 rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                      <div className="flex justify-end gap-2">
                        <button className="bg-red-400 px-4 py-1 rounded-md text-white">Edit</button>
                        <button className="bg-brand-400 px-4 py-1 rounded-md text-white">Save</button>
                     </div>
                </div>
                <div>
                     <div className="mb-4">
                            <label  className="block text-xl font-medium text-gray-700 mb-2">Signature Code</label>
                            <input 
                                type="signature" 
                                id="signature" 
                                name="signature"
    
                                className="px-3 py-2 border  border-brand-500 rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label  className="block text-xl font-medium text-gray-700 mb-2">Date</label>
                            <input 
                                type="date" 
                                id="date" 
                                name="date"
    
                                className="px-3 py-2 border  border-brand-500 rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                </div>
                 <div className="flex justify-center">
                <button id="saveBtn" className="bg-blue-600 text-white px-16 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-200">
                    Submit
                </button>
            </div>
            </form>
        </div>
        </>
    )

}