var searchBtn = document.querySelector('#searchBtn');
var input = document.querySelector('input');
var article = document.querySelector('article');
var div = document.querySelector('div');

var count = 0;

var loadmoreBtn = document.querySelector('#loadmoreBtn');

var handleRemove = function (event) {
  //event.preventDefault(); // This can override the SUBMIT behaviour of the button inside the form.

  if (event.target.previousSibling.nodeName === "IMG") {
    event.target.previousSibling.parentNode.removeChild(event.target.previousSibling);
  }
}

var handleClick = function (event) {
   event.preventDefault();

  var options = {
    url: `http://api.giphy.com/v1/gifs/search?q=${input.value}&api_key=<APIKEY>&limit=5`,
  }

  var handleDone = function (res) {
    // console.log(res.data[0].images.original_still.url);
    
    res.data.forEach(function(image) {
      var img = document.createElement('img')
      img.src = image.images.original.url

      var removeBtn = document.createElement('button');
      removeBtn.innerHTML = 'Remove Image';
      //removeBtn.type = 'button';
      /*
      If you have a look at the W3C specification, it would seem like the obvious thing to try is to mark your button elements with type='button' when you don't want them to submit.

      The thing to note in particular is where it says
      A button element with no type attribute specified represents the same thing as a button element with its type attribute set to "submit"
      */

      removeBtn.addEventListener('click', handleRemove);

      article.append(img)
      article.append(removeBtn)

    })
  }

  $.ajax(options).done(handleDone)
}

var handleScroll = function (event) {
  if($(window).scrollTop() + $(window).height() > $(document).height() - 100) { 
    count++;

    if (count < 5) {
      handleClick(event);
    }
    else if (count === 5) {
      var loadmoreBtn = document.createElement('button');
      loadmoreBtn.innerHTML = 'Load More';
      loadmoreBtn.id = 'loadmoreBtn';
      div.append(loadmoreBtn);
      loadmoreBtn.addEventListener('click', handleClick);
    }
  }
}

searchBtn.addEventListener('click', handleClick);
window.addEventListener('scroll', handleScroll)
