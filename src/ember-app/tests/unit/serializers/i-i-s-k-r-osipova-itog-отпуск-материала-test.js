import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-k-r-osipova-itog-отпуск-материала', 'Unit | Serializer | i-i-s-k-r-osipova-itog-отпуск-материала', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-k-r-osipova-itog-отпуск-материала',
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
