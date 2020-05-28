module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // allow paren-less arrow functions
    'indent': [2, 2], // 两个空格的缩进
    'quotes': [2, 'single'], // js必须使用单引号
    'linebreak-style': [2, 'unix'], // 换行风格 unix/windows
    'semi': [2, 'always'], // 语句强制分号结尾
    'no-console': [1, { allow: ['info'] }], // 不允许console语句
    'no-unused-vars': [1], // 声明了变量但是没有使用检测
    'space-unary-ops': [1, { 'words': true, 'nonwords': false }], // 一元运算符的前/后要不要加空格
    'brace-style': [2, '1tbs', { 'allowSingleLine': false }], // 大括号风格
    'comma-spacing': [2, { 'before': false, 'after': true }],   // 逗号后有空格，前没有空格
    'comma-style': [2, 'last'],  // 逗号跟在结尾
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }], // 对象字面量中冒号的前后空格
    'lines-around-comment': [ // 行前/行后备注
      2,
      {
        'beforeBlockComment': false, // 段注释的前后
        'beforeLineComment': false, // 行注释的前面
        'afterBlockComment': false, // 块注释的后面
        'afterLineComment': false, // 行注释的后面
        'allowBlockStart': true,
        'allowObjectStart': true,
        'allowArrayStart': true
      }
    ],
    'max-depth': [2, 4], // 代码最多允许4层嵌套
    'max-len': [1, 160, 2],
    'max-nested-callbacks': [2, 3], // 回调嵌套深度
    'max-params': [2, 5], // 函数最多只能有5个参数
    'max-statements': [1, 80],  // 单个函数最多80条语句
    'no-array-constructor': [2], // 禁止使用数组构造器
    'no-lonely-if': 2, // // 禁止else语句内只有if语句
    'no-multiple-empty-lines': [2, { 'max': 3, 'maxEOF': 1 }], // 空行最多不能超过2行
    'no-nested-ternary': 2,  // 不使用嵌套的三元表达式
    'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
    'no-trailing-spaces': 2, // 一行结束后面不要有空格
    'no-unneeded-ternary': 2, // 禁止不必要的嵌套 var isYes = answer === 1 ? true : false;简单的判断用三元表达式代替
    'object-curly-spacing': [
      2,
      'always',
      // 大括号内是否允许不必要的空格 always始终允许；never始终不允许
      {
        'objectsInObjects': false,
        'arraysInObjects': false
      }
    ],
    'arrow-spacing': 2, // =>的前/后括号
    'block-scoped-var': 2, // 块语句中使用var
    'no-dupe-class-members': 2,
    'no-var': 1, // 禁用var，用let和const代替
    'object-shorthand': [1, 'always'], // 强制对象字面量缩写语法
    'array-bracket-spacing': [2, 'never'], // 是否允许非空数组里面有多余的空格
    'operator-linebreak': [2, 'after'], // 换行时运算符在行尾还是行首
    'semi-spacing': [2, { 'before': false, 'after': true }], // 分号前后空格
    'keyword-spacing': ['error'],
    'space-before-blocks': 2, // 不以新行开始的块{前面要不要有空格
    'block-spacing': [2, 'always'],
    'space-before-function-paren': [2, 'never'], // 函数定义时括号前面要不要有空格
    'space-in-parens': [2, 'never'], // 小括号里面要不要有空格
    'spaced-comment': [
      1, 
      'always',
      {
        'exceptions': ['-', '*', '+']
      }
    ], // 注释风格要不要有空格什么的
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    'no-constant-condition': [2, { 'checkLoops': false }], // 禁止在条件中使用常量表达式
    'no-dupe-args': [2], // 禁止 function 定义中出现重名参数
    'no-dupe-keys': [2], // 禁止对象字面量中出现重复的 key
    'no-duplicate-case': [2], // 禁止出现重复的 case 标签
    'no-empty': [2, { 'allowEmptyCatch': true }], // 禁止出现空语句块
    'no-ex-assign': [2], // 禁止对 catch 子句的参数重新赋值
    'no-empty-character-class': [2], // 禁止在正则表达式中使用空字符集
    'no-extra-boolean-cast': [2], // 禁止不必要的布尔转换
    'no-extra-semi': [1], // 禁止不必要的分号
    'no-func-assign': [2], // 禁止对 function 声明重新赋值
    'no-inner-declarations': [2], // 禁止在嵌套的块中出现变量声明或 function 声明
    'no-invalid-regexp': [2], // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-irregular-whitespace': [2], // 禁止不规则的空白
    'no-obj-calls': [2], // 禁止把全局对象作为函数调用
    'no-prototype-builtins': [2], // 禁止直接调用 Object.prototypes 的内置属性
    'no-sparse-arrays': [2], // 禁用稀疏数组
    'no-unexpected-multiline': [2], // 禁止出现令人困惑的多行表达式
    'no-unreachable': [2], // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unsafe-finally': [2], // 禁止在 finally 语句块中出现控制流语句
    'no-unsafe-negation': [2], // 禁止对关系运算符的左操作数使用否定操作符
    'require-atomic-updates': [2], // 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值
    'use-isnan': [2], // 要求使用 isNaN() 检查 NaN
    'valid-typeof': [2], // 强制 typeof 表达式与有效的字符串进行比较
    'class-methods-use-this': [2], // 强制类方法使用 this
    'complexity': [2, { max: 25 } ], // 指定程序中允许的最大环路复杂度
    'consistent-return': [1], // 要求 return 语句要么总是指定返回的值，要么不指定
    'dot-location': [2], // 强制在点号之前和之后一致的换行
    'eqeqeq': [2, 'always'], // 要求使用 === 和 !==
    'guard-for-in': [2], // 要求 for-in 循环中有一个 if 语句
    'no-empty-pattern': [2], // 禁止使用空解构模式
    'no-eq-null': [2], // 禁止在没有类型检查操作符的情况下与 null 进行比较
    'no-global-assign': [2, { 'exceptions': ['Object'] }], // 禁止对原生对象或只读的全局对象进行赋值
    'no-self-assign': [2], // 禁止自我赋值
    'camelcase': [1], // 强制使用骆驼拼写法命名约定
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
}
