// /lang/languageManager.js
import { writable } from 'svelte/store';
import TranslationManager from './translationManager.js';

export const currentLanguage = writable('en');
const translationManager = TranslationManager.getInstance();

export function setLanguage(lang) {
  currentLanguage.set(lang);
  translationManager.loadTranslations(lang);
}
