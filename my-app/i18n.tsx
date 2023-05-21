"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          common: {
            addTask: "Add task",
            submit: "Submit",
            tasks: "Tasks",
            actions: "Actions",
            yes: "Yes",
            confirmationMessage: "Are you sure you want to delete this task?",
            editTask: "Edit task",
          },
        },
      },
      es: {
        translation: {
          common: {
            addTask: "Agregar tarea",
            submit: "Guardar",
            tasks: "Tareas",
            actions: "Acciones",
            yes: "Si",
            confirmationMessage: "¿Quiere eliminar esta tarea?",
            editTask: "Editar tarea",
          },
        },
      },
      fr: {
        translation: {
          common: {
            addTask: "Ajouter une tâche",
            submit: "Sauvegarder",
            tasks: "Tâches",
            actions: "Actions",
            yes: "Oui",
            confirmationMessage: "Voulez-vous vraiment supprimer cette tâche ?",
            editTask: "Modifier la tâche",
          },
        },
      },
    },
  });

export default i18n;
