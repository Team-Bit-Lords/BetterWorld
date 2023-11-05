import { useReducer, createContext } from "react"
import Sidebar from "./Sidebar"
import DashboardNavbar from "./DashboardNavbar"
import Leaderboard from "./Leaderboard"

const initialState = {
  selected: 0
}

export const CHANGE_SELECTED = 'CHANGE_SELECTED'

export const DashboardContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_SELECTED:
      return { ...state, selected: action.payload.selected }
    default:
      throw new Error(`Action ${action.type} not found`)
  }
}


const NewDashboard = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSelect = (selected) => {
    dispatch({ type: CHANGE_SELECTED, payload: { selected } })
  }

  return (
    <DashboardContext.Provider value={{ stateContext: state, handleSelect }}>
      <div className="bg-base-200 h-screen w-screen">

        <Sidebar />
        <div className=" ml-80 p-4">
          <DashboardNavbar />
          <div className="mt-12">
            {/* outlet */}
            <Leaderboard />
          </div>
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

export default NewDashboard;