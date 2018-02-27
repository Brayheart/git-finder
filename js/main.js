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
            console.log(user)
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
                    <span class="label label-success">Public Repos: ${user.public_repos}</span>
                    <span class="label label-info">Public Gist: ${user.public_gists}</span>
                    <span class="label label-warning">Follers: ${user.followers}</span>
                    <span class="label label-danger">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
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