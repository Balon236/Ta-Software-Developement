import Details from "../../../components/casemanager/CaseManagerDetails";
import SendMessage from "../../../components/casemanager/SendMessage";
import SwitchTab from "../../../components/common/SwitchTab";
import AppHeader from "../../../layout/AppHeader";


export default function CaseManagerDetails(){
    return (
        <>
            <AppHeader title="Case Material Details" subTitle="View and contact case manager"/>
            <SwitchTab tabOne="Details" tabTwo="Send Message" tabOneContent={<Details/>} tabTwoContent={<SendMessage/>}/>
  
        </>
    )
}