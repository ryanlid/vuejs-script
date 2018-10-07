import Alert from './components/alert';

const components = {
  Alert
}

const install = function (Vue, opts = {}) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = components;

export default API;
