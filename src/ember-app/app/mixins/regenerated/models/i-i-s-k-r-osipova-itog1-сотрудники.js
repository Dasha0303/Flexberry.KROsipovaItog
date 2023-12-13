import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  должность: DS.attr('string'),
  табель: DS.attr('string'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  должность: {
    descriptionKey: 'models.i-i-s-k-r-osipova-itog1-сотрудники.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  табель: {
    descriptionKey: 'models.i-i-s-k-r-osipova-itog1-сотрудники.validations.табель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-k-r-osipova-itog1-сотрудники.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-k-r-osipova-itog1-сотрудники', {
    табель: attr('Табель', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    должность: attr('Должность', { index: 2 })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-k-r-osipova-itog1-сотрудники', {
    табель: attr('Табель', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    должность: attr('Должность', { index: 2 })
  });
};
