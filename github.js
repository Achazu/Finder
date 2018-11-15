class Github {
	constructor(){
		this.client_id = '09fb6359724896856db9';
		this.client_secret = '05cf5d65b11cb2fa3744188b725b05dfc046ae59';
		this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}

	async getUser(user){
		const profileResponse  = await fetch
		(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const repoResponse  = await fetch
		(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile = await profileResponse.json();
		const repos = await repoResponse.json();

		return {
			profile,
			repos
		}
	}
}