nicksFlicks.controller('ContentCtrl', function ContentCtrl($scope, $stateParams, ReviewsFactory) {
  $scope.reviewtext = UtilitiesFactory.findById(ReviewsFactory.reviews, $stateParams.reviewId)

  $scope.addReview = function() {
    factory.reviews.push({ name: factory.reviewName,
                            id: factory.reviews.length +1,
                            content: [] });
  }

});
