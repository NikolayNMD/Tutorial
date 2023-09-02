$(document).ready(function(){
    $.ajax({
        type: 'GET',
        dataType:"json",
        url: 'https://jsonplaceholder.typicode.com/posts',
        success: function (data) {
          for (let item of data) {
            console.log(item);
             $('.post_box').append(
            '<div class="post_block">' + 
                '<a href="post.html?id=' + item.id + '" class="post_block_title">' + 'title:' + item.title + '</a>' +
                '<div class="post_user_id">' + 'userId:' + item.userId + '</div>' +
                '<div class"post_id">' + 'postId:' + item.id + '</div>' +
                '<div class="post_body">' + 'body:' + item.body + '</div>' +
            '</div>');   

          }
        }
      });
});

