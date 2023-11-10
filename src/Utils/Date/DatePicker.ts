import { DateObject } from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import gregorian from 'react-date-object/calendars/gregorian';
import persian_en from 'react-date-object/locales/persian_en';
import persian_fa from 'react-date-object/locales/persian_fa';

export const convertDate = {
  persian: {
    fa: date =>
      new DateObject({ date, format: 'YYYY/MM/DD' }).convert(persian, persian_fa).format(),
    en: date =>
      new DateObject({ date, format: 'YYYY-MM-DD' }).convert(persian, persian_en).format(),
  },
  gregorian: {
    fa: date =>
      new DateObject({ date, format: 'YYYY-MM-DD' }).convert(gregorian, persian_fa).format(),
    en: date =>
      new DateObject({ date, format: 'YYYY-MM-DD' }).convert(gregorian, persian_en).format(),
  },
};
