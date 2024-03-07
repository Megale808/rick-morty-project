import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';






const HomePage = () => {
  

    return (
        <>
        <div className="card" >
            <h1>Rick & Morty</h1>
                <h2>Let's Get RIGGITY WRECKED</h2>
                <div className='card-body'>
                <h5 className='card-title'>Card title </h5>
                <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="character" className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
        <div className='side-body'>
            <h5>Hey!!!</h5>

        </div>
       
        
        </>
    )
}

export default HomePage;



