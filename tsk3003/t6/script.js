var kalle = {
		name: {
			first: "Kalle",
			midle: "Kustaa",
			last: "Korkki"
		},
		age:32,
		skills:["AutoCad", "Office 360", "HTML", "CSS", "JavaScript"],
		hobbies:["skiing","golf", "gambling"]
}

var maija = {
		name: {
			first: "Maija",
			midle: "Kaija",
			last: "Poppanen"
		},
		age:28,
		skills:["Facebook", "Twitter", "LinkedIn"],
		hobbies:["knitting","sailing", "walking"]
}

var henna = {
		name: {
			first: "Henna",
			midle: "Helena",
			last: "Harju"
		},
		age:19,
		skills:["Management", "Stock Trading", "Excel"],
		hobbies:["gaming","reading", "skiing, skating"]
}


function listPerson(person) { 
    var out = "<h2>Hi, I am " + person.name.first + " " + person.name.midle + " " + 
    			person.name.last +", " + person.age +" years old.</h2>";
  
    out += "<p>My skills are: ";
    for(var i=0;i<person.skills.length;i++){
       out+= person.skills[i];
       if(i<person.skills.length-1){
          out+=", ";
       }else{
          out+=".";
       }
    }
    out+="</p>";
    
    out+="I have the following hobbies:</p>";
    out+="<ul>";
    for(var i=0;i<person.hobbies.length;i++){
       out+= "<li>"+person.hobbies[i]+"</li>";
    }
    out +="</ul>";
    return out;
}



function listPersons(persons) { 
    var allOut="";
	for(var i=0;i<persons.length;i++){
	     allOut+=listPerson(persons[i]);
	     allOut+="<hr />";
	}
	return allOut;
}

var people =[kalle, maija, henna];