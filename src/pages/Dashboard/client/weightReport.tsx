
import SwitchTab from "../../../components/common/SwitchTab";
import AddNew from "../../../components/weightReport/AddNew";
import WeightStats from "../../../components/weightReport/WeightStats";

import AppHeader from "../../../layout/AppHeader";


export default function WeightReport(){
    return (
        <>
            <AppHeader title="Report on Weight" subTitle="View and add your weight Ststistics"/>
            <SwitchTab tabOne="Weight Statistics" tabTwo="Add New Data" tabOneContent={<WeightStats/>} tabTwoContent={<AddNew/>}/>
  
        </>
    )
}