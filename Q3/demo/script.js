// Code goes here
$(document).ready(function() {
    $.ajax( {
        url: 'https://picsum.photos/v2/list?page=2&limit=100',
        dataType: 'json',
        success: function(data) {
         var response = '',
             indicator = '';
         for (var i = 0; i < data.length; i++) {
             response += '<div class="item"><img src="' + data[i].download_url + '"><div class="carousel-caption"><h3>' + data[i].id + '</h3><p>' + data[i].author + '</p><p><a class="btn btn-info btn-sm">Read More</a></p></div></div>';
             indicator += '<li data-target="#myCarousel" data-slide-to="'+i+'"></li>';
         }
         $('#homepageItems').append(response);
         $('#indicators').append(indicator);
         $('.item').first().addClass('active');
         $('.carousel-indicators > li').first().addClass('active');
         $("#myCarousel").carousel();
        }
    });
 });