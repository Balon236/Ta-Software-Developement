import { useState } from "react"

export default function ConsulationReport(){
    const [data, setData] = useState({
        name: " Balon Lesly Mary",
        status: "High Severity",
        class: "Form five Science",
        description: "Some sevier symptoms significantly affecting the daily life, high risks of self harm or sucidal thoughts",
        total: 23
    })
    return (
         <div className="max-w-6xl mx-auto bg-white border border-vrand-500 shadow-lg overflow-hidden p-5">
        <div className="flex">
          
            <div className="w-1/3 bg-gray-50 border border-brand-500">
               
                <div className="bg-brand-500 text-white p-6 text-center">
                    <h1 className="text-xl font-bold">BALON LESLIE</h1>
                    <h2 className="text-lg font-semibold">MARY</h2>
                </div>

               
                <div className="p-4 space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="text-brand-500 font-semibold text-sm mb-1">Class and Code</div>
                        <div className="text-gray-700 text-sm">Uppersixth Arts #2202024</div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="text-brand-500 font-semibold text-sm mb-1">Parents/Guardians Name</div>
                        <div className="text-gray-700 text-sm">Madam Verina Tabot</div>
                    </div>

                    <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                            <div className="text-brand-500 font-semibold text-sm mb-1">Diagnosed with</div>
                            <div className="text-gray-700 text-sm">Madam Verina Tabot</div>
                        </div>

                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                            <div className="text-brand-500 font-semibold text-sm mb-1">Diagnosed with</div>
                            <div className="text-gray-700 text-sm">Madam Verina Tabot</div>
                        </div>

                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                            <div className="text-brand-500 font-semibold text-sm mb-1">Diagnosed with</div>
                            <div className="text-gray-700 text-sm">Madam Verina Tabot</div>
                        </div>

                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                            <div className="text-brand-500 font-semibold text-sm mb-1">Diagnosed with</div>
                            <div className="text-gray-700 text-sm">Madam Verina Tabot</div>
                        </div>
                    </div>
                </div>
            </div>

          
            <div className="flex-1 border border-brand-500">
              
                <div className="bg-white border border-brand p-6">
                    <h2 className="text-2xl font-bold text-brand-500">Consultation Result</h2>
                </div>

                
                <div className="p-6">
                    <div className="space-y-3">
                       
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                            <div className="flex-1">
                                <div className="font-medium text-gray-900">Consultation.docs</div>
                            </div>
                            <div className="flex-1 text-center">
                                <div className="text-gray-600 text-sm">01/10/2025</div>
                            </div>
                            <div className="flex-1 text-right">
                                <button className="bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                                    download
                                </button>
                            </div>
                        </div>

                       
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                            <div className="flex-1">
                                <div className="font-medium text-gray-900">Consultation.docs</div>
                            </div>
                            <div className="flex-1 text-center">
                                <div className="text-gray-600 text-sm">01/10/2025</div>
                            </div>
                            <div className="flex-1 text-right">
                                <button className="bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                                    download
                                </button>
                            </div>
                        </div>

                        
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                            <div className="flex-1">
                                <div className="font-medium text-gray-900">Consultation.docs</div>
                            </div>
                            <div className="flex-1 text-center">
                                <div className="text-gray-600 text-sm">01/10/2025</div>
                            </div>
                            <div className="flex-1 text-right">
                                <button className="bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                                    download
                                </button>
                            </div>
                        </div>
                    </div>

                    
                    
                </div>
            </div>
        </div>
        <div className="mt-8 text-right">
                        <button className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-md font-medium inline-flex items-center gap-2 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                            DOWNLOAD ALL
                        </button>
                    </div>
    </div>
        
    )
}