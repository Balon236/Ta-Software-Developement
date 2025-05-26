import { useState } from "react";

interface SwitchProbs {
    tabOne: string;
    tabTwo?: string;
    tabOneContent: React.ReactNode;
    tabTwoContent?: React.ReactNode;
}


const SwitchTab: React.FC<SwitchProbs> = ({tabOne , tabTwo , tabOneContent, tabTwoContent}) => {
     const [activeTab, setActiveTab] = useState(1)
    return (
        <>
            <div className={`flex ${tabTwo? "justify-between":"justify-center"} p-2 bg-white border border-brand-500 rounded-md ml-2 `} >
                 <div
                 onClick={() => setActiveTab(1)}
                  className={`w-1/2 text-center py-2 cursor-pointer rounded-md ${activeTab==1? "bg-brand-500 text-white" : "text-brand-500"} `}>
                    {tabOne}
                </div>
                {tabTwo ? 
                <div 
                onClick={() => setActiveTab(2)}
                className={`w-1/2 text-center py-2 cursor-pointer rounded-md ${activeTab==2? "bg-brand-500 text-white" : "text-brand-500"} `}>
                    {tabTwo}
                </div>
                : ""}
                
            </div>
            <div className="mt-2 ">
                {activeTab== 1? tabOneContent : tabTwoContent? tabTwoContent: ""}
            </div>
        </>
    )
}

export default SwitchTab;