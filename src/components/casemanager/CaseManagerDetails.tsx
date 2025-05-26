import { useState } from "react";

export default function Details(){
   const [data, setData] = useState(
    {
        name: "string",
        codeNumber: "string",
        rowNumber: "string",
        dob: "string",
        specialty: "string",
        qualification: "string",
        phone: "string",
        gender: "string",
        progress: 35,
    });
    
  return (
    <div className="flex justify-center">
         <div className="bg-white p-4 rounded-md w-full h-fit">
        <div className="flex gap-1  gap-4">
             <span className="overflow-hidden border-[#1e74ff] border-4 rounded-lg h-40 w-50">
                <img src="/images/user/owner.jpg" alt="User" />
            </span>
            <div className="text-base text-gray-700">
                <p className="font-semibold text-5xl">{data.name}</p>
                <p>Code No: {data.codeNumber}</p>
                <p>Row Number: {data.rowNumber}</p>
            </div>
        </div>
          <div className="space-y-4 text-sm  mt-10">
            <div className="flex justify-between">
                <span className="text-gray-600">Name</span>
                <span className="text-brand-500">{data.name}</span>
            </div>
            <hr></hr>
            <div className="flex justify-between">
                <span className="text-gray-600">Specialty</span>
                 <span className="text-brand-500">{data.specialty}</span>
            </div>
            <hr></hr>
            <div className="flex justify-between">
                <span className="text-gray-600">Date of Birth</span>
                 <span className="text-brand-500">{data.dob}</span>
            </div>
            <hr></hr>
            <div className="flex justify-between">
                <span className="text-gray-600">Qualification</span>
                <span className="text-brand-500">{data.qualification}</span>
            </div>
            <hr></hr>
            <div className="flex justify-between">
                <span className="text-gray-600">Phone Number</span>
                <span className="text-brand-500">{data.phone}</span>
            </div>
            <hr></hr>
            <div className="flex justify-between">
                <span className="text-gray-600">Gender</span>
                <span className="text-brand-500">{data.gender}</span>
            </div>
            <hr></hr>
            <div className="flex justify-between items-center">
                <span className="text-gray-600">Progress</span>
                <div className="w-1/2 ">
                    <p className="text-end"> {data.progress}%</p>
                    <div className="w-full border border-brand-500 h-2">
                        <div className="bg-brand-500 h-2 " style={{width: `${data.progress}%`}}></div>
                    </div>
                </div>
               
            </div>
            
        </div>
    </div>
    </div>
   
  )
}
