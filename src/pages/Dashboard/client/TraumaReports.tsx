
import SwitchTab from "../../../components/common/SwitchTab";
import TraumaReport from "../../../components/traumareport/TraumaReport";
import AppHeader from "../../../layout/AppHeader";


export default function TraumaReports(){
    return (
        <>
            <AppHeader title="Report on Trauma" subTitle="View your trauma report"/>
            <SwitchTab tabOne="Trauma Report" tabOneContent={<TraumaReport/>}/>
  
        </>
    )
}