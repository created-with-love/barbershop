// Импорт паршалей с разметкой
import headerTemplate from '../partials/page-header.hbs'; 
import heroTemplate from '../partials/hero.hbs'; 
import aboutUsTemplate from '../partials/section-about_us.hbs'; 
import servicesTemplate from '../partials/section-services.hbs'; 
import advantagesTemplate from '../partials/section-advantages.hbs'; 
import teamTemplate from '../partials/section-team.hbs'; 
import beardTemplate from '../partials/section-beard.hbs'; 
import footerTemplate from '../partials/page-footer.hbs'; 

// подключение библ для контроля вызова событий
const throttle = require('lodash.throttle')

// Вставка разметки на страницу
const headerMarkup = headerTemplate([{}]);
const heroMarkUp = heroTemplate([{}]);
const aboutUsMarkup = aboutUsTemplate([{}]);
const servicesMarkup = servicesTemplate([{}]);
const advantagesMarkup = advantagesTemplate([{}]);
const teamMarkup = teamTemplate([{}]);
const beardMarkup = beardTemplate([{}]);
const footerMarkup = footerTemplate([{}]);

document.body.insertAdjacentHTML('beforeend', headerMarkup);
document.body.insertAdjacentHTML('beforeend', heroMarkUp);
document.body.insertAdjacentHTML('beforeend', aboutUsMarkup);
document.body.insertAdjacentHTML('beforeend', servicesMarkup);
document.body.insertAdjacentHTML('beforeend', advantagesMarkup);
document.body.insertAdjacentHTML('beforeend', teamMarkup);
document.body.insertAdjacentHTML('beforeend', beardMarkup);
document.body.insertAdjacentHTML('beforeend', footerMarkup);