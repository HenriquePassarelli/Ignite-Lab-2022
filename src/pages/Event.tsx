import { Outlet, useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"


export const Event = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                <div className="flex-1">
                    <Outlet />
                </div>
                <Sidebar />
            </main>
        </div>)
}


