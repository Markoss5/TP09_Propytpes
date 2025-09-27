import PropTypes from 'prop-types';

// Shape para productos de la API FakeStore
export const ProductoShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  nombre: PropTypes.string,
  price: PropTypes.number,
  precio: PropTypes.number,
  image: PropTypes.string,
  imagen: PropTypes.string,
  description: PropTypes.string,
  descripcion: PropTypes.string,
  category: PropTypes.string,
  categoria: PropTypes.string,
});

// Shape para items del carrito
export const CartItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  imagen: PropTypes.string.isRequired,
  cantidad: PropTypes.number.isRequired,
});

// Shape para descuentos del carousel
export const DescuentoShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
});

// Shape para el formulario de contacto
export const ContactFormShape = PropTypes.shape({
  nombre: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  mensaje: PropTypes.string.isRequired,
});
