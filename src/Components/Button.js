// Importation des dépendances React
import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../Image/icon_flèche.png';
import './Button.css'; // Assurez-vous d'avoir un fichier CSS pour les styles

// Définition du composant Button
const Button = ({ label, onClick, type = 'button', variant = 'primary', disabled = false }) => {
  return (
    <div className='button-container'>
      <button
        className={`button button--${variant}`}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
        <span className="button-icon">
          <img src={ButtonIcon} alt="Icon" />
        </span>
      </button>
    </div>
    
  );
};

// Validation des props avec PropTypes
Button.propTypes = {
  label: PropTypes.string.isRequired, // Texte affiché sur le bouton
  onClick: PropTypes.func, // Fonction appelée lors du clic sur le bouton
  type: PropTypes.oneOf(['button', 'submit', 'reset']), // Type de bouton
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success']), // Style du bouton
  disabled: PropTypes.bool, // Indique si le bouton est désactivé
};

export default Button;
