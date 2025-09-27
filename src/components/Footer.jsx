import PropTypes from "prop-types";

function Footer() {
    return (
      <footer className="footer">
        <div className="footer__content">
          © {new Date().getFullYear()} MarcoShops. Todos los derechos reservados.
        </div>
      </footer>
    );
  }
  
  Footer.propTypes = {};
  
  export default Footer;