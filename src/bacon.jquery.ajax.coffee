init = (Bacon, $) ->
  Bacon.$.ajax = (params, abort) -> Bacon.fromPromise $.ajax(params), abort
  Bacon.$.ajaxGet = (url, data, dataType, abort) -> Bacon.$.ajax({url, dataType, data}, abort)
  Bacon.$.ajaxGetJSON = (url, data, abort) -> Bacon.$.ajax({url, dataType: "json", data}, abort)
  Bacon.$.ajaxPost = (url, data, dataType, abort) -> Bacon.$.ajax({url, dataType, data, type: "POST"}, abort)
  Bacon.$.ajaxGetScript = (url, abort) -> Bacon.$.ajax({url, dataType: "script"}, abort)
  Bacon.$.lazyAjax = (params) -> Bacon.once(params).flatMap(Bacon.$.ajax)
  Bacon.Observable::ajax = -> @flatMapLatest Bacon.$.ajax
  Bacon.$

if module?
  Bacon = require "baconjs"
  $ = require "jquery"
  module.exports = init Bacon, $
else
  if typeof define == "function" and define.amd
    define ["bacon", "jquery"], init
  else
    init @Bacon, @$
