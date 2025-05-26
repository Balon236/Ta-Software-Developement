
interface PersonalData {
  name: string;
  codeNumber: string;
  rowNumber: string;
  class: string;
  specialty: string;
  manager: string;
  caseManager: string;
  consultant: string;
  gender: string;
  progress: number;
}


const LeftProfile: React.FC<PersonalData> = (data) => {
  return (
    <div className="bg-white p-4 rounded-md w-[31%] h-fit">
        <div className="flex gap-1">
             <span className="overflow-hidden border-[#1e74ff] border-4 rounded-lg h-15 w-15">
                <img src="/images/user/owner.jpg" alt="User" />
            </span>
            <div className="text-sm text-gray-700">
                <p className="font-semibold text-sm">{data.name}</p>
                <p>Code No: {data.codeNumber}</p>
                <p>Row Number: {data.rowNumber}</p>
            </div>
        </div>
          <div className="space-y-4 text-sm  mt-10">
            <div className="flex justify-between">
                <span className="text-gray-600">Class</span>
                <span className="text-brand-500">{data.class}</span>
            </div>
            <hr></hr>
            <div className="flex justify-between">
                <span className="text-gray-600">Specialty</span>
                 <span className="text-brand-500">{data.specialty}</span>
            </div>
            <hr></hr>
            <div className="flex justify-between">
                <span className="text-gray-600">Manager</span>
                 <span className="text-brand-500">{data.manager}</span>
            </div>
            <hr></hr>
            <div className="flex justify-between">
                <span className="text-gray-600">Case Manager</span>
                <span className="text-brand-500">{data.caseManager}</span>
            </div>
            <hr></hr>
            <div className="flex justify-between">
                <span className="text-gray-600">Consultant</span>
                <span className="text-brand-500">{data.consultant}</span>
            </div>
            <hr></hr>
            <div className="flex justify-between">
                <span className="text-gray-600">Gender</span>
                <span className="text-brand-500">{data.gender}</span>
            </div>
            <hr></hr>
            <div className="flex justify-between items-center">
                <span className="text-gray-600">Progress</span>
                <div className="w-1/2 bg-gray-300 rounded-full h-2">
                    <div className="bg-brand-500 h-2 rounded-full" style={{width: `${data.progress}%`}}></div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
export default LeftProfile;