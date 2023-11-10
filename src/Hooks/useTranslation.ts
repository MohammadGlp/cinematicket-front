import fa from '@Translation/fa.json';
import en from '@Translation/en.json';
enum UseTranslation {
  fa = 'fa',
  en = 'en',
}
const translation = {
  [UseTranslation.fa]: fa,
  [UseTranslation.en]: en,
};

export default function useTranslation() {
  return translation[UseTranslation[UseTranslation.fa]];
}
