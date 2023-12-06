
import '../components/Main'
import './Footer.jsx'
// import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css'

const Ideas = () => {
    return (
        <section>
            <nav className="navbar navbar-expand-lg bg-body-tertiary position-fixed top-0 w-100">
                <div class="container-fluid" />
                <a className="navbar-brand text-primary" href="https://ideas.com/">IDeas</a> 
                <img src="./Asset/Capture.PNG" alt="" />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="">
                    <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                        <li className="nav-item d-flex">
                            <a className="nav-link active" aria-current="page" href="#">Solution</a>
                            <a className="nav-link active" aria-current="page" href="#">Clients</a>
                            <a className="nav-link dropdown-toggle" href="#">
                                Resources
                            </a>
                            <a className="nav-link active" aria-current="page">Company</a>
                            <button type="button" class="btn btn-primary">Contact Us</button>
                            <form className="d-flex ms-none" role="search">
                                <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>

                        </li>
                    </ul>
                </div>
            </nav>    

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
        </section>
    )
}

export default Ideas;