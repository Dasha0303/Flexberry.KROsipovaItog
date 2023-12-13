import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-k-r-osipova-itog-отпуск-материала', 'Unit | Model | i-i-s-k-r-osipova-itog-отпуск-материала', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-k-r-osipova-itog-акт-приемки',
    'model:i-i-s-k-r-osipova-itog-заказ',
    'model:i-i-s-k-r-osipova-itog-отпуск-материала',
    'model:i-i-s-k-r-osipova-itog-склад',
    'model:i-i-s-k-r-osipova-itog-сотрудники',
    'model:i-i-s-k-r-osipova-itog-т-н',
    'model:i-i-s-k-r-osipova-itog-т-ч-акта-приемки',
    'model:i-i-s-k-r-osipova-itog1-акт-приемки',
    'model:i-i-s-k-r-osipova-itog1-заказ',
    'model:i-i-s-k-r-osipova-itog1-отпуск-материала',
    'model:i-i-s-k-r-osipova-itog1-склад',
    'model:i-i-s-k-r-osipova-itog1-сотрудники',
    'model:i-i-s-k-r-osipova-itog1-т-н',
    'model:i-i-s-k-r-osipova-itog1-т-ч-акта-приемки',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
