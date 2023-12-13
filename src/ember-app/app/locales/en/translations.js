import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKROsipovaItogАктПриемкиLForm from './forms/i-i-s-k-r-osipova-itog-акт-приемки-l';
import IISKROsipovaItogЗаказLForm from './forms/i-i-s-k-r-osipova-itog-заказ-l';
import IISKROsipovaItogОтпускМатериалаLForm from './forms/i-i-s-k-r-osipova-itog-отпуск-материала-l';
import IISKROsipovaItogСкладLForm from './forms/i-i-s-k-r-osipova-itog-склад-l';
import IISKROsipovaItogСотрудникиLForm from './forms/i-i-s-k-r-osipova-itog-сотрудники-l';
import IISKROsipovaItogТНLForm from './forms/i-i-s-k-r-osipova-itog-т-н-l';
import IISKROsipovaItogТЧАктаПриемкиLForm from './forms/i-i-s-k-r-osipova-itog-т-ч-акта-приемки-l';
import IISKROsipovaItogАктПриемкиEForm from './forms/i-i-s-k-r-osipova-itog-акт-приемки-e';
import IISKROsipovaItogЗаказEForm from './forms/i-i-s-k-r-osipova-itog-заказ-e';
import IISKROsipovaItogОтпускМатериалаEForm from './forms/i-i-s-k-r-osipova-itog-отпуск-материала-e';
import IISKROsipovaItogСкладEForm from './forms/i-i-s-k-r-osipova-itog-склад-e';
import IISKROsipovaItogСотрудникиEForm from './forms/i-i-s-k-r-osipova-itog-сотрудники-e';
import IISKROsipovaItogТНEForm from './forms/i-i-s-k-r-osipova-itog-т-н-e';
import IISKROsipovaItogТЧАктаПриемкиEForm from './forms/i-i-s-k-r-osipova-itog-т-ч-акта-приемки-e';
import IISKROsipovaItogАктПриемкиModel from './models/i-i-s-k-r-osipova-itog-акт-приемки';
import IISKROsipovaItogЗаказModel from './models/i-i-s-k-r-osipova-itog-заказ';
import IISKROsipovaItogОтпускМатериалаModel from './models/i-i-s-k-r-osipova-itog-отпуск-материала';
import IISKROsipovaItogСкладModel from './models/i-i-s-k-r-osipova-itog-склад';
import IISKROsipovaItogСотрудникиModel from './models/i-i-s-k-r-osipova-itog-сотрудники';
import IISKROsipovaItogТНModel from './models/i-i-s-k-r-osipova-itog-т-н';
import IISKROsipovaItogТЧАктаПриемкиModel from './models/i-i-s-k-r-osipova-itog-т-ч-акта-приемки';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-k-r-osipova-itog-акт-приемки': IISKROsipovaItogАктПриемкиModel,
    'i-i-s-k-r-osipova-itog-заказ': IISKROsipovaItogЗаказModel,
    'i-i-s-k-r-osipova-itog-отпуск-материала': IISKROsipovaItogОтпускМатериалаModel,
    'i-i-s-k-r-osipova-itog-склад': IISKROsipovaItogСкладModel,
    'i-i-s-k-r-osipova-itog-сотрудники': IISKROsipovaItogСотрудникиModel,
    'i-i-s-k-r-osipova-itog-т-н': IISKROsipovaItogТНModel,
    'i-i-s-k-r-osipova-itog-т-ч-акта-приемки': IISKROsipovaItogТЧАктаПриемкиModel
  },

  'application-name': 'K r osipova itog',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'K r osipova itog',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'K r osipova itog',
          title: 'K r osipova itog'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'основные-справочники': {
          caption: 'Основные справочники',
          title: 'Основные справочники',
          'i-i-s-k-r-osipova-itog-отпуск-материала-l': {
            caption: 'Отпуск материала',
            title: ''
          },
          'i-i-s-k-r-osipova-itog-акт-приемки-l': {
            caption: 'Акт приемки',
            title: ''
          }
        },
        'второстепенные-справочники': {
          caption: 'Второстепенные справочники',
          title: 'Второстепенные справочники',
          'i-i-s-k-r-osipova-itog-склад-l': {
            caption: 'Склад',
            title: ''
          },
          'i-i-s-k-r-osipova-itog-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-k-r-osipova-itog-т-ч-акта-приемки-l': {
            caption: 'Т ч акта приемки',
            title: ''
          },
          'i-i-s-k-r-osipova-itog-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-k-r-osipova-itog-т-н-l': {
            caption: 'ТН',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-k-r-osipova-itog-акт-приемки-l': IISKROsipovaItogАктПриемкиLForm,
    'i-i-s-k-r-osipova-itog-заказ-l': IISKROsipovaItogЗаказLForm,
    'i-i-s-k-r-osipova-itog-отпуск-материала-l': IISKROsipovaItogОтпускМатериалаLForm,
    'i-i-s-k-r-osipova-itog-склад-l': IISKROsipovaItogСкладLForm,
    'i-i-s-k-r-osipova-itog-сотрудники-l': IISKROsipovaItogСотрудникиLForm,
    'i-i-s-k-r-osipova-itog-т-н-l': IISKROsipovaItogТНLForm,
    'i-i-s-k-r-osipova-itog-т-ч-акта-приемки-l': IISKROsipovaItogТЧАктаПриемкиLForm,
    'i-i-s-k-r-osipova-itog-акт-приемки-e': IISKROsipovaItogАктПриемкиEForm,
    'i-i-s-k-r-osipova-itog-заказ-e': IISKROsipovaItogЗаказEForm,
    'i-i-s-k-r-osipova-itog-отпуск-материала-e': IISKROsipovaItogОтпускМатериалаEForm,
    'i-i-s-k-r-osipova-itog-склад-e': IISKROsipovaItogСкладEForm,
    'i-i-s-k-r-osipova-itog-сотрудники-e': IISKROsipovaItogСотрудникиEForm,
    'i-i-s-k-r-osipova-itog-т-н-e': IISKROsipovaItogТНEForm,
    'i-i-s-k-r-osipova-itog-т-ч-акта-приемки-e': IISKROsipovaItogТЧАктаПриемкиEForm
  },

});

export default translations;
