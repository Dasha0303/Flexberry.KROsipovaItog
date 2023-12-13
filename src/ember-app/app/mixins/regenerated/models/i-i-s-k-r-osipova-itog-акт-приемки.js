import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПриемки: DS.attr('string', { defaultValue: 'Now' }),
  номерАкта: DS.attr('number'),
  сотрудники: DS.belongsTo('i-i-s-k-r-osipova-itog-сотрудники', { inverse: null, async: false }),
  тН: DS.belongsTo('i-i-s-k-r-osipova-itog-т-н', { inverse: null, async: false }),
  тЧАктаПриемки: DS.belongsTo('i-i-s-k-r-osipova-itog-т-ч-акта-приемки', { inverse: null, async: false })
});

export let ValidationRules = {
  датаПриемки: {
    descriptionKey: 'models.i-i-s-k-r-osipova-itog-акт-приемки.validations.датаПриемки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерАкта: {
    descriptionKey: 'models.i-i-s-k-r-osipova-itog-акт-приемки.validations.номерАкта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-k-r-osipova-itog-акт-приемки.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тН: {
    descriptionKey: 'models.i-i-s-k-r-osipova-itog-акт-приемки.validations.тН.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧАктаПриемки: {
    descriptionKey: 'models.i-i-s-k-r-osipova-itog-акт-приемки.validations.тЧАктаПриемки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АктПриемкиE', 'i-i-s-k-r-osipova-itog-акт-приемки', {
    номерАкта: attr('Номер акта', { index: 0 }),
    датаПриемки: attr('Дата приемки', { index: 1 }),
    сотрудники: belongsTo('i-i-s-k-r-osipova-itog-сотрудники', '', {
      табель: attr('', { index: 2 })
    }, { index: 3 }),
    тН: belongsTo('i-i-s-k-r-osipova-itog-т-н', '', {
      колво: attr('', { index: 4 }),
      материал: attr('', { index: 5 }),
      номерТС: attr('', { index: 6 })
    }, { index: 7 }),
    тЧАктаПриемки: belongsTo('i-i-s-k-r-osipova-itog-т-ч-акта-приемки', '', {
      склад: belongsTo('i-i-s-k-r-osipova-itog-склад', '', {
        кодСклада: attr('', { index: 8 })
      }, { index: -1, hidden: true }),
      тН: belongsTo('i-i-s-k-r-osipova-itog-т-н', '', {
        номерТН: attr('', { index: 9 }),
        номерТС: attr('', { index: 10 }),
        поставщик: attr('', { index: 11 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('АктПриемкиL', 'i-i-s-k-r-osipova-itog-акт-приемки', {
    номерАкта: attr('Номер акта', { index: 0 }),
    датаПриемки: attr('Дата приемки', { index: 1 }),
    сотрудники: belongsTo('i-i-s-k-r-osipova-itog-сотрудники', '', {
      фИО: attr('', { index: 2 }),
      должность: attr('', { index: 3 })
    }, { index: -1, hidden: true }),
    тН: belongsTo('i-i-s-k-r-osipova-itog-т-н', '', {
      номерТН: attr('', { index: 4 }),
      поставщик: attr('', { index: 5 })
    }, { index: -1, hidden: true }),
    тЧАктаПриемки: belongsTo('i-i-s-k-r-osipova-itog-т-ч-акта-приемки', '', {
      номерПозиции: attr('', { index: 6 }),
      тН: belongsTo('i-i-s-k-r-osipova-itog-т-н', '', {
        материал: attr('', { index: 7 }),
        колво: attr('', { index: 8 })
      }, { index: -1, hidden: true }),
      склад: belongsTo('i-i-s-k-r-osipova-itog-склад', '', {
        имяСклада: attr('', { index: 9 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
