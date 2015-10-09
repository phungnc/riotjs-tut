function TopStore() {
  riot.observable(this)
  var self = this;
  self.data = {
    top: {
      img: "imgs/intro.jpg",
      alt: "dear brother"
    }
  }
  self.on('init', function() {
    self.trigger('changed', self.data)
  })
}