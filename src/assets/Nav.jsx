import { useState, useEffect } from "react";
import { Link} from "react-router-dom";

function Nav() {

    const [textFont, setTextFont] = useState(localStorage.getItem('textFont') || 'Light')
    const [textColor, setTextColor] = useState(localStorage.getItem('textColor') || 'black');
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'white');
    const [time, setTime] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [])

    let min = Math.floor(time / 60);
    let sec = time % 60;


    function themeHandle() {
        if (textFont == 'Light') {
            setTextFont('Dark');
            setTheme('black');
            setTextColor('white')
            document.body.style.color = 'white';
            document.body.style.backgroundColor = 'black';

            localStorage.setItem("theme", "black");
            localStorage.setItem("textColor", "white");
            localStorage.setItem("textFont", "Dark");
        }
        else {
            setTextFont('Light');
            setTheme('white')
            setTextColor('black')
            document.body.style.color = 'black';
            document.body.style.backgroundColor = 'white';

            localStorage.setItem("theme", "white");
            localStorage.setItem("textColor", "black");
            localStorage.setItem("textFont", "Light");
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ color: textColor }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ color: textColor }}>Welcome</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" style={{ color: textColor }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/textutils" style={{ color: textColor }}>TextUtil</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/count" style={{ color: textColor }}>Count</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: textColor }}>
                                    Routes
                                </Link>
                                <ul className="dropdown-menu" style={{ backgroundColor: theme }} >
                                    <li><Link className="dropdown-item" style={{ color: textColor }} to="/car">Car</Link></li>
                                    <li><Link className="dropdown-item" style={{ color: textColor }} to="/bike">Bike</Link></li>
                                    <li><Link className="dropdown-item" style={{ color: textColor }} to="/product">Products</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" style={{ backgroundColor: theme }} />
                            <button className="btn btn-outline-success" type="submit" style={{ color: textColor }}>Search</button>
                        </form>

                        <div className="form-check form-switch mx-2" >
                            <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" onChange={() => themeHandle()} />
                            <label className="form-check-label" htmlFor="checkNativeSwitch" >
                                {textFont}
                            </label>
                        </div>
                        <div className="mx-2">
                            {min}:{sec}
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Nav;