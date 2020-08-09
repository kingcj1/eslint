// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: { browser: true, node: true, es6: true, },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vue/essential', 
    // 'airbnb-base', 
    // 'standard', 
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // check if imports actually resolve
  settings: { 'import/resolver': { webpack: { config: 'build/webpack.base.conf.js'} } },
  rules: {
    "camelcase": [2, { "properties": "never" }], //强制驼峰命名规则
    "comma-dangle": [2, "never"],// 对象字面量项尾不能有逗号
    "guard-for-in": 0, //监视for in循环，防止出现不可预料的情况
    "indent": [2, 2], //强制一致的缩进风格
    // 'import/extensions': ['error', 'always', { js: 'never', vue: 'never' }],// 导入时不需要.js .vue扩展名
    // 'import/no-extraneous-dependencies': [2, { "optionalDependencies": ['test/unit/index.js'] }],// 允许可选依赖项
    "keyword-spacing": 2, //关键字前后的空格
    'linebreak-style': [0, 'error', 'windows'], //强制执行统一的行结尾
    'no-param-reassign': [2, { props: true, ignorePropertyModificationsFor: ['state', 'acc', 'e'] }],//不允许重新分配函数参数;除了特定的排除之外，不允许参数对象操作
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,//是否允许debugger
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0, //允许出现console语句
    "no-multi-spaces": 2, //不允许出现多余的空格
    "no-extra-semi": 2,//不允许出现不必要的分号
    "no-var": 0, //使用let和const代替var
    "no-plusplus": 0, //允许使用++ --运算符
    "no-sparse-arrays": 2, //数组中不允许出现空位置
    "no-eq-null": 2, //不允许对null用==或者!=
    "no-eval": 2, //不允许使用eval()
    "no-implied-eval": 2, //不允许使用隐式eval()
    "no-new-wrappers": 2, //不允许使用new String，Number和Boolean对象
    "no-self-compare": 2, //不允许自己和自己比较
    "no-sequences": 2, //不允许使用逗号表达式
    "no-shadow-restricted-names": 2, //js关键字和保留字不能作为函数名或者变量名
    "no-alert": 0, //允许使用alert，confirm，prompt语句
    "no-unused-vars": [2, { "vars": "all", "args": "after-used" }],//不允许有声明后未使用的变量或者参数
    "no-use-before-define": [2, "nofunc"], //不允许在未定义之前就使用变量
    // "quote-props": 2, //对象中的属性名是否需要用引号引起来
    "radix": 1, //使用parseInt时强制使用基数来指定是十进制还是其他进制
    "semi": [2], //强制语句不用分号结尾
    "space-before-function-paren": [2, "always"], //函数定义时括号前的空格
    "vue/name-property-casing": [2, "PascalCase"],//
    "vue/prop-name-casing": [2, "camelCase"],//prop使用驼峰
    "vue/v-bind-style": [2, "shorthand"],//使用:
    "vue/v-on-style": [2, "shorthand"], //使用@
    "vue/html-comment-indent": 2,    //在HTML注释中强制一致的缩进
    "vue/no-static-inline-styles": 2,   //禁止静态内联style属性
    "vue/custom-event-name-casing": 2,  //强制自定义事件名称始终使用"kebab-case"
    // "vue/max-attributes-per-line": ["error", { "singleline": 5, "multiline": { "max": 5, "allowFirstLine": true } }],//超出属性换行  
    "vue/attributes-order": [2, { "order": ["DEFINITION", "LIST_RENDERING", "CONDITIONALS", "RENDER_MODIFIERS", "GLOBAL", "UNIQUE", "TWO_WAY_BINDING", "OTHER_DIRECTIVES", "OTHER_ATTR", "EVENTS", "CONTENT"] }],//排序
  }
}
