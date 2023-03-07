import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { fetchData } from '../helpers'

// loader
export function dashboardLoader(){
  const userName = fetchData("userName");
  return { userName }
}

const Dashboard = () => {

  const {userName} = useLoaderData();
  return (
    <div>
      <h1>{userName}</h1>
      Dashboad
    </div>
  )
}

export default Dashboard
