$(function() {

var search_list = $(".chat-group-form__field clearfix");

function appendUser(user){
  var html = `<div class="chat-group-user clearfix">
  <p class="chat-group-user__name">${user.name}</p>
  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add js-add-btn" data-user-id=${user.id} data-user-name=${user.name}>追加</a>
  </div>`
    search_list.append(html);
}
  function appendNoUser(user){
    var html = `<div class='chat-group-users js-add-user'>`
    search_list.append(html);
  }

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    // console.log(input);
    $.ajax({
      type: 'GET',
      url: '/groups/new',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users){
      // console.log(users);
      $(".chat-group-form__field clearfix").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appendNoUser("ユーザー検索に失敗しました");
      }
    })
    .fail(function() {
      alert('error');
    })
  });
});


// $(document).on('turbolinks:load', function() {
//   function buildHTML(user){
//     var html =
//               `.chat-group-form__field--left
//                 %label.chat-group-form__label{:for => "chat_group_チャットメンバーを追加"} チャットメンバーを追加
//                 .chat-group-form__field--right
//                 .chat-group-form__search.clearfix
//                 %input#user-search-field.chat-group-form__input{:placeholder => "追加したいユーザー名を入力してください", :type => "text"}/
//                 .user-search-result`
//       return html;
//     }

//   $('.chat-group-form__search.clearfix').on('submit', function(e){
//     e.preventDefault();
//     console.log($(this));

//     var formData = new FormData($(this).get(0));
//     // for(item of formData) { console.log(item); }
//     var url = $(this).attr('action');
//     $.ajax({
//       url: url,
//       type: 'POST',
//       data: formData,
//       dataType: 'json',
//       processData: false,
//       contentType: false
//     })
//     .done(function(data){
//       var html = buildHTML(data);
//       $('.chatroom__body').append(html).animate({scrollTop: $('.chatroom__body')[0].scrollHeight}, '500');
//       $('#message_content').val('');
//       $('input').prop('disabled', false);
//     })
//     .fail(function(){
//       alert('ユーザー検索に失敗しました');
//     });
//     //return false;
//   });
// });
