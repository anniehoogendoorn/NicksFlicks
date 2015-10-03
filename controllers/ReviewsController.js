nicksFlicks.controller('ReviewsCtrl', function ReviewsCtrl($scope, $stateParams, ReviewsFactory, UtilitiesFactory) {
  $scope.reviews = ReviewsFactory.reviews;
  $scope.ReviewsFactory = ReviewsFactory;
  $scope.reviewtext = UtilitiesFactory.findById(ReviewsFactory.reviews, $stateParams.reviewId)

});
