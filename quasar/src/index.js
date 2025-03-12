/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 */

function extendConf(conf, api) {
  // make sure my-component boot file is registered
  // conf.boot.push('~quasar-app-extension-common-component/src/boot/register-component.js');

  // @quasar/app-vite does not need this
  if (api.hasVite !== true) {
    // make sure boot & component files get transpiled
    conf.build.transpileDependencies.push(/quasar-app-extension-common-component[\\/]src/);
  }

  // make sure css goes through webpack to avoid ssr issues
  conf.css.push('~quasar-app-extension-common-component/src/css/tailwind.scss');
}

export default function (api) {
  // (Optional!)
  // Quasar compatibility check; you may need
  // hard dependencies, as in a minimum version of the "quasar"
  // package or a minimum version of Quasar App CLI
  api.compatibleWith('quasar', '^2.0.0');

  if (api.hasVite === true) {
    api.compatibleWith('@quasar/app-vite', '^2.0.0');
  } else {
    // api.hasWebpack === true
    api.compatibleWith('@quasar/app-webpack', '^4.0.0');
  }

  // Here we extend the /quasar.config file, so we can add
  // a boot file which registers our new UI component;
  api.extendQuasarConf(extendConf);
}
