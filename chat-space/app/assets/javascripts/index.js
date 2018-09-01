$(document).on('turbolinks:load', function() {
  function buildHTML(user){
    var html =
              `.chat-group-form__field--left
                %label.chat-group-form__label{:for => "chat_group_チャットメンバーを追加"} チャットメンバーを追加
                .chat-group-form__field--right
                .chat-group-form__search.clearfix
                %input#user-search-field.chat-group-form__input{:placeholder => "追加したいユーザー名を入力してください", :type => "text"}/
                .user-search-result`
      return html;
    }

  $('.chat-group-form__search.clearfix').on('submit', function(e){
    e.preventDefault();
    console.log($(this));

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
      alert('ユーザー検索に失敗しました');
    });
    //return false;
  });
});
