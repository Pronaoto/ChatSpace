
$(document).on('turbolinks:load', function() {
  function buildHTML(message){
    console.log(message.image)
        if (message.image)
    {

    var html =
    `<div class='chatroom__body-message clearfix'>
                    <div class='chatroom__body--message-name'>
                        ${message.user_name}
                    </div>
                    <div class='chatroom__body--message-time'>
                        ${message.created_at}
                    </div>
                    <div class='chatroom__body--message-body'>
                        <p>${message.content}</p>
                        <img class="lower-message__image" src="${ message.image }">
                    </div>
                </div>`}
    else
    {
      var html =
      `<div class='chatroom__body-message clearfix'>
                    <div class='chatroom__body--message-name'>
                        ${message.user_name}
                    </div>
                    <div class='chatroom__body--message-time'>
                        ${message.created_at}
                    </div>
                    <div class='chatroom__body--message-body'>
                        ${message.content}
                    </div>`
    }
      return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chatroom__body').append(html).animate({scrollTop: $('.chatroom__body')[0].scrollHeight}, '500');
      $('#message_content').val('');
      $('input').prop('disabled', false);
    })
    .fail(function(){
      alert('メッセージを入力してください。')
    })
    // return false;
  })
})


