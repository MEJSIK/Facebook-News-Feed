# Facebook-News-Feed
Script using GRAPH API to GET information about each post from any facebook page. Script Shows content of post, likes(only likes not reactions).


<strong>This how it's looks like:</strong></br></br>
<img src="https://github.com/MEJSIK/Facebook-News-Feed/blob/master/demo.jpg" />


I used angular.js and Facebook Graph API.</br></br>

<strong>feed.js:</strong>
<pre>
var app = angular.module('facebookFeed', []);
var pageId = '[PAGE-ID]'; //Your PageID
var token = '[APP-ID]]|[SECRET-CODE]'; //Your Access Token

// Request below GET every post using Graph API
app.controller('facebookFeedControler', function ($scope, $http) {
    $http.get(`https://graph.facebook.com/${pageId}/?fields=posts.limit(10){message,likes.limit(0).summary(1),created_time}&access_token=${token}`)
        .then(function (response) {
            $scope.posts = response.data.posts.data;
        });
});
</pre>

<strong>NOTE:</strong>To get into any data use '{}' ex. {{post.message}} in HTML file.


<strong>NOTE:</strong> You just need pageID and access token. <strong>In near future I will upgrade to show all reactions and comments with reactions.</strong>
