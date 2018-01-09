var app = angular.module('facebookFeed', []);

var pageId = '153994084663979'; //Your PageID
var token = '1929704930624447|ZL6GwBi0o1eTrtFCYoJ0Phgr4FA'; //Your Access Token


// Request below GET every post using Graph API
app.controller('facebookFeedControler', function ($scope, $http) {
    $http.get(`https://graph.facebook.com/${pageId}/?fields=posts.limit(10){message,likes.limit(0).summary(1),created_time,comments.limit(2),full_picture}&access_token=${token}`)
        .then(function (response) {
            $scope.posts = response.data.posts.data;
            a = $scope.posts[0].created_time;
            console.log(a.substr(0, 10));
        });
});
