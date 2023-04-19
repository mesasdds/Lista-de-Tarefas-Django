$(document).ready(function){
    var deleteBtn = $('.delete-btnc')
    $(deleteBtn).on('click', function(e){
        e.preventDefault()

        var delLink = $(this).attr('href')
        var result = confirm('Quer deletar esta tarefa?')

        if(result){
            window.location.href = delLink
        }
    })
}