# bacon.jquery.ajax

A [bacon.js](https://github.com/baconjs/bacon.js) plugin containing jQuery Ajax methods from [bacon.jquery](https://github.com/baconjs/bacon.jquery)

*Not dependent on [bacon.model](https://github.com/baconjs/bacon.model)*

All the methods return an
`EventStream` of AJAX results. AJAX errors are mapped into `Error`
events in the stream.

Aborted requests are not sent into the error stream. If you want to have a
stream that observes whether an AJAX request is running, use `Bacon.awaiting`.
For example:

    var searchParams = Bacon.once({ url: '/search', data: { query: 'apple' } })
    var ajaxRequest = searchParams.ajax()
    var requestRunning = searchParams.awaiting(ajaxRequest)
    requestRunning.assign($('#ajaxSpinner'), 'toggle')

### stream.ajax(fn)

Performs an AJAX request on each event of your stream, collating results in the result stream.

The source stream is expected to provide the parameters for the AJAX call.

    var usernameRequest = username.map(function(un) { return { type: "get", url: "/usernameavailable/" + un } })
    var usernameAvailable = usernameRequest.changes().ajax()

### Bacon.$.ajax(params)

Performs an AJAX request and returns the results in an EventStream.

    var results = Bacon.$.ajax("/get/results")

or

    var results = Bacon.$.ajax({ url: "/get/results"})

### Bacon.$.lazyAjax(params)

Like above, but performs the AJAX call lazily, i.e. not before it has a subscriber.

### Bacon.$.ajaxGet(url, data, dataType)

### Bacon.$.ajaxGetJSON(url, data)

### Bacon.$.ajaxPost(url, data, dataType)

### Bacon.$.ajaxGetScripts(url)