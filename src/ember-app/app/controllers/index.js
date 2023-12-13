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
            link: 'i-i-s-k-r-osipova-itog-отпуск-материала-l',
            caption: i18n.t('forms.application.sitemap.основные-справочники.i-i-s-k-r-osipova-itog-отпуск-материала-l.caption'),
            title: i18n.t('forms.application.sitemap.основные-справочники.i-i-s-k-r-osipova-itog-отпуск-материала-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-k-r-osipova-itog-акт-приемки-l',
            caption: i18n.t('forms.application.sitemap.основные-справочники.i-i-s-k-r-osipova-itog-акт-приемки-l.caption'),
            title: i18n.t('forms.application.sitemap.основные-справочники.i-i-s-k-r-osipova-itog-акт-приемки-l.title'),
            icon: 'building',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.второстепенные-справочники.caption'),
          title: i18n.t('forms.application.sitemap.второстепенные-справочники.title'),
          children: [{
            link: 'i-i-s-k-r-osipova-itog-склад-l',
            caption: i18n.t('forms.application.sitemap.второстепенные-справочники.i-i-s-k-r-osipova-itog-склад-l.caption'),
            title: i18n.t('forms.application.sitemap.второстепенные-справочники.i-i-s-k-r-osipova-itog-склад-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-k-r-osipova-itog-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.второстепенные-справочники.i-i-s-k-r-osipova-itog-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.второстепенные-справочники.i-i-s-k-r-osipova-itog-сотрудники-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-k-r-osipova-itog-т-ч-акта-приемки-l',
            caption: i18n.t('forms.application.sitemap.второстепенные-справочники.i-i-s-k-r-osipova-itog-т-ч-акта-приемки-l.caption'),
            title: i18n.t('forms.application.sitemap.второстепенные-справочники.i-i-s-k-r-osipova-itog-т-ч-акта-приемки-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-k-r-osipova-itog-заказ-l',
            caption: i18n.t('forms.application.sitemap.второстепенные-справочники.i-i-s-k-r-osipova-itog-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.второстепенные-справочники.i-i-s-k-r-osipova-itog-заказ-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-k-r-osipova-itog-т-н-l',
            caption: i18n.t('forms.application.sitemap.второстепенные-справочники.i-i-s-k-r-osipova-itog-т-н-l.caption'),
            title: i18n.t('forms.application.sitemap.второстепенные-справочники.i-i-s-k-r-osipova-itog-т-н-l.title'),
            icon: 'table',
            children: null
          }]
        }
      ]
    };
  }),
})