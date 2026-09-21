import en from './dictionaries/en.json';
import es from './dictionaries/es.json';

interface DictionaryEntry {
  [key: string]: string;
}

export const dictionary: Record<string, DictionaryEntry> = {
  en,
  es,
};

export const getDictionary = (locale: string) => {
  return dictionary[locale] || dictionary['en'];
};
