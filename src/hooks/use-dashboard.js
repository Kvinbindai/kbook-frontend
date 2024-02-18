import { useContext } from "react"
import { DashboardContext } from "../contexts/DashboardContext"

const useDashboard = () => {
    return useContext(DashboardContext)
}

export default useDashboard