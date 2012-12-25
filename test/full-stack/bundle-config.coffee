module.exports =
  'test/full-stack/build/bundle-underscore-core.js':
    underscore: 'vendor/underscore-1.4.3.min.js'
    backbone: 'vendor/backbone-0.9.9.min.js'
    'backbone-modelref': 'backbone-modelref'
    'backbone-relational': 'backbone-relational'
    knockout: 'vendor/knockout-2.2.0.min.js'
    knockback: 'knockback-core.js'
    _publish:
      _: 'underscore'
      Backbone: 'backbone'
      ko: 'knockout'

  'test/full-stack/build/bundle-underscore.js':
    underscore: 'vendor/underscore-1.4.3.min.js'
    backbone: 'vendor/backbone-0.9.9.min.js'
    'backbone-modelref': 'backbone-modelref'
    'backbone-relational': 'backbone-relational'
    knockout: 'vendor/knockout-2.2.0.min.js'
    knockback: 'knockback.js'
    'knockback-examples-localization': 'test/_examples/build/_localization_examples.js'
    _publish:
      _: 'underscore'
      Backbone: 'backbone'
      ko: 'knockout'

  'test/full-stack/build/bundle-lodash-core.js':
    lodash: 'vendor/optional/lodash-0.9.0.min.js'
    backbone: 'vendor/backbone-0.9.9.min.js'
    'backbone-modelref': 'backbone-modelref'
    'backbone-relational': 'backbone-relational'
    knockout: 'vendor/knockout-2.2.0.min.js'
    knockback: 'knockback-core.js'
    _alias:
      underscore: 'lodash'
    _publish:
      _: 'underscore'
      Backbone: 'backbone'
      ko: 'knockout'

  'test/full-stack/build/bundle-lodash.js':
    lodash: 'vendor/optional/lodash-0.9.0.min.js'
    backbone: 'vendor/backbone-0.9.9.min.js'
    'backbone-modelref': 'backbone-modelref'
    'backbone-relational': 'backbone-relational'
    knockout: 'vendor/knockout-2.2.0.min.js'
    knockback: 'knockback.js'
    'knockback-examples-localization': 'test/_examples/build/_localization_examples.js'
    _alias:
      underscore: 'lodash'
    _publish:
      _: 'underscore'
      Backbone: 'backbone'
      ko: 'knockout'