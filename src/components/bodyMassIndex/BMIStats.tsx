import HeightLineChart from "../charts/LineChart"

export default function BMIStats(){
    return (
        <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
           
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-blue-600 text-center flex-1">Current Body Mass Index</h1>
                <div className="flex space-x-2">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700">
                        Previous
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700">
                        Next
                    </button>
                </div>
            </div>

           
            <div className="relative bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6" style={{height: "400px"}}>
                <HeightLineChart selectedDate="24-02-06"/> 
            </div>

          
            <div className="flex justify-center">
                <button className="bg-blue-600 text-white px-16 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-200">
                    Download
                </button>
            </div>
        </div>
    </div>

    )
}