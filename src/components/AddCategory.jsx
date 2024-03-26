import { useState } from "react";
import PropTypes from "prop-types";


export const AddCategory = ({ onNewValue }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  // No permitir que se envíe un valor vacío
    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 0) {
            return;
        }
        // onNewValue((categories) => [inputValue, ...categories]);
        onNewValue(inputValue.trim());
        setInputValue("");
    }

  return (
    <form onSubmit={onSubmit} aria-label="formulario">
      <input
        type="text"
        placeholder="Buscar..."
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}

export default AddCategory;

AddCategory.propTypes = {

    onNewValue: PropTypes.func.isRequired

}
