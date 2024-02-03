import React,{useState,useEffect} from 'react'
import Display from './Display';

const App = () => {
  const endtime = new Date("December 31, 2024 13:10:00").getTime();
  const [currentTime,setCurrentTime] = useState(new Date().getTime());
  const gap = endtime - currentTime

  const seconds = 1000 
  const minutes = seconds * 60
  const hours = minutes * 60 
  const days = hours * 24

  const remainingDays = Math.floor(gap / days)
  const remainingHours = Math.floor((gap % days) / hours)
  const remainingMinutes = Math.floor((gap % hours) / minutes)
  const remainingSeconds = Math.floor ((gap % minutes) / seconds)

  useEffect(() => {
    setTimeout(()=>setCurrentTime(new Date().getTime()),1000);
  },[currentTime])

  return (
    <div>
      <center>
        { gap > 0 ? <Display days={remainingDays} hours={remainingHours} minutes={remainingMinutes} seconds={remainingSeconds} /> :
        <Display days={0} hours={0} minutes={0} seconds={0} />}
      
      </center>
    </div>
  )
}

export default App