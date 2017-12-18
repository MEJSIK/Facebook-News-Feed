# Facebook-News-Feed
Script using GRAPH API to GET information about each post from any facebook page. Script Shows content of post, likes(only likes not reactions).


<strong>This how it's looks like:</strong></br></br>
<img src="http://s8910.chomikuj.pl/ChomikImage.aspx?e=GISFwLwraZPllEXg95h3mcfx_BDF3Zloge6eiyLfkJaBKzACvsJKekxPkvO2W_1KVLFKauP6jr26G8Wzzsinle9aRauW72fzhtdbEA1D52A&pv=2" />


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


<strong>NOTE:</strong> You just need pageID and access token. In near future I will upgrade to show all reactions and comments with reactions.
