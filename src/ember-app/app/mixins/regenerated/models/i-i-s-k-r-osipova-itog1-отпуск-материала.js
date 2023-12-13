import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПроводки: DS.attr('date', { defaultValue() { return new Date(); } }),
  заказ: DS.belongsTo('i-i-s-k-r-osipova-itog1-заказ', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-k-r-osipova-itog1-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  датаПроводки: {
    descriptionKey: 'models.i-i-s-k-r-osipova-itog1-отпуск-материала.validations.датаПроводки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-k-r-osipova-itog1-отпуск-материала.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-k-r-osipova-itog1-отпуск-материала.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтпускМатериалаE', 'i-i-s-k-r-osipova-itog1-отпуск-материала', {
    датаПроводки: attr('Дата проводки', { index: 0 }),
    сотрудники: belongsTo('i-i-s-k-r-osipova-itog1-сотрудники', '', {
      фИО: attr('', { index: 1 }),
      должность: attr('', { index: 2 })
    }, { index: -1, hidden: true }),
    заказ: belongsTo('i-i-s-k-r-osipova-itog1-заказ', '', {
      номерЗаказа: attr('', { index: 3 }),
      фИОЗаказчика: attr('', { index: 4 }),
      адресЗаказа: attr('', { index: 5 }),
      способДоставки: attr('', { index: 6 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('ОтпускМатериалаL', 'i-i-s-k-r-osipova-itog1-отпуск-материала', {
    датаПроводки: attr('Дата проводки', { index: 0 }),
    сотрудники: belongsTo('i-i-s-k-r-osipova-itog1-сотрудники', '', {
      фИО: attr('', { index: 1 }),
      должность: attr('', { index: 2 })
    }, { index: -1, hidden: true }),
    заказ: belongsTo('i-i-s-k-r-osipova-itog1-заказ', '', {
      номерЗаказа: attr('', { index: 3 }),
      фИОЗаказчика: attr('', { index: 4 }),
      адресЗаказа: attr('', { index: 5 }),
      способДоставки: attr('', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
