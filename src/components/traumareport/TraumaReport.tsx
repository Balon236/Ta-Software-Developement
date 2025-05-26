import { useState } from "react"

export default function TraumaReport(){
    const [data, setData] = useState({
        name: " Balon Lesly Mary",
        status: "High Severity",
        class: "Form five Science",
        description: "Some sevier symptoms significantly affecting the daily life, high risks of self harm or sucidal thoughts",
        total: 23
    })
    return (
        <div className="bg-white border text-gray-800 border-brand-500 ml-3 p-4 flex flex-col space-y-6">
            <p className="text-center font-bold text-2xl">REPORT ON TRUAMA STUDENT SCREENING</p>
            <div>
                <p className="font-semibold text-xl">Name</p>
                <p className="text-lg text-gray-700" >{data.name}</p>
                <p className="text-brand-500 text-sm">{data.class}</p>
            </div>
           <p className="font-semibold text-xl">{data.status}</p>
            <div>
                <p className="font-semibold text-xl">Description</p>
                <p className="text-lg text-gray-700">{data.description}</p>
                <p className="text-lg text-gray-700">Referal: refer for evaluations and treatments, consider crises intervention service.</p>
            </div>
            <div className="font-semibold text-xl mt-2"> TOTAL SCORE: <span className="text-brand-500">{data.total} %</span></div>
            <p className="text-md">For referral, please fill out this form:   <span className="text-brand-500">Contact your Manager</span></p>
            <button 
            type="submit"
            className="rounded-md bg-brand-500 text-white font-medium px-6 py-3  focus:ring-2 focus:ring-white focus:outline-none transition-colors mx-auto block"
            >
            Download Report
            </button>
        </div>
        
    )
}