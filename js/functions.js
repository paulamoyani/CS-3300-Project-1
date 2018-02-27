function colorThirdGraph(person){
	if (person.totalFollowers == 0) {
		return "#C0C0C0";
	}
	else if (Math.max(person.facebookLikes, person.twitterFollowers, person.instagramFollowers) == person.facebookLikes){
		return "#3b5998";
	}
	else if (Math.max(person.facebookLikes, person.twitterFollowers, person.instagramFollowers) == person.twitterFollowers){
		return "#1dcaff";
	}
	else if (Math.max(person.facebookLikes, person.twitterFollowers, person.instagramFollowers) == person.instagramFollowers){
		return "#cd486b";
	}	
};

function median(numbers) {
    var median = 0;
    var numsLen = numbers.length;
    numbers.sort();
 
    if (numsLen % 2 === 0) {
        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
    } else {
        median = numbers[(numsLen - 1) / 2];
    }
 	return median;
};

var dataByCountry = [
							{"x":"India", "Facebook":4931867+43201619, "Twitter":40231657, "Instagram":11581545},
							{"x":"United States", "Facebook":23126205, "Twitter":47801783, "Instagram":8433374},
							{"x":"Vatican City", "Facebook":0, "Twitter":45248276, "Instagram":5255586},
							{"x":"Indonesia", "Facebook":8010255, "Twitter":9634150, "Instagram":7957893},
							{"x":"Argentina", "Facebook":4507652, "Twitter":4702549, "Instagram":780507},
							{"x":"Turkey", "Facebook":8941440+425125, "Twitter":12446840, "Instagram":3282239},
							{"x":"United Arab Emirates", "Facebook":3770528, "Twitter":8697675, "Instagram":0},
							{"x":"Canada", "Facebook":5554786+4135788+21877, "Twitter":3970003+3471078+62959, "Instagram":1976544+1326821},
							{"x":"Mexico", "Facebook":5540710, "Twitter":7078859, "Instagram":310777},
							{"x":"Russia", "Facebook":1443723, "Twitter":5467787, "Instagram":2933426}
						];

