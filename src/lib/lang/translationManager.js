// /lang/translationManager.js
import { writable } from 'svelte/store';

class TranslationManager {
  constructor() {
    this.translations = writable({});
  }

  static getInstance() {
    if (!TranslationManager.instance) {
      TranslationManager.instance = new TranslationManager();
    }
    return TranslationManager.instance;
  }
  async loadTranslations(lang) {
    const response = await fetch(`src/lib/lang/${lang}/small.json`);
    const data = await response.json();

    this.translations.update(() => data);
  }
}

export default TranslationManager;


/* 
Flux de travail :

Lorsque page.svelte est chargé, il est initialement configuré avec la langue par défaut (anglais, dans ce cas).
Lorsque l'utilisateur clique sur le bouton pour changer de langue, la fonction changeLanguage est appelée, ce qui, à son tour, appelle setLanguage de LanguageManager.
setLanguage met à jour la currentLanguage et demande à TranslationManager de charger les traductions pour la nouvelle langue.
TranslationManager envoie une requête pour le fichier dictionary.json correspondant. Si c'est la première fois que cette langue est demandée, la requête atteindra le serveur; sinon, le Service Worker servira la traduction depuis le cache.
Une fois les traductions chargées, TranslationManager met à jour son store avec les nouvelles traductions.
page.svelte est abonné au store des traductions, donc il reçoit les mises à jour des traductions et les affiche à l'utilisateur. */