import { createContent } from "./content.js";
import { menuPage } from "./menu.js";
import './styles.css';

const menuButton = document.getElementById('menuButton');
const homeButton = document.getElementById('homeButton');

createContent();
homeButton.addEventListener('click', menuPage);