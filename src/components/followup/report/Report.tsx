import { useState } from "react"
import { DownloadIcon } from "../../../icons"

export default function FReport(){
    const [data,setData] = useState({
        name:"Balon leslie",
        class:"form five science",
        status:"High Severity",
        score: 93.33,
        description:"Some sevier symptoms significantly affecting the daily life, high risks of self harm orsucidal thoughts.",
        casemanagerName:"Ekono Janet Mary",
        casemanagerPhone: "675164481",
        date:"1/2/2023",
        heading:"Heading",
        observation:"Some observations from the case manager himself"
    })
    return(
        <div className="bg-white border border-brand-500 p-4">
            <div className="flex gap-4">
                <div className="bg-white p-4 border border-brand-500 rounded-md w-[45%] h-fit">
        <div className="flex gap-2  items-center">
             <span className="overflow-hidden  rounded-full h-25 w-25">
                <img src="/images/user/owner.jpg" alt="User" />
            </span>
            <div className="text-sm text-gray-700 ">
                <p className="text-lg">Name</p>
                <p className="font-semibold text-xl text-gray-600">{data.name}</p>
                <p className="text-brand-500">{data.class}</p>
            </div>
        </div>
         <div>
            <p className="font-semibold text-xl text-gray-700 text-center">{data.status}</p>
           
            <div className="font-semibold text-lg mt-2 text-brand-500"> TOTAL SCORE: <span className="font-semibold text-red-500">{data.score} %</span></div>
            <p className="text-base text-gray-700">{data.description}</p>
            <div className="mt-4">
                <p className="text-brand-500 text-lg font-semibold">Case Manager</p>
                <p className="font-semibold text-xl text-gray-600">{data.casemanagerName}</p>
                <p className="text-brand-500 text-sm">{data.casemanagerPhone}</p>
            </div>
         </div>
        </div>
                <div className="bg-white p-4 border border-brand-500 rounded-md w-[60%] h-fit">
                    <div className="flex justify-between">
                        <p className="text-gray-700">{data.date}</p>
                        <button className="text-brand-500 text-2xl">
                            <DownloadIcon/>
                        </button>
                    </div>
                    <div className="mt-4">
                        <p className="text-brand-500 text-lg font-semibold">{data.heading}</p>
                        <p className="text-base text-gray-700">{data.observation}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}