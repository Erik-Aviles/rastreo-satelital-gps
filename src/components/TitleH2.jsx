import React from 'react';
import '../styles/TitleH2.css'

const TitleH2 = ({children}) => {
  return (
    <div className="Container_Title-h2">
    <h2 className="Title-h2">{children}</h2>
  </div>
  )
}

export default TitleH2
