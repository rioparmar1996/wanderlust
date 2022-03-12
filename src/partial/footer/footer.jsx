import React from 'react'
import './footer.css'

function Footer(){
 return(
  <div className='footer'>
   <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      </li>
      <li class="nav-item">
       <a class="nav-link" href="#">
        About
       </a>
      </li>
      <li class="nav-item">
       <a class="nav-link " href="#">
        Contact
       </a>
      </li>
      <li class="nav-item">
       <a class="nav-link " href="#">
        Newsletter
       </a>
      </li>
     </ul>
    </div>
   </nav>

  </div>
 )
}

export default Footer