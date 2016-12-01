$(function(){
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage','fivePage','sixPage','sevenPage','eightPage','ninePage','tenPage'],
        menu: '#myMenu',
        afterLoad:function(anchorLink,index){
            console.log(index)
        }
    });

});