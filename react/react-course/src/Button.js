import PropTypes from 'prop-types'

export function Button({name}){
  return <button onClick={function () {
    alert("Hola mundo");
  }}>
    {name}
  </button>
}

Button.propTypes = {
  text: PropTypes.string
}