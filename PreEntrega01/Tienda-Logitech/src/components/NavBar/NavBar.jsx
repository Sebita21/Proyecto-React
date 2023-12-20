import CartWidget from './CartWidget/CartWidget';
import imag from './imagen/logo.png';

const NavBar = () => {
  return (
    <div class="container-fluid px-0">
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={imag} alt="logo" width="60" height="60" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
              <a class="nav-link" href="#">
                Caracteristicas
              </a>
              <a class="nav-link" href="#">
                Precios
              </a>
            </div>
          </div>
          <CartWidget />
          <form class="d-flex justify-content-around mr-5" role="buscar"></form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
