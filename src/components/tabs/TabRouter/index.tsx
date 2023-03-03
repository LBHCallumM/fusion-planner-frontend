import { useState } from "react";

interface Props {
    tabs: Array<{
        name: String;
        component: JSX.Element
    }>;
}

const TabRouter = ({ tabs } : Props) => {
    const [currentTab, setCurrentTab] = useState<number>(0)

 

    return (
<>
<ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 mt-2">
          {tabs.map((option, index) => (
            <li className="mr-1" key={index}>
              <button
                onClick={() => setCurrentTab(index)}
                className={`inline-block p-2 text-gray-700 bg-gray-100 rounded-t-sm active ${
                  currentTab === index ? "bg-gray-300" : ""
                }`}
              >
                {option.name}
              </button>
            </li>
          ))}
        </ul>


        {tabs[currentTab].component}
</>
    )
}


export default TabRouter