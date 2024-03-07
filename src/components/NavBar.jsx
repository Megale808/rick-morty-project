import { Link } from 'react-router-dom';



function NavBar() {
    return (
      <nav>
        <div>
        </div>
        <div>
          <ul>
          <li> 
            <Link to="/">Home</Link> 
            </li>
          <li> 
            <Link to="character">Characters</Link> 
          </li>
          <li>
            <Link to="location">Locations</Link> 
          </li>
          <li>
            <Link to="episode">Episode</Link> 
          </li>
        </ul>
        </div>
        
      </nav>
    )
  }

export default NavBar