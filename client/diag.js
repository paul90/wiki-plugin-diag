(function() {
  var bind, consumes , emit, expand;

  expand = text => {
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\*(.+?)\*/g, '<i>$1</i>')
  }

  consumes = ['.diag']

  emit = ($item, item) => {
    var emitTime = performance.now()
    $item[0].consuming = []
    $item.addClass('output-item')
    // some diagnostics...
    console.log('diag emit ' + item.id + ' at ' + emitTime )
    console.trace()
    $item.append(`
    <table>
      <tr><th>ID</th><td>${item.id}</td></tr>
      <tr><th>Emit Time</th><td>${emitTime}</td></tr>
    </table>
    <hr>`)
    $item.dblclick(() => {
      return wiki.textEditor($item, item);
    })
  }

  bind = ($item, item) => {
    var bindTime = performance.now()
    $item.find('table').append(`
    <tr><th>Bind Time</th><td>${bindTime}</td></tr>`)
    let toLeft = $(`.item:lt(${$('.item').index($item)})`).filter('.diag').last()
    console.log('diag bind ' + item.id + ' at ' + bindTime )
    console.trace()
    let toLeftID = toLeft.data('id')
    if (typeof toLeftID !== "undefined") {
      let onPageKey = $(toLeft).closest('.page').data('key')
      let toLeftID = $(toLeft).data('id')
      console.log('onPage', onPageKey)
      let pageItem = `${onPageKey}/${toLeftID}`
      console.log('pageItem', pageItem)
      $item[0].consuming.push(pageItem)
      $item.find('table').append(`
      <tr><th>Previous Item ID</th><td>${toLeftID}</td></tr>`)
    }
    return
  }

  if (typeof window !== "undefined" && window !== null) {
    window.plugins.diag = {consumes, emit, bind};
  }

  if (typeof module !== "undefined" && module !== null) {
    module.exports = {expand};
  }

}).call(this)
