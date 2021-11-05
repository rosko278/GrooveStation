import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import getTheme from './base';

export const CustomThemeContext = React.createContext({
  currentTheme: 'normal',
  setTheme: null,
});

const CustomThemeProvider = (props) => {
  const { children } = props;

  //  Lier le thème  au le localStorage ou  depuis une api
  const currentTheme = localStorage.getItem('appTheme') || 'normal';

  // État permettant de conserver le nom du thème sélectionné
  const [themeName, _setThemeName] = useState(currentTheme);

  // Récupérer l'objet thème par le nom du thème
  const theme = getTheme(themeName);

  // Remplacer _setThemeName pour stocker les nouveaux noms de thèmes dans le localStorage.
  const setThemeName = (name) => {
    localStorage.setItem('appTheme', name);
    _setThemeName(name);
  };

  const contextValue = {
    currentTheme: themeName,
    setTheme: setThemeName,
  };

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};
CustomThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default CustomThemeProvider;
