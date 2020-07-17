"use strict";

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import getRegularExpression from './modules/getRegularExpression';
import calc from './modules/calc';
import setDataAttribute from './modules/setDataAttribute';
import sendForm from './modules/sendForm';

// Timer
countTimer('18 july 2020');
// Menu
toggleMenu();
// popup
togglePopUp();
// Табы
tabs();
// Слайдер
slider();
// Добавление ругалярного выражения
getRegularExpression();
// Калькулятор
calc(100);
// Смена картинки
setDataAttribute();
// send-ajax-form
sendForm(form1);
sendForm(form2);
sendForm(form3);
