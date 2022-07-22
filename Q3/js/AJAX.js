$(function() {

    let url = "https://picsum.photos/v2/list?page=2&limit=100";
    let callType = "GET";
   var  $demo = $("#demo");
   $ajax = $.ajax({
    url: url,
    method: callType,
    dataType: "json",
    success: function(data) {
     $.each(data, function(i, item) {
        $demo.append(
            
            '<div class="col-lg-4 col-md-12 mb-4 mb-lg-0">' +
            '<img src="' + item.download_url + '" class="img-thumbnail rounded" alt="" height="100px" >' +
            '</div>' +
            '</div>'
        );
     });
    },
    error: function(error) {
     console.log(error);
    }
   });
  });