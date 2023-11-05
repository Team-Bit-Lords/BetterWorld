import React, { useContext } from 'react'
import { DashboardContext } from '../../pages/NewDashboard'
import { useNavigate } from 'react-router-dom'

const Breadcrumb = () => {
  const navigate = useNavigate();
  const {stateContext} = useContext(DashboardContext)
  const handleclick = ()=>{navigate('/dashboard/chatbot')}
  return (  
    <>
      <div className="text-sm breadcrumbs">
        <ul>
          <li className=" text-black/40"><a onClick={handleclick}>Dashboard</a></li>
          <li className=" text-black/70">
            {
              stateContext.selected==0?'Home':
              (stateContext.selected==1?'Leaderboard':
              (stateContext.selected==2?'Chatbot':
              (stateContext.selected==3?'Notifications': ''
              )))
            }
          </li>
        </ul>
      </div>
    </>
  )
}

export default Breadcrumb