import { FaBars, FaChevronLeft } from "react-icons/fa"
import { GoChecklist } from "react-icons/go"
import { useSidebar } from "../Providers/SidebarProvider";
import { Fragment } from "react";
import logo from "../assets/images/logo2.svg"

const leads = [
    {icon: <GoChecklist/>, label: "Leads"},
    {icon: <GoChecklist/>, label: "Leads"},
    {icon: <GoChecklist/>, label: "Leads"},
    {icon: <GoChecklist/>, label: "Leads"},
    {icon: <GoChecklist/>, label: "Leads"},
    {icon: <GoChecklist/>, label: "Leads"},
    {icon: <GoChecklist/>, label: "Leads"},
]

const SideBar = () => {

    const { isSidebarOpen, setSidebarOpen } = useSidebar()

    return <Fragment>
        <div className={`fixed bg-white z-[1] py-4 h-screen border-r-2 transition-all duration-300 ${isSidebarOpen ? "w-60 shadow md:shadow-none" : "w-16"}`}>
            <div className="mx-2 flex flex-nowrap">
                {
                    isSidebarOpen && <div className="h-10">
                        <img src={logo} alt="logo" className="object-contain" />
                    </div>
                }
                <span onClick={() => setSidebarOpen(sidebar => !sidebar)} className="inline-flex flex-shrink-0 w-12 h-12 items-center justify-center cursor-pointer rounded-full hover:bg-slate-200">{isSidebarOpen ? <FaChevronLeft /> : <FaBars />}</span>
            </div>

            <ul className={`my-4 whitespace-nowrap overflow-x-hidden ${isSidebarOpen && "px-2"} mt-5`}>
                {
                    leads.map((item, idx) => {
                        return <li key={idx} className="px-4 hover:bg-primary-hover hover:text-white duration-200 rounded py-2 cursor-pointer hover:bg-slate-100">
                            <span className="inline-block w-8 mr-3.5 mx-2">{item.icon}</span>
                            <span>{item.label}</span>
                        </li>
                    })
                }
            </ul>
        </div>

        <div className={`flex-shrink-0 h-screen w-16 ${isSidebarOpen && "md:w-60"}`}>
      
        </div>
    </Fragment>
}

export default SideBar