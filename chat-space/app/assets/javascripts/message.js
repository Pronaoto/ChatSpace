$(document).on('turbolinks:load', function() {
  function buildHTML(message){
    var image = "";

    image = (message.image) ? `<img class="lower-message__image" src="${ message.image }">`: "";

    var html =
                    `<div class='chatroom__body-message clearfix'>
                        <div class='chatroom__body--message-name'>
                            ${message.name}
                        </div>
                        <div class='chatroom__body--message-time'>
                            ${message.created_at}
                        </div>
                        <div class='chatroom__body--message-body'>
                            <p>${message.content}</p>
                            ${image}
                        </div>
                    </div>`
      return html;
    }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    // console.log($(this));

    var formData = new FormData($(this).get(0));
    // for(item of formData) { console.log(item); }
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
      alert('メッセージを入力してください。');
    });
    //return false;
  });
});


