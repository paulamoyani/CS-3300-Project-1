function colorThirdGraph(person){
	if (Math.max(person.facebookLikes, person.twitterFollowers, person.instagramFollowers) == person.facebookLikes){
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
