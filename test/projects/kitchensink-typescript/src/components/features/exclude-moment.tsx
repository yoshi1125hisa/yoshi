import React from 'react';
import moment from 'moment';

const de = require('moment/locale/de');

// log both to prevent them from being tree shaked
console.log(moment, de);

export default () => (
  <div>
    <div id="exclude-moment">Moment locales should be imported directly!</div>
  </div>
);
