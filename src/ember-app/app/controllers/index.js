import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.основные-справочники.caption'),
          title: i18n.t('forms.application.sitemap.основные-справочники.title'),
          children: [{
            link: 'i-i-s-k-r-osipova-itog1-отпуск-материала-l',
            caption: i18n.t('forms.application.sitemap.основные-справочники.i-i-s-k-r-osipova-itog1-отпуск-материала-l.caption'),
            title: i18n.t('forms.application.sitemap.основные-справочники.i-i-s-k-r-osipova-itog1-отпуск-материала-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-k-r-osipova-itog1-акт-приемки-l',
            caption: i18n.t('forms.application.sitemap.основные-справочники.i-i-s-k-r-osipova-itog1-акт-приемки-l.caption'),
            title: i18n.t('forms.application.sitemap.основные-справочники.i-i-s-k-r-osipova-itog1-акт-приемки-l.title'),
            icon: 'table',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.второстепенные-справочники.caption'),
          title: i18n.t('forms.application.sitemap.второстепенные-справочники.title'),
          children: [{
            link: 'i-i-s-k-r-osipova-itog1-склад-l',
            caption: i18n.t('forms.application.sitemap.второстепенные-справочники.i-i-s-k-r-osipova-itog1-склад-l.caption'),
            title: i18n.t('forms.application.sitemap.второстепенные-справочники.i-i-s-k-r-osipova-itog1-склад-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-k-r-osipova-itog1-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.второстепенные-справочники.i-i-s-k-r-osipova-itog1-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.второстепенные-справочники.i-i-s-k-r-osipova-itog1-сотрудники-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-k-r-osipova-itog1-т-ч-акта-приемки-l',
            caption: i18n.t('forms.application.sitemap.второстепенные-справочники.i-i-s-k-r-osipova-itog1-т-ч-акта-приемки-l.caption'),
            title: i18n.t('forms.application.sitemap.второстепенные-справочники.i-i-s-k-r-osipova-itog1-т-ч-акта-приемки-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-k-r-osipova-itog1-заказ-l',
            caption: i18n.t('forms.application.sitemap.второстепенные-справочники.i-i-s-k-r-osipova-itog1-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.второстепенные-справочники.i-i-s-k-r-osipova-itog1-заказ-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-k-r-osipova-itog1-т-н-l',
            caption: i18n.t('forms.application.sitemap.второстепенные-справочники.i-i-s-k-r-osipova-itog1-т-н-l.caption'),
            title: i18n.t('forms.application.sitemap.второстепенные-справочники.i-i-s-k-r-osipova-itog1-т-н-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})