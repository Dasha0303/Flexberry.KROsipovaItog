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
    
  });

  modelClass.defineProjection('АктПриемкиL', 'i-i-s-k-r-osipova-itog-акт-приемки', {
    
  });
};
