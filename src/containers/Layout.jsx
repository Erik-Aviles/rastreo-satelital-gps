import React from 'react';
import '../styles/Layout.css'

const Layout = ({children}) => {
  return (
    <main className="Layout">
      {children}
    </main>
  );
}

export default Layout
