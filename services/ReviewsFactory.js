nicksFlicks.factory('ReviewsFactory', function ReviewsFactory() {
  var factory ={};
  factory.reviews = [ {name: "Hackers is the best ever", id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }];

  Factory.addReview = function() {
    factory.reviews.push({ name: factory.reviewName,
                            id: factory.reviews.length +1,
                            text: factory.reviewText });
    factory.reviewName = null;
  }
  return factory;
});
