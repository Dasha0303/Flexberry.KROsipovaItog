import {
  defineNamespace,
  defineProjections,
  Model as ОтпускМатериалаMixin
} from '../mixins/regenerated/models/i-i-s-k-r-osipova-itog1-отпуск-материала';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтпускМатериалаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
