// Code CoordinatesButton Component Here
import React from "react"

function onReceiveCoordinates(onReceiveCoordinates){
  let coor=[]
  function coordinate(){
    let x=event.clientX
    let y=event.clientY
    coor.push(x,y)
  }
  return(
    <button onClick="coordinate()"></button>
    
    )
}