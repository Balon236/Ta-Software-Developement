import SwitchTab from "../../common/SwitchTab";
import AddPlan from "./AddPlan";
import BreakPointPlan from "./BreakPointPlan";


export default function Plan(){
    return (
        <div className="bg-white border border-brand-500 p-4">
            <p className="text-brand-500 text-xl">Follow Up</p>
            <div>
                <p className="text-gray-800 text-xl">Description</p>
                <p className="text-gray-500 text-md mb-2">
                    Some sevier symptoms significantly affecting the daily life, high risks of self harm or sucidal thoughts.

Referal: refer for evaluations and treatments, consider crises intervention service, consider crises intervention service

Some sevier symptoms significantly affecting the daily life, high risks of self harm or sucidal thoughts.

Referal: refer for evaluations and treatments, consider crises intervention service, consider crises intervention service
                </p>
                <SwitchTab tabOne="Break Point Plan" tabTwo="Add Plan" tabOneContent={<BreakPointPlan/>} tabTwoContent={<AddPlan/>}/>
            </div>
        </div>
    )
}