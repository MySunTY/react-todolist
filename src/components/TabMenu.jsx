import { useState } from "react";
import "./styles/TabMenu.css"

const TabMenu= ({onChekingTab})=>{
    const [activeTab, setActiveTab] = useState('todo')
    const handleClickTab= (menu)=>{
        //메뉴에 따라서 해댱 탭 메뉴 UI 활성화.
        setActiveTab(menu);
        onChekingTab(menu);
    }
    return(
        <div className="tabmenu-wrapper">
            <div style={{
                color: activeTab ==='todo' ? 'blue' : 'gray', 
                borderColor : activeTab === 'todo' ? 'blue' : 'gray'
            }} 
            onClick={()=> handleClickTab('todo')} className="tabmenu">
                Todo
            </div>
            <div style={{
                color: activeTab ==='done' ? 'blue' : 'gray',
                borderColor : activeTab ==='done' ? 'blue' : 'gray'
            }}
             onClick={()=> handleClickTab('done')} className="tabmenu">
                Done
            </div>
        </div>
    );
};

export default TabMenu