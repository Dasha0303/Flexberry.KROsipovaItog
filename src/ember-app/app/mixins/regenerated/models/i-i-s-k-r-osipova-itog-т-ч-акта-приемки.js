import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерПозиции: DS.attr('number'),
  склад: DS.belongsTo('i-i-s-k-r-osipova-itog-склад', { inverse: null, async: false }),
  тН: DS.belongsTo('i-i-s-k-r-osipova-itog-т-н', { inverse: null, async: false })
});

export let ValidationRules = {
  номерПозиции: {
    descriptionKey: 'models.i-i-s-k-r-osipova-itog-т-ч-акта-приемки.validations.номерПозиции.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  склад: {
    descriptionKey: 'models.i-i-s-k-r-osipova-itog-т-ч-акта-приемки.validations.склад.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тН: {
    descriptionKey: 'models.i-i-s-k-r-osipova-itog-т-ч-акта-приемки.validations.тН.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧАктаПриемкиE', 'i-i-s-k-r-osipova-itog-т-ч-акта-приемки', {
    номерПозиции: attr('Номер позиции', { index: 0 }),
    склад: belongsTo('i-i-s-k-r-osipova-itog-склад', 'Склад', {
      имяСклада: attr('Имя склада', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'имяСклада' }),
    тН: belongsTo('i-i-s-k-r-osipova-itog-т-н', 'ТН', {
      колво: attr('Колво', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'колво' })
  });

  modelClass.defineProjection('ТЧАктаПриемкиL', 'i-i-s-k-r-osipova-itog-т-ч-акта-приемки', {
    номерПозиции: attr('Номер позиции', { index: 0 }),
    склад: belongsTo('i-i-s-k-r-osipova-itog-склад', 'Имя склада', {
      имяСклада: attr('Имя склада', { index: 1 })
    }, { index: -1, hidden: true }),
    тН: belongsTo('i-i-s-k-r-osipova-itog-т-н', 'Колво', {
      колво: attr('Колво', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
