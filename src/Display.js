import React from 'react'

const Display = ({days,hours,minutes,seconds}) => {
  return (
    <div>
        <h3>SALES OFFER COUNTDOWN TIMER</h3> <br/> <br />
        <h2>Offer ends in </h2> <br/> <br />
        <table>
            <tbody>
            <tr>
                    <th>{days}</th> &nbsp; &nbsp;
                    <th>{hours}</th>&nbsp; &nbsp;
                    <th>{minutes}</th>&nbsp; &nbsp;
                    <th>{seconds}</th>&nbsp; &nbsp;
                </tr>
                <tr>
                    <td>Days</td>&nbsp; &nbsp;
                    <td>Hours</td>&nbsp; &nbsp;
                    <td>Minutes</td>&nbsp; &nbsp;
                    <td>Seconds</td>&nbsp; &nbsp;
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Display