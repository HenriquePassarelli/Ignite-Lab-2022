import { Route, Routes } from "react-router-dom"
import { EmptyVideoState } from "./components/EmptyVideoState"
import { Video } from "./components/Video"
import { Event } from "./pages/Event"
import { Subscribe } from "./pages/Subscribe"

export const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<Subscribe />} />
            <Route path="/event" element={<Event />} >
                <Route path="" element={<EmptyVideoState />} />
                <Route path="lesson/:slug" element={<Video />} />
            </Route>
        </Routes>
    )
}