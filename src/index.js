"use strict";

import 'es6-promise';
import 'fetch-polyfill';
import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import getRegularExpression from './modules/getRegularExpression';
import calc from './modules/calc';
import setDataAttribute from './modules/setDataAttribute';
import sendForm from './modules/sendForm';
import 'formdata-polyfill';

// Timer
countTimer('24 july 2020');
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
