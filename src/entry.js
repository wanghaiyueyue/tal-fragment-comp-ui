// 用于构建时的入口
// Basic
import ElButton from '../packages/button';
import ElDivider from '../packages/divider'
import { version } from '../package.json';

const components = [ElButton, ElDivider];

const install = (app, opts = {}) => {
  app.use(setupGlobalOptions(opts));

  components.forEach((component) => {
    app.use(component);
  });
};

const setupGlobalOptions = (opts = {}) => {
  return (app) => {
    app.config.globalProperties.$ELEMENT = {
      size: opts.size || '',
      zIndex: opts.zIndex || 2000
    };
  };
};

const elementUI = {
  version,
  install
};

export { ElButton, install };

export default elementUI;
