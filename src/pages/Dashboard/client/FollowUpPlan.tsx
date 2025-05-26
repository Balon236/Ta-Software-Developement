
import SwitchTab from "../../../components/common/SwitchTab";
import ConsulationReport from "../../../components/consultationreport/ConsultationReport";

import AppHeader from "../../../layout/AppHeader";


export default function FollowupPlan(){
    return (
        <>
            <AppHeader title="Consulation Report" subTitle="View your consulation report"/>
            <SwitchTab tabOne="Consulation Report" tabOneContent={<ConsulationReport/>}/>
  
        </>
    )
}