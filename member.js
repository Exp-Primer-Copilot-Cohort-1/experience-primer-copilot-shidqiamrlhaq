function SkillsMember() {
    this.skills = [];
    this.addSkill = function(skill) {
        this.skills.push(skill);
    };
    this.removeSkill = function(skill) {
        var index = this.skills.indexOf(skill);
        if (index >= 0) {
            this.skills.splice(index, 1);
        }
    };
    this.removeAllSkills = function() {
        this.skills = [];
    };
    this.getSkills = function() {
        return this.skills;
    };
}