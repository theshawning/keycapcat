import React, { useEffect, useState} from 'react'
import firebase from '../../firebase'
import Card from '../Card/Card'
import { keycapData } from '../../keycapinfo'

export default function KeyCapCardContainer() {
  const [keyCapData, setKeyCapData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      await db.collection("keycaps").get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          setKeyCapData({
            type: doc.data().type,
            name: doc.data().name,
            designer: doc.data().designer,
            startDate: doc.data().dates.start,
            endDate: doc.data().dates.end,
            colors: {
              footerBg: doc.data().colors.footerBg,
              headerBg: doc.data().colors.headerBg,
              footerTextColor: doc.data().colors.footerTextColor,
              headerTextColor: doc.data().colors.headerTextColor,
              textShadow: doc.data().colors.textShadow
            },
          })
        })
      })
    }
    fetchData()
  }, [keyCapData])

  console.log(keyCapData)

  return (
   <h1>Hi</h1>
  )

  // return (
  // keycapData.map((props, index) => {
  //   const { type, name, designer, startDate, endDate, vendors } = props;

  //   return (
  //     <Card 
  //       key={index}
  //       type={type}
  //       name={name}
  //       designer={designer}
  //       startDate={startDate}
  //       endDate={endDate}
  //       cardHeaderBg={props.colors.headerBg}
  //       headerTextColor={props.colors.headerTextColor}
  //       cardFooterBg={props.colors.footerBg}
  //       footerTextColor={props.colors.footerTextColor}
  //       textShadow={props.colors.textShadow}
  //       vendor={vendors} 
  //     />
  //   )
  // }))
}
