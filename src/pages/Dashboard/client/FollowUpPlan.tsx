
import SwitchTab from "../../../components/common/SwitchTab";
import Plan from "../../../components/followup/plan/Plan";

import AppHeader from "../../../layout/AppHeader";


export default function FollowupPlan(){
    return (
        <>
            <AppHeader title="Follow up Plan" subTitle="View your follow-up plan"/>
            <SwitchTab tabOne="Follow Up" tabOneContent={<Plan/>}/>
  
        </>
    )
}