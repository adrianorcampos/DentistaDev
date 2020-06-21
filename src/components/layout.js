import React from "react"
// import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  
  return (
    <div className="site-wrapper">
      {children}
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} DentistaDev <br/> Feito <span role="img" aria-label="love&coffee">com ❤️ e ☕</span> no RJ</p>
      </footer>
    </div>
  )
}
