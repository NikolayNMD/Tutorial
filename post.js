$(document).ready(function(){
    let searchParams = new URLSearchParams(window.location.search)
    var id = searchParams.get('id');
    $.ajax({
        type: 'GET',
        dataType:"json",
        url: 'https://jsonplaceholder.typicode.com/posts/' + id,
        success: function (data) {
            $('.post').append(
            '<div class="post_block single">' + 
                '<div class="post_block_title">' + 'title:' + data.title + '</div>' +
                '<div class="post_user_id">' + 'userId:' + data.userId + '</div>' +
                '<div class"post_id">' + 'postId:' + data.id + '</div>' +
                '<div class="post_body">' + 'body:' + data.body + '</div>' +
            '</div>'); 
        }
      });
});