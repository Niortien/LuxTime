import React from 'react'

interface IProps{
  params:{
    montre:string

  }
}
export default function MontreDetail({params:{montre}}:IProps) {
  return (
    <div>MontreDetail {montre}</div>
  )
}
