import normal from './lumiere';
import dark from './sombre';

const themes = {
  normal,
  dark,
};

export default function getTheme(theme) {
  return themes[theme];
}
