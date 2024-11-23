import { defineMiddleware } from 'astro:middleware';
import {
  languageTag,
  setLanguageTag,
  type AvailableLanguageTag,
} from '../paraglide/runtime';

export const onRequest = defineMiddleware((context, next) => {
  // Get lang from url param
  const lang = context.params.lang;

  // If changed
  if (lang !== languageTag()) {
    setLanguageTag(lang as AvailableLanguageTag);
    // Redirect to lang changed or default (en)
    return context.redirect(`/${lang ?? 'en'}`);
  }

  return next();
});