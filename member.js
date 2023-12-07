function skillsMember() {
    var member = {
        name: "John",
        age: 25,
        skills: ["HTML", "CSS", "JS"],
        salary: 25000,
        address: {
            city: "Bangalore",
            pincode: 560001
        },
        getSalary: function() {
            return this.salary;
        },
        getName: function() {
            return this.name;
        },
        getSkills: function() {
            return this.skills;
        },
        getCity: function() {
            return this.address.city;
        },
        getPincode: function() {
            return this.address.pincode;
        }
    };
    console.log(member.getSalary());
    console.log(member.getName());
    console.log(member.getSkills());
    console.log(member.getCity());
    console.log(member.getPincode());
}
