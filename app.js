function elementDeleter() {
	$(this).parent().remove();
}

function addTask(text) {
	var new_li = $('<li>');
	$("#task_list").append(new_li.append($('<span>').text(text)));
	new_li.append($('<button>').text("Удалить").click(elementDeleter));
}

$().ready(function(){
	var ul = $('<ul id="task_list">');
	$('#root').append(ul);

	addTask("Сделать задание #3 по web-программированию");

	$('#root').append($('<input type="text" id="add_task_input">'));
	$('#root').append($('<button id="add_task">').text("Добавить задачу"));

	$('#add_task').click(function() {
		addTask($('#add_task_input').val());
		$('#add_task_input').val("");
	});
});