import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
export default function Progress(){

    const [active, setActive] = useState(0)
    const [breakPoint, setBreakPoint] = useState([
        {
            uploadedBy: "Break Point One",
            description: "The break piont one will describe how the student is supposed to be treated and it will be inputed the case manager",
            date: "15/02/2024"
        },
         {
            uploadedBy: "Break Point One",
            description: "The break piont one will describe how the student is supposed to be treated and it will be inputed the case manager",
            date: "15/02/2024"
        },{
            uploadedBy: "Break Point One",
            description: "The break piont one will describe how the student is supposed to be treated and it will be inputed the case manager",
            date: "15/02/2024"
        }
         
    ])

    function next(){
       
    }

     function prev(){
        
    }

    return (
      <>
       <div className="bg-white border border-brand-500 p-4">
        <p className='text-brand-500 text-xl font-bold text-center mb-4'>Follow Up Progress</p>
        <div className='grid grid-cols-2 gap-8'>
                {breakPoint.slice(active, active + 3).map((item, index) => (
        <div
            key={index}
            className="rounded-md border border-brand-500 p-4 text-center"
        >
            <p className="text-lg text-gray-600 text-xs">Updated By {item.uploadedBy}</p>
            <p className="text-base">{item.description}</p>
            <p className="text-sm mt-4">{item.date}</p>
        </div>
        ))}

           
           </div>
            <div className='flex items-center justify-center mt-4 space-x-1'>
   <button  
              onClick={()=>prev()}
              className="p-2 bg-gray-200 rounded-lg transition-colors flex gap-2"
            >
              <ChevronLeft className="w-5 h-5" /> Previous
            </button>
            
          
            
            <button 
            onClick={()=>next()}
              className="p-2 bg-gray-200 rounded-lg transition-colors flex gap-2"
            >
              Next<ChevronRight className="w-5 h-5" /> 
            </button>
            </div>
         
          </div>
         
         
      </>
 
    )
   
}