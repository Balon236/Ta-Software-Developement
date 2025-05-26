
import SwitchTab from "../../../components/common/SwitchTab";
import AddSchedule from "../../../components/timetable/addSchedule";
import ViewTimetable from "../../../components/timetable/viewTimeTable";

import AppHeader from "../../../layout/AppHeader";


export default function FollowupReport(){
    return (
        <>
            <AppHeader title="My TimeTable" subTitle="View and add new schedule"/>
            <SwitchTab tabOne="My TimeTable" tabTwo="Add New Shedule" tabOneContent={<ViewTimetable/>} tabTwoContent={<AddSchedule/>}/>
  
        </>
    )
}