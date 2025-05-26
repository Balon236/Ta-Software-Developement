import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
export default function BreakPointPlan(){

    const [active, setActive] = useState(0)
    const [breakPoint, setBreakPoint] = useState([
        {
            title: "Break Point One",
            description: "The break piont one will describe how the student is supposed to be treated and it will be inputed the case manager"
        },
         {
            title: "Break Point Two",
            description: "The break piont one will describe how the student is supposed to be treated and it will be inputed the case manager"
        },
         {
            title: "Break Point Three",
            description: "The break piont one will describe how the student is supposed to be treated and it will be inputed the case manager"
        },
         {
            title: "Break Point Four",
            description: "The break piont one will describe how the student is supposed to be treated and it will be inputed the case manager"
        },
    ])

    function next(){
        if(active+3 < breakPoint.length){
            setActive(active+1)
        }
    }

     function prev(){
        if(active > 0){
            setActive(active-1)
        }
    }

    return (
      <>
       <div className="flex items-center space-x-8">
            <div className='flex items-center space-x-1'>
   <button  
              onClick={()=>prev()}
              className="p-2 bg-gray-200 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
           <div className='grid grid-cols-3 gap-8'>
           {breakPoint.slice(active, active + 3).map((item, index) => (
  <div
    key={index}
    className="rounded-md border border-brand-500 p-4 text-center"
  >
    <p className="text-lg text-gray-600">{item.title}</p>
    <p className="text-base">{item.description}</p>
    <button className='bg-brand-500 rounded-md py-2 px-4 text-white mt-4'>Modify</button>
  </div>
))}

           
           </div>
            
            <button 
            onClick={()=>next()}
              className="p-2 bg-gray-200 rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            </div>
         
          </div>
          <div className='flex justify-center'>
     <button className='bg-brand-500 mx-auto rounded-md py-2 px-4 text-white mt-4'>Download</button>
          </div>
         
      </>
 
    )
   
}