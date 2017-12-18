# Facebook-News-Feed
Script using GRAPH API to GET information about each post from any facebook page. Script Shows content of post, likes(only likes not reactions).


<strong>This how it's looks like:</strong></br></br>
<img src="http://s6808.chomikuj.pl/ChomikImage.aspx?e=R9E0iqC0R6XjmSWcrhbuWrhFWKl1MA59CrVuLLF4UAT87adc6txVzPWeDj10mEH8pWSStXWkY_Hpm8AjCzGa_G8Vj7DSqM5G_K5vte1Yfx8&pv=2" />


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
