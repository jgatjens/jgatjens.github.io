interface DictionaryEntry {
  [key: string]: string;
}

export const dictionary: Record<string, DictionaryEntry> = {
  en: {
    resume: "Resume",
    work: "Work",
  },
  es: {
    resume: "CV",
    work: "Trabajo",
  },
};

export const getDictionary = (locale: string) => {
  return dictionary[locale];
};
