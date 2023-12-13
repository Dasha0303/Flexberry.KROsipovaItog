import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKROsipovaItogАктПриемкиLForm from './forms/i-i-s-k-r-osipova-itog-акт-приемки-l';
import IISKROsipovaItogЗаказLForm from './forms/i-i-s-k-r-osipova-itog-заказ-l';
import IISKROsipovaItogОтпускМатериалаLForm from './forms/i-i-s-k-r-osipova-itog-отпуск-материала-l';
import IISKROsipovaItogСкладLForm from './forms/i-i-s-k-r-osipova-itog-склад-l';
import IISKROsipovaItogСотрудникиLForm from './forms/i-i-s-k-r-osipova-itog-сотрудники-l';
import IISKROsipovaItogТНLForm from './forms/i-i-s-k-r-osipova-itog-т-н-l';
import IISKROsipovaItogТЧАктаПриемкиLForm from './forms/i-i-s-k-r-osipova-itog-т-ч-акта-приемки-l';
import IISKROsipovaItog1АктПриемкиLForm from './forms/i-i-s-k-r-osipova-itog1-акт-приемки-l';
import IISKROsipovaItog1ЗаказLForm from './forms/i-i-s-k-r-osipova-itog1-заказ-l';
import IISKROsipovaItog1ОтпускМатериалаLForm from './forms/i-i-s-k-r-osipova-itog1-отпуск-материала-l';
import IISKROsipovaItog1СкладLForm from './forms/i-i-s-k-r-osipova-itog1-склад-l';
import IISKROsipovaItog1СотрудникиLForm from './forms/i-i-s-k-r-osipova-itog1-сотрудники-l';
import IISKROsipovaItog1ТНLForm from './forms/i-i-s-k-r-osipova-itog1-т-н-l';
import IISKROsipovaItog1ТЧАктаПриемкиLForm from './forms/i-i-s-k-r-osipova-itog1-т-ч-акта-приемки-l';
import IISKROsipovaItogАктПриемкиEForm from './forms/i-i-s-k-r-osipova-itog-акт-приемки-e';
import IISKROsipovaItogЗаказEForm from './forms/i-i-s-k-r-osipova-itog-заказ-e';
import IISKROsipovaItogОтпускМатериалаEForm from './forms/i-i-s-k-r-osipova-itog-отпуск-материала-e';
import IISKROsipovaItogСкладEForm from './forms/i-i-s-k-r-osipova-itog-склад-e';
import IISKROsipovaItogСотрудникиEForm from './forms/i-i-s-k-r-osipova-itog-сотрудники-e';
import IISKROsipovaItogТНEForm from './forms/i-i-s-k-r-osipova-itog-т-н-e';
import IISKROsipovaItogТЧАктаПриемкиEForm from './forms/i-i-s-k-r-osipova-itog-т-ч-акта-приемки-e';
import IISKROsipovaItog1АктПриемкиEForm from './forms/i-i-s-k-r-osipova-itog1-акт-приемки-e';
import IISKROsipovaItog1ЗаказEForm from './forms/i-i-s-k-r-osipova-itog1-заказ-e';
import IISKROsipovaItog1ОтпускМатериалаEForm from './forms/i-i-s-k-r-osipova-itog1-отпуск-материала-e';
import IISKROsipovaItog1СкладEForm from './forms/i-i-s-k-r-osipova-itog1-склад-e';
import IISKROsipovaItog1СотрудникиEForm from './forms/i-i-s-k-r-osipova-itog1-сотрудники-e';
import IISKROsipovaItog1ТНEForm from './forms/i-i-s-k-r-osipova-itog1-т-н-e';
import IISKROsipovaItog1ТЧАктаПриемкиEForm from './forms/i-i-s-k-r-osipova-itog1-т-ч-акта-приемки-e';
import IISKROsipovaItogАктПриемкиModel from './models/i-i-s-k-r-osipova-itog-акт-приемки';
import IISKROsipovaItogЗаказModel from './models/i-i-s-k-r-osipova-itog-заказ';
import IISKROsipovaItogОтпускМатериалаModel from './models/i-i-s-k-r-osipova-itog-отпуск-материала';
import IISKROsipovaItogСкладModel from './models/i-i-s-k-r-osipova-itog-склад';
import IISKROsipovaItogСотрудникиModel from './models/i-i-s-k-r-osipova-itog-сотрудники';
import IISKROsipovaItogТНModel from './models/i-i-s-k-r-osipova-itog-т-н';
import IISKROsipovaItogТЧАктаПриемкиModel from './models/i-i-s-k-r-osipova-itog-т-ч-акта-приемки';
import IISKROsipovaItog1АктПриемкиModel from './models/i-i-s-k-r-osipova-itog1-акт-приемки';
import IISKROsipovaItog1ЗаказModel from './models/i-i-s-k-r-osipova-itog1-заказ';
import IISKROsipovaItog1ОтпускМатериалаModel from './models/i-i-s-k-r-osipova-itog1-отпуск-материала';
import IISKROsipovaItog1СкладModel from './models/i-i-s-k-r-osipova-itog1-склад';
import IISKROsipovaItog1СотрудникиModel from './models/i-i-s-k-r-osipova-itog1-сотрудники';
import IISKROsipovaItog1ТНModel from './models/i-i-s-k-r-osipova-itog1-т-н';
import IISKROsipovaItog1ТЧАктаПриемкиModel from './models/i-i-s-k-r-osipova-itog1-т-ч-акта-приемки';

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
    'i-i-s-k-r-osipova-itog-т-ч-акта-приемки': IISKROsipovaItogТЧАктаПриемкиModel,
    'i-i-s-k-r-osipova-itog1-акт-приемки': IISKROsipovaItog1АктПриемкиModel,
    'i-i-s-k-r-osipova-itog1-заказ': IISKROsipovaItog1ЗаказModel,
    'i-i-s-k-r-osipova-itog1-отпуск-материала': IISKROsipovaItog1ОтпускМатериалаModel,
    'i-i-s-k-r-osipova-itog1-склад': IISKROsipovaItog1СкладModel,
    'i-i-s-k-r-osipova-itog1-сотрудники': IISKROsipovaItog1СотрудникиModel,
    'i-i-s-k-r-osipova-itog1-т-н': IISKROsipovaItog1ТНModel,
    'i-i-s-k-r-osipova-itog1-т-ч-акта-приемки': IISKROsipovaItog1ТЧАктаПриемкиModel
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
          'i-i-s-k-r-osipova-itog1-отпуск-материала-l': {
            caption: 'Отпуск материала',
            title: ''
          },
          'i-i-s-k-r-osipova-itog1-акт-приемки-l': {
            caption: 'Акт приемки',
            title: ''
          },
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
          'i-i-s-k-r-osipova-itog1-склад-l': {
            caption: 'Склад',
            title: ''
          },
          'i-i-s-k-r-osipova-itog1-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-k-r-osipova-itog1-т-ч-акта-приемки-l': {
            caption: 'Т ч акта приемки',
            title: ''
          },
          'i-i-s-k-r-osipova-itog1-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-k-r-osipova-itog1-т-н-l': {
            caption: 'ТН',
            title: ''
          },
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
    'i-i-s-k-r-osipova-itog1-акт-приемки-l': IISKROsipovaItog1АктПриемкиLForm,
    'i-i-s-k-r-osipova-itog1-заказ-l': IISKROsipovaItog1ЗаказLForm,
    'i-i-s-k-r-osipova-itog1-отпуск-материала-l': IISKROsipovaItog1ОтпускМатериалаLForm,
    'i-i-s-k-r-osipova-itog1-склад-l': IISKROsipovaItog1СкладLForm,
    'i-i-s-k-r-osipova-itog1-сотрудники-l': IISKROsipovaItog1СотрудникиLForm,
    'i-i-s-k-r-osipova-itog1-т-н-l': IISKROsipovaItog1ТНLForm,
    'i-i-s-k-r-osipova-itog1-т-ч-акта-приемки-l': IISKROsipovaItog1ТЧАктаПриемкиLForm,
    'i-i-s-k-r-osipova-itog-акт-приемки-e': IISKROsipovaItogАктПриемкиEForm,
    'i-i-s-k-r-osipova-itog-заказ-e': IISKROsipovaItogЗаказEForm,
    'i-i-s-k-r-osipova-itog-отпуск-материала-e': IISKROsipovaItogОтпускМатериалаEForm,
    'i-i-s-k-r-osipova-itog-склад-e': IISKROsipovaItogСкладEForm,
    'i-i-s-k-r-osipova-itog-сотрудники-e': IISKROsipovaItogСотрудникиEForm,
    'i-i-s-k-r-osipova-itog-т-н-e': IISKROsipovaItogТНEForm,
    'i-i-s-k-r-osipova-itog-т-ч-акта-приемки-e': IISKROsipovaItogТЧАктаПриемкиEForm,
    'i-i-s-k-r-osipova-itog1-акт-приемки-e': IISKROsipovaItog1АктПриемкиEForm,
    'i-i-s-k-r-osipova-itog1-заказ-e': IISKROsipovaItog1ЗаказEForm,
    'i-i-s-k-r-osipova-itog1-отпуск-материала-e': IISKROsipovaItog1ОтпускМатериалаEForm,
    'i-i-s-k-r-osipova-itog1-склад-e': IISKROsipovaItog1СкладEForm,
    'i-i-s-k-r-osipova-itog1-сотрудники-e': IISKROsipovaItog1СотрудникиEForm,
    'i-i-s-k-r-osipova-itog1-т-н-e': IISKROsipovaItog1ТНEForm,
    'i-i-s-k-r-osipova-itog1-т-ч-акта-приемки-e': IISKROsipovaItog1ТЧАктаПриемкиEForm
  },

});

export default translations;
