/**
 * Category definitions that mirror the Strapi categories-selector schema
 * Source: api.jgatjens.com/src/components/shared/categories-selector.json
 */

export const CATEGORY_MAP = {
    web: 'Web',
    mobile: 'Mobile',
    ai: 'AI',
    backend: 'Backend',
    headless_cms: 'Headless CMS',
    animations: 'Animations',
    cms: 'CMS',
    design_systems: 'Design Systems'
} as const;

export type CategoryKey = keyof typeof CATEGORY_MAP;

export const AVAILABLE_CATEGORIES = Object.keys(CATEGORY_MAP) as CategoryKey[];

export const getCategoryLabel = (key: string): string => {
  return CATEGORY_MAP[key as CategoryKey] || key;
};
