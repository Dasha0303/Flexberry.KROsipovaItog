import { Serializer as АктПриемкиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-k-r-osipova-itog-акт-приемки';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(АктПриемкиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
