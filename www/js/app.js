// Dom7
var $$ = Dom7;

var app = new Framework7({
  root: '#app',
  name: "Games App",

  view: {
    pushState: true
  },
  panel: {
    swipe: 'both',
  },
  routes: [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/find-group/',
    url: './pages/find-group.html',
  },
  {
    path: '/create-group/',
    url: './pages/create-group.html',
  },
  {
    path: '/my-groups/',
    url: './pages/my-groups.html',
  },
  {
    path: '/create-profile/',
    url: './pages/create-profile.html',
  },
  {
    path: '/blog-post/',
    url: './pages/blog-post.html',
  },
  {
    path: '/group-overview/',
    url: './pages/group-overview.html',
  },
  {
    path: '/group-overview-frisbee/',
    url: './pages/group-overview-frisbee.html',
  }]
});

var mainView = app.views.create('.view-main');

app.on('init', function (panel) {
  app.loginScreen.open("#my-login-screen", false);
});

$$('#like').on('click', function(e) {
  e.srcElement.innerHTML += '&nbsp;&nbsp;<i class="fa fa-thumbs-up"></i>';
});

// Create toast with icon for CREATED PROFILE
var createdProfileToast = app.toast.create({
  icon: '<i class="fa fa-user-plus"></i>',
  text: 'We created your profile. Have fun!',
  position: 'center',
  closeTimeout: 3000,
});

// Create toast with icon for CREATED PROFILE
var createdGroupToast = app.toast.create({
  icon: '<i class="fa fa-plus"></i>&nbsp;&nbsp;<i class="fa fa-users"></i>',
  text: 'We created your group. Have fun!',
  position: 'center',
  closeTimeout: 3000,
});

$$(document).on('page:afterout', '.page[data-name="create-profile"]', function (e) {
  createdProfileToast.open();
});

$$(document).on('page:afterout', '.page[data-name="create-group"]', function (e) {
  createdGroupToast.open();
});

$$(document).on('page:init', '.page[data-name="find-group"]', function (e) {
  // create searchbar
  var searchbar = app.searchbar.create({
    el: '.searchbar',
    searchContainer: '.list',
    searchIn: '.item-title',
    on: {
      search(sb, query, previousQuery) {
        console.log(query, previousQuery);
      }
    }
  });
});
