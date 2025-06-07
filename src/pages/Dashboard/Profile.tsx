
import LeftProfile from "../../components/profile/LeftProfile";
import RightProfile from "../../components/profile/RightProfile";
import AppHeader from "../../layout/AppHeader";

const userData = {
    personalData:{
         name: " SAMA FIDELIA LEHSIGHA",
        codeNumber: "Amstr136",
        rowNumber: "HolyInf24/25AN001",
        class: "Form five",
        specialty: "Accounting",
        manager: "Madam Balon Leslie",
        caseManager: "Mrs Banla Coleth",
        consultant: "Mr Fur Gilfort",
        gender: "Male",
        progress: 30
    }
}
export default function Profile() {
  return (
    <>
        <AppHeader title="Profile" subTitle="View and edit your profile"/>
        <div className="text-white w-1/2 bg-brand-500 text-center py-2 rounded-md mt-4">
            Profile
        </div>
        <div className="flex gap-2 mt-5">
            <LeftProfile {...userData.personalData}/>
            <RightProfile/>
        </div>
    </>
  )
}