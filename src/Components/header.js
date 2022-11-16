import '../Assets/bootstrap.min.css';

function Header() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <div className="d-flex flex-grow-1">
                <span className="w-100 d-lg-none d-block"></span>
                <a className="navbar-brand" href="#">SR Öppet API</a>
                <div className="w-100 text-right">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar7">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar7">
                <ul className="navbar-nav ms-auto flex-nowrap">
                    <li className="mx-2">
                    <select id="playchannel" className="form-select" aria-label="Default select example"></select>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-primary" id="playbutton">Spela</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default Header;

