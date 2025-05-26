
import SwitchTab from "../../../components/common/SwitchTab";
import EnterNew from "../../../components/followup/report/EnterNew";
import FReport from "../../../components/followup/report/Report";


import AppHeader from "../../../layout/AppHeader";


export default function FollowupReport(){
    return (
        <>
            <AppHeader title="Report on Follow-up" subTitle="View and add new report follow up"/>
            <SwitchTab tabOne="Report on Follow-up" tabTwo="Enter New Report" tabOneContent={<FReport/>} tabTwoContent={<EnterNew/>}/>
  
        </>
    )
}