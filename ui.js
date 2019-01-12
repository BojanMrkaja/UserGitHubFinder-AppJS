class UI {
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class"col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}" style="width:300px;height:300px;">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary mb-3 btn-block">View Profile</a>
                    </div>

                    <div class"col-md-9">
                        <span class="badge badge-primary">Public Pepos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Public Followers: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <br><br>

                        <ul class="list-group">
                            <li class="list-group-item">Company:${user.company}</li>
                            <li class="list-group-item">Website/Blog:${user.blog}</li>
                            <li class="list-group-item">Location:${user.location}</li>
                            <li class="list-group-item">Member Since:${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3 text-white">Latest Repos</h3>
            <div class="repos"></div>
        `;
    }

    // show repos
    showRepos(repos){
        let output = '';
        repos.forEach(function(repos){
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repos.html_url} target="_blank">${repos.name}</a>
                        </div>

                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars: ${repos.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${repos.watchers_count}</span>
                            <span class="badge badge-success">Public Forks: ${repos.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        // Output repos
        document.querySelector('.repos').innerHTML = output;
    }

    showAlert(message, className){
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.searchcontainer');
        const search= document.querySelector('.search');
        container.insertBefore(div, search);

        setTimeout( () => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }

    clearProfile(){
        this.profile.innerHTML = '';
    }
}