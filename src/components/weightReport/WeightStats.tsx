import WeightHeightChart from "../charts/WeightHeight";

export default function WeightStats(){
    return (
          <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
         
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-blue-600">Weight Statistics</h1>
            </div>

       
            <div className="relative bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6" style={{height:"400px"}}>
               <WeightHeightChart/>
            </div>

         
            <div className="flex justify-center">
                <button id="downloadBtn" className="bg-blue-600 text-white px-16 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-200">
                    Download
                </button>
            </div>
        </div>
    </div>
    )
}