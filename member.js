function SkillsMember() {
    this.name = 'Member';
    this.age = 20;
    this.skills = ['HTML', 'CSS', 'JS'];
    this.showSkills = function() {
        this.skills.forEach(function(skill) {
            console.log(`${this.name} knows ${skill}`);
        }.bind(this));
    }
}