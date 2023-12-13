import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-k-r-osipova-itog1-заказ', 'Unit | Serializer | i-i-s-k-r-osipova-itog1-заказ', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-k-r-osipova-itog1-заказ',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
