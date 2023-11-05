import React, { useContext } from 'react'
import { DashboardContext } from '../../pages/NewDashboard'

const Breadcrumb = () => {

  const {stateContext} = useContext(DashboardContext)

  return (
    <>
      <div className="text-sm breadcrumbs">
        <ul>
          <li className=" text-black/40"><a>Dashboard</a></li>
          <li className=" text-black/70">
            {
              stateContext.selected==0?'Home':
              (stateContext.selected==1?'Profile':
              (stateContext.selected==2?'Tables':
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