import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-k-r-osipova-itog-акт-приемки-l');
  this.route('i-i-s-k-r-osipova-itog-акт-приемки-e',
  { path: 'i-i-s-k-r-osipova-itog-акт-приемки-e/:id' });
  this.route('i-i-s-k-r-osipova-itog-акт-приемки-e.new',
  { path: 'i-i-s-k-r-osipova-itog-акт-приемки-e/new' });
  this.route('i-i-s-k-r-osipova-itog-заказ-l');
  this.route('i-i-s-k-r-osipova-itog-заказ-e',
  { path: 'i-i-s-k-r-osipova-itog-заказ-e/:id' });
  this.route('i-i-s-k-r-osipova-itog-заказ-e.new',
  { path: 'i-i-s-k-r-osipova-itog-заказ-e/new' });
  this.route('i-i-s-k-r-osipova-itog-отпуск-материала-l');
  this.route('i-i-s-k-r-osipova-itog-отпуск-материала-e',
  { path: 'i-i-s-k-r-osipova-itog-отпуск-материала-e/:id' });
  this.route('i-i-s-k-r-osipova-itog-отпуск-материала-e.new',
  { path: 'i-i-s-k-r-osipova-itog-отпуск-материала-e/new' });
  this.route('i-i-s-k-r-osipova-itog-склад-l');
  this.route('i-i-s-k-r-osipova-itog-склад-e',
  { path: 'i-i-s-k-r-osipova-itog-склад-e/:id' });
  this.route('i-i-s-k-r-osipova-itog-склад-e.new',
  { path: 'i-i-s-k-r-osipova-itog-склад-e/new' });
  this.route('i-i-s-k-r-osipova-itog-сотрудники-l');
  this.route('i-i-s-k-r-osipova-itog-сотрудники-e',
  { path: 'i-i-s-k-r-osipova-itog-сотрудники-e/:id' });
  this.route('i-i-s-k-r-osipova-itog-сотрудники-e.new',
  { path: 'i-i-s-k-r-osipova-itog-сотрудники-e/new' });
  this.route('i-i-s-k-r-osipova-itog-т-н-l');
  this.route('i-i-s-k-r-osipova-itog-т-н-e',
  { path: 'i-i-s-k-r-osipova-itog-т-н-e/:id' });
  this.route('i-i-s-k-r-osipova-itog-т-н-e.new',
  { path: 'i-i-s-k-r-osipova-itog-т-н-e/new' });
  this.route('i-i-s-k-r-osipova-itog-т-ч-акта-приемки-l');
  this.route('i-i-s-k-r-osipova-itog-т-ч-акта-приемки-e',
  { path: 'i-i-s-k-r-osipova-itog-т-ч-акта-приемки-e/:id' });
  this.route('i-i-s-k-r-osipova-itog-т-ч-акта-приемки-e.new',
  { path: 'i-i-s-k-r-osipova-itog-т-ч-акта-приемки-e/new' });
});

export default Router;
