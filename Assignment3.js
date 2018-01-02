 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBAN9GSqWvCQecMBPYg35d7o15HDQhmFupSLa0RDLlF8Nw9QhXHCktL5YZBgmJoRM2ZCY9kFqqNgR1Jzz8C01oYz3A3d24x8rgORFvCCrUNnKasxIIXLdFQ0VE1ZBPPudrYSoLQYBB9p9ZCCDTY6Jz1EwKPwRJPFDOZCZA4l8dz3ZCPmw6ZBQocvS9zp02S2W2AQZDZD';

    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me/?fields=name,email,location,picture.width(600).height(600),cover,education,posts,birthday,gender,age_range&access_token='+myFacebookToken,{

                success : function(response){
                    $("#school").html('<h3>' +response.education[0].school.name + '</h3>');
                    $("#college").html('<h3>' +response.education[1].school.name + '</h3>');
                    $("#gender").text(response.gender);
                    $("#age").text(response.age_range.min);
                    $("#name").text(response.name);
                    $("#username").text(response.name);
                    $("#email").text(response.email);
                    $("#birthday").text(response.birthday);
                    $("#location").text(response.location.name);
                    $("#profilepic").html('<img src="' + response.picture.data.url + '" alt="not found" style="height:300px;width:300px">');
                    $("#branch").html('<h2>' +response.education[1].concentration[0].name + '</h2>');
                    $("#createdtime").text(response.posts.data[0].created_time);
                    $("#story ").text(response.posts.data[0].story);
                    $("#image").html('<img src="' + response.posts.data[0].link + '" alt="not found" style="height:400px;width:1000px">');
                }
            }//end argument list 



        );// end ajax call 


    }// end get facebook info
getFacebookInfo();
$(".education").hide();
$(".place").hide();
$(".Contacts").hide();
$(".post").hide();
$(".post-btn").click(function(){
        $(".post").toggle();
        $(".post-btn").text("click here to close the post info");
          });
$("#slide-up").click(function(){
        $(".jumbotron").slideUp();
          });
$(".menu-item-1").click(function(){
        $(".menu-item-1").css({"font-weight":"bold","border-left":"solid 2px #2760AD"});
        $(".menu-item-2").css({"font-weight":"normal","border-left":""});
        $(".menu-item-3").css({"font-weight":"normal","border-left":""});
        $(".education").show("500");
        $(".place").hide("500");
        $(".Contacts").hide("500");
                });
$(".menu-item-2").click(function(){
        $(".menu-item-1").css({"font-weight":"normal","border-left":""});
        $(".menu-item-3").css({"font-weight":"normal","border-left":""});
        $(".menu-item-2").css({"font-weight":"bold","border-left":"solid 2px #2760AD"});
        $(".education").hide("500");
        $(".place").show("500");
        $(".Contacts").hide("500");
                });
$(".menu-item-3").click(function(){
        $(".menu-item-1").css({"font-weight":"normal","border-left":""});
        $(".menu-item-2").css({"font-weight":"normal","border-left":""});
        $(".menu-item-3").css({"font-weight":"bold","border-left":"solid 2px #2760AD"});
        $(".education").hide("500");
        $(".place").hide("500");
        $(".Contacts").show("500");
                });


  });