import PropTypes from "prop-types";
export function Button({ text, name }) {
  if (!text) {
    console.error("el texto es requerido");
  }
  return (
    <button>
      {text} - {name}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  name: "Some user",
};
