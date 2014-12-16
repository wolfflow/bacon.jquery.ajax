(function() {
  var $, Bacon, init;

  init = function(Bacon, $) {
    Bacon.$.ajax = function(params, abort) {
      return Bacon.fromPromise($.ajax(params), abort);
    };
    Bacon.$.ajaxGet = function(url, data, dataType, abort) {
      return Bacon.$.ajax({
        url: url,
        dataType: dataType,
        data: data
      }, abort);
    };
    Bacon.$.ajaxGetJSON = function(url, data, abort) {
      return Bacon.$.ajax({
        url: url,
        dataType: "json",
        data: data
      }, abort);
    };
    Bacon.$.ajaxPost = function(url, data, dataType, abort) {
      return Bacon.$.ajax({
        url: url,
        dataType: dataType,
        data: data,
        type: "POST"
      }, abort);
    };
    Bacon.$.ajaxGetScript = function(url, abort) {
      return Bacon.$.ajax({
        url: url,
        dataType: "script"
      }, abort);
    };
    Bacon.$.lazyAjax = function(params) {
      return Bacon.once(params).flatMap(Bacon.$.ajax);
    };
    Bacon.Observable.prototype.ajax = function() {
      return this.flatMapLatest(Bacon.$.ajax);
    };
    return Bacon.$;
  };

  if (typeof module !== "undefined" && module !== null) {
    Bacon = require("baconjs");
    $ = require("jquery");
    module.exports = init(Bacon, $);
  } else {
    if (typeof define === "function" && define.amd) {
      define(["bacon", "jquery"], init);
    } else {
      init(this.Bacon, this.$);
    }
  }

}).call(this);
