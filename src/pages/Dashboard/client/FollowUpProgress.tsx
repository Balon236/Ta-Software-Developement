
import SwitchTab from "../../../components/common/SwitchTab";
import Add from "../../../components/followup/progress/Add";
import Progress from "../../../components/followup/progress/Progress";


import AppHeader from "../../../layout/AppHeader";


export default function FollowupProgress(){
    return (
        <>
            <AppHeader title="Follow Up Progress" subTitle="View and add follow up progress"/>
            <SwitchTab tabOne="Follow Up Progress" tabTwo="Add a Progress on a Student" tabOneContent={<Progress/>} tabTwoContent={<Add/>}/>
  
        </>
    )
}