$(document).ready(function() {
    var deleteBtn = $('.delete-btn');
    var searchBtn = $('#search-btn');
    var searchForm = $('#search-form');
    var filter = $('#filter');
    var baseUrl = 'http://localhost:8000/';

    $(deleteBtn).on('click', function(e){
        e.preventDefault();

        var delLink = $(this).attr('href');
        var result = confirm('Voce deseja mesmo deletar?');

       if(result){
            window.location.href = delLink;
       }
    });

    $(searchBtn).on('click', function(){
        searchForm.submit()
    })

    $(filter).change(function(){
        var filter = $(this).val();
        window.location.href = baseUrl + '?filter=' + filter;
    })
});