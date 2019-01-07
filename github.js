class GitHub {
    constructor(){
       this.client_id = 'e5d69ff9cb314cab469a';
       this.client_secret = '18c1364fde235ec43b9cb1d14532fc9002a0bd2f'; 
       this.repos_count = 5;
       this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return{
            profile,
            repos
        }
    }
}