/*
  knockback-statistics.js 0.16.8
  (c) 2011, 2012 Kevin Malakoff - http://kmalakoff.github.com/knockback/
  License: MIT (http://www.opensource.org/licenses/mit-license.php)
  Dependencies: Knockout.js, Backbone.js, and Underscore.js.
*/
(function() {
  return (function(factory) {
    // AMD
    if (typeof define === 'function' && define.amd) {
      return define('knockback-statistics', ['underscore', 'backbone', 'knockout', 'knockback'], factory);
    }
    // CommonJS/NodeJS or No Loader
    else {
      return factory.call(this);
    }
  })(function() {// Generated by CoffeeScript 1.3.3
var Backbone, kb, ko, _, _unwrapObservable;

kb = !this.kb && (typeof require !== 'undefined') ? require('knockback') : this.kb;

_ = kb._;

Backbone = kb.Backbone;

ko = kb.ko;

this.Knockback = this.kb = kb;

if (typeof exports !== 'undefined') {
  module.exports = kb;
}

_unwrapObservable = ko.utils.unwrapObservable;

/*
  knockback_statistics.js 0.16.8
  (c) 2012 Kevin Malakoff.
  Knockback.Stats is freely distributable under the MIT license.
  See the following for full license details:
    https://github.com/kmalakoff/knockback/blob/master/LICENSE
*/


kb.Statistics = (function() {

  function Statistics() {
    this.model_events_tracker = [];
    this.registered_tracker = {};
  }

  Statistics.prototype.clear = function() {
    return this.model_events_tracker = [];
  };

  Statistics.prototype.addModelEvent = function(event) {
    return this.model_events_tracker.push(event);
  };

  Statistics.prototype.modelEventsStatsString = function() {
    var event_groups, key, stats_string, value;
    stats_string = '';
    stats_string += "Total Count: " + this.model_events_tracker.length;
    event_groups = _.groupBy(this.model_events_tracker, function(test) {
      return "event name: '" + test.name + "', attribute name: '" + test.key + "'";
    });
    for (key in event_groups) {
      value = event_groups[key];
      stats_string += "\n " + key + ", count: " + value.length;
    }
    return stats_string;
  };

  Statistics.prototype.register = function(key, obj) {
    return this.registeredTracker(key).push(obj);
  };

  Statistics.prototype.unregister = function(key, obj) {
    var index, type_tracker;
    type_tracker = this.registeredTracker(key);
    index = _.indexOf(type_tracker, obj);
    if (index < 0) {
      console.log("kb.Statistics: failed to unregister type: " + key);
    }
    return type_tracker.splice(index, 1);
  };

  Statistics.prototype.registeredCount = function(type) {
    var count, type_tracker, _ref;
    if (type) {
      return this.registeredTracker(type).length;
    }
    count = 0;
    _ref = this.registered_tracker[type];
    for (type in _ref) {
      type_tracker = _ref[type];
      count += type_tracker.length;
    }
    return count;
  };

  Statistics.prototype.registeredStatsString = function(success_message) {
    var stats_string, type, type_tracker, written, _ref;
    stats_string = '';
    _ref = this.registered_tracker;
    for (type in _ref) {
      type_tracker = _ref[type];
      if (!type_tracker.length) {
        continue;
      }
      if (written) {
        stats_string += '\n ';
      }
      stats_string += "" + (type ? type : 'No Name') + ": " + type_tracker.length;
      written = true;
    }
    if (stats_string) {
      return stats_string;
    } else {
      return success_message;
    }
  };

  Statistics.prototype.registeredTracker = function(key) {
    var type_tracker;
    if (this.registered_tracker.hasOwnProperty(key)) {
      return this.registered_tracker[key];
    }
    type_tracker = [];
    this.registered_tracker[key] = type_tracker;
    return type_tracker;
  };

  return Statistics;

})();
; return kb;});
}).call(this);