import { useState } from "react"

export default function RightProfile(){
      const [data, setData] = useState(
        {
            name:"Balon leslie",
            age: 21,
            dob: "21/03/2005",
            phone:"678-89-77-54",
            home:"Simbock",
            division:"Fako Division",
            religion: "Christian"
        })

    return (
        <div className="bg-white w-[68%] rounded-md">
            <div className="grid grid-cols-3 gap-6 p-4">

                <div className="space-y-4">
                    <div className="text-sm font-semibold text-blue-600  pb-1">
                        DEMOGRAPHIC DATA
                    </div>
                    
                    <div className="space-y-3 text-sm  border border-gray-200 p-2">
                        <div className="space-y-1">
                            <div className="text-gray-600">Full name:</div>
                            <div className="text-brand-500">{data.name}</div>
                        </div>
                        
                        <div className="space-y-1">
                            <div className="text-gray-600">Age:</div>
                            <div className="text-brand-500">{data.age}</div>
                        </div>
                        
                        <div className="space-y-1">
                            <div className="text-gray-600">Date of Birth:</div>
                            <div className="text-brand-500">{data.dob}</div>
                        </div>
                        
                        <div className="space-y-1">
                            <div className="text-gray-600">Phone number:</div>
                            <div className="text-brand-500">{data.phone}</div>
                        </div>
                        
                        <div className="space-y-1">
                            <div className="text-gray-600">Home Address:</div>
                            <div className="text-brand-500">{data.home}</div>
                        </div>
                        
                        <div className="space-y-1">
                            <div className="text-gray-600">Division:</div>
                            <div className="text-brand-500">{data.division}</div>
                        </div>
                        
                        <div className="space-y-1">
                            <div className="text-gray-600">Religion:</div>
                            <div className="text-brand-500">{data.religion}</div>
                        </div>
                    </div>
                </div>


                <div className="space-y-4">
                    <div className="text-sm font-semibold text-blue-600  pb-1">
                        PHYSICAL EXAMINATION
                    </div>
                    
                    <div className="space-y-1 text-sm  border border-gray-200 bg-brand-100 p-2 pl-4">
                        <div className="space-y-1">
                            <div className="text-gray-600">Height:</div>
                            <div className="text-brand-500">data</div>
                        </div>
                        
                        <div className="space-y-1">
                            <div className="text-gray-600">Menark:</div>
                            <div className="text-brand-500">data</div>
                        </div>
                         <div className="space-y-1">
                            <div className="text-gray-600">Weight:</div>
                            <div className="text-brand-500">data</div>
                        </div>

                         <div className="space-y-1">
                            <div className="text-gray-600">E/N/T:</div>
                            <div className="text-brand-500">data</div>
                        </div>                              
                        <div className="space-y-1">
                            <div className="text-gray-600">Vision:</div>
                            <div className="text-brand-500">20/20</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-gray-600">Body Mass Index (BMI):</div>
                            <div className="text-brand-500">23.1</div>
                        </div>

                        <div className="space-y-1">
                            <div className="text-gray-600">Upper Arm Circumference:</div>
                            <div className="text-brand-500">23 cm</div>
                        </div>

                        <div className="space-y-1">
                            <div className="text-gray-600">Waist Circumference:</div>
                            <div className="text-brand-500">23 cm</div>
                        </div>
                     
                    </div>
                </div>

            
                <div className="space-y-4">
                    <div className="text-sm font-semibold text-blue-600  pb-1">
                        PARENTAL CONTACT
                    </div>
                    
                    <div className="space-y-3 text-sm  border border-gray-200  p-2 pl-4">
                        <div className="space-y-1">
                            <div className="text-gray-600">Full names of parent/ Guardian:</div>
                            <div className="text-brand-500">John & Sarah Anderson</div>
                        </div>
                        
                        <div className="space-y-1">
                            <div className="text-gray-600">Phone Number:</div>
                            <div className="text-brand-500">678345634</div>
                        </div>
                        
                        <div className="space-y-1">
                            <div className="text-gray-600">Whatsapp Number:</div>
                            <div className="text-brand-500">678345634</div>
                        </div>
                        
                        <div className="space-y-1">
                            <div className="text-gray-600">Relationship:</div>
                            <div className="text-brand-500">single</div>
                        </div>
                        
                        <div className="space-y-1">
                            <div className="text-gray-600">Occupation:</div>
                            <div className="text-brand-500">Engineer</div>
                        </div>
                        
                        <div className="space-y-1">
                            <div className="text-gray-600">Home Address:</div>
                            <div className="text-brand-500">Somewhere</div>
                        </div>
                    </div>

                   
                    
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6 p-4 text-center">
                <div>
                    <p className="text-brand-500 font-bold">
                        ACADEMIC HISTORY
                    </p>
                    <p className="text-gray-500">Type of Learner: <span className="text-brand-500">Visual</span></p>
                    <p>Last Year Performance (Average/Position)</p>
                    <table  className="border border-gray-800 w-full">
                        <tr>
                            <td className="border border-gray-800">
                                <p>First Term</p>
                                <p className="text-brand-500">data</p>
                            </td>
                            <td  className="border border-gray-800">
                                <p>Second Term</p>
                                <p className="text-brand-500">data</p>
                            </td>
                            <td  className="border border-gray-800">
                                <p>Third Term</p>
                                <p className="text-brand-500">data</p>
                            </td>
                            <td  className="border border-gray-800">
                                <p>Desired</p>
                                <p className="text-brand-500">data</p>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="p-3  border border-brand-500">
                    <div className="text-sm  font-semibold text-brand-500 mb-2">
                        SUMMARY BEHAVIORAL REPORT 
                        AND OTHER DETAILS OR COMMENTS
                    </div>
                    <div className="text-sm  text-gray-600 leading-relaxed">
                        No known allergies or medical conditions. Regular exercise routine maintained. Annual health checkups completed with no concerns. Emergency contacts verified and up to date. All required documentation submitted for processing.
                    </div>
                </div>
            </div>
        </div>
    )
}
