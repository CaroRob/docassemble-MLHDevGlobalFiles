$(document).on('daPageLoad', function(){
  if (daQuestionID && daQuestionID['id']){
    $("#daQuestionIdPart").html(daQuestionID['id']);
  }
});