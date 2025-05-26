
import AddNew from "../../../components/bodyMassIndex/AddNew";
import BMIStats from "../../../components/bodyMassIndex/BMIStats";
import SwitchTab from "../../../components/common/SwitchTab";


import AppHeader from "../../../layout/AppHeader";


export default function BMI(){
    return (
        <>
            <AppHeader title="Report on Body mass Index" subTitle="View and add new schedule"/>
            <SwitchTab tabOne="Body mass Index" tabTwo="Add New Data" tabOneContent={<BMIStats/>} tabTwoContent={<AddNew/>}/>
  
        </>
    )
}