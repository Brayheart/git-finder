$(document).ready(function(){
        $('#searchUser').on('keyup', function(e){
            let username = e.target.value;

        //Make request to github api
        $.ajax({
            url: `https://api.github.com/users/${username}`,
            data: {
                client_id: '0969812f64dfc6467af6',
                client_secret: 'f52603c80ddbdbf5644781b21b1b0d21b51d5250'
            }
        }).done(function(user){
            $('#profile').html(`
            <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">${user.name}</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-3">
                        <img class="thumbnail avatar" src="${user.avatar_url}">
                        <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
                    </div>
                    <div class="col-md-9">
                    
                    </div>
            </div>
            </div>
            `);
        })
    });
});

            //   <div class="col-md-3">
            //     <img class="thumbnail avatar" src="${user.avatar_url}">
            //     <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
            //   </div>