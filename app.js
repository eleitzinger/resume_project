/*-- Summary --*/
var summary = document.getElementById('summary');
summary.setAttribute('style', 'background-image: url("'+resumeData.summary.background+'")')

var profile = document.getElementById('profile');
profile.setAttribute('src', resumeData.summary.profile);

var summaryName = document.getElementById('name');
var summaryNameText = document.createTextNode(resumeData.summary.name);
summaryName.appendChild(summaryNameText);

var summaryTitle = document.getElementById('title');
var summaryTitleText = document.createTextNode(resumeData.summary.title);
summaryTitle.appendChild(summaryTitleText);

var summaryCompany = document.getElementById('company');
var summaryCompanyText = document.createTextNode(resumeData.summary.company);
summaryCompany.appendChild(summaryCompanyText);

var linkedin = document.getElementById('linkedin');
linkedin.setAttribute('src', resumeData.summary.linkedin);

var summaryPhone = document.getElementById('phone');
var summaryPhoneText = document.createTextNode(resumeData.summary.phone);
summaryPhone.appendChild(summaryPhoneText);

var summaryEmail = document.getElementById('email');
var summaryEmailText = document.createTextNode(resumeData.summary.email);
summaryEmail.appendChild(summaryEmailText);


/*-- /Summary --*/

/*-- Skills --*/

var skillsList = document.getElementById('skills-content');

var skillOne = document.createElement('li');
var skillOneText = document.createTextNode(resumeData.skills[0]);
skillOne.appendChild(skillOneText);
skillsList.appendChild(skillOne);

var skillTwo = document.createElement('li');
var skillTwoText = document.createTextNode(resumeData.skills[1]);
skillTwo.appendChild(skillTwoText);
skillsList.appendChild(skillTwo);

var skillThree = document.createElement('li');
var skillThreeText = document.createTextNode(resumeData.skills[2]);
skillThree.appendChild(skillThreeText);
skillsList.appendChild(skillThree);

var brElemOne = document.createElement('br');
skillsList.appendChild(brElemOne);

var skillFour = document.createElement('li');
var skillFourText = document.createTextNode(resumeData.skills[3]);
skillFour.appendChild(skillFourText);
skillsList.appendChild(skillFour);

var skillFive = document.createElement('li');
var skillFiveText = document.createTextNode(resumeData.skills[4]);
skillFive.appendChild(skillFiveText);
skillsList.appendChild(skillFive);

var skillSix = document.createElement('li');
var skillSixText = document.createTextNode(resumeData.skills[5]);
skillSix.appendChild(skillSixText);
skillsList.appendChild(skillSix);

var brElemTwo = document.createElement('br');
skillsList.appendChild(brElemTwo);

var skillSeven = document.createElement('li');
var skillSevenText = document.createTextNode(resumeData.skills[6]);
skillSeven.appendChild(skillSevenText);
skillsList.appendChild(skillSeven);

var skillEight = document.createElement('li');
var skillEightText = document.createTextNode(resumeData.skills[7]);
skillOne.appendChild(skillEightText);
skillsList.appendChild(skillEight);

var skillNine = document.createElement('li');
var skillNineText = document.createTextNode(resumeData.skills[8]);
skillNine.appendChild(skillNineText);
skillsList.appendChild(skillNine);

/*-- /Skills --*/

/*-- Experience --*/

var experience = document.getElementById('experience');

var entryOne = document.createElement('div');
entryOne.className = "entryOne";

var entryOneOrganization = '<li><h3>'+resumeData.experience[0].organization+'</h3></li>';
var entryOneTitle = '<h4>'+resumeData.experience[0].title+'</h4>';
var entryOneYears = '<h3>'+resumeData.experience[0].years+'</h3>';
var entryOneDescriptionOne = '<li>'+resumeData.experience[0].descriptions[0]+'</li>';
var entryOneDescriptionTwo = '<li>'+resumeData.experience[0].descriptions[1]+'</li>';
var entryOneDescriptionThree = '<li>'+resumeData.experience[0].descriptions[2]+'</li>';

var entryOneDescriptions = '<ul>'+entryOneDescriptionOne+entryOneDescriptionTwo+entryOneDescriptionThree+'</ul>'

var entryOneHTML = 
		'<div class="row">'+
			'<div class="col-sm-9">'+entryOneOrganization+entryOneTitle+'</div>'+
			'<div class="col-sm-3 text-right">'+entryOneYears+'</div>'+
		'</div>'+
		'<div class="ITT-content" id="ITT-content">'+
			'<div class="row">'+entryOneDescriptions+'</div>';

entryOne.innerHTML = entryOneHTML
experience.appendChild(entryOne);

var entryTwo = document.createElement('div');
entryTwo.className = "entryTwo";

var entryTwoOrganization = '<li><h3>'+resumeData.experience[0].organization+'</h3></li>';
var entryTwoTitle = '<h4>'+resumeData.experience[0].title+'</h4>';
var entryTwoYears = '<h3>'+resumeData.experience[0].years+'</h3>';
var entryTwoDescriptionOne = '<li>'+resumeData.experience[0].descriptions[0]+'</li>';
var entryTwoDescriptionTwo = '<li>'+resumeData.experience[0].descriptions[1]+'</li>';
var entryTwoDescriptionThree = '<li>'+resumeData.experience[0].descriptions[2]+'</li>';

var entryTwoDescriptions = '<ul>'+entryTwoDescriptionOne+entryTwoDescriptionTwo+entryTwoDescriptionThree+'</ul>'

var entryTwoHTML = 
		'<div class="row">'+
			'<div class="col-sm-9">'+entryTwoOrganization+entryTwoTitle+'</div>'+
			'<div class="col-sm-3 text-right">'+entryTwoYears+'</div>'+
		'</div>'+
		'<div class="ITT-content" id="ITT-content">'+
			'<div class="row">'+entryTwoDescriptions+'</div>';

entryTwo.innerHTML = entryTwoHTML
experience.appendChild(entryTwo);

var entryThree = document.createElement('div');
entryThree.className = "entryThree";

var entryThreeOrganization = '<li><h3>'+resumeData.experience[0].organization+'</h3></li>';
var entryThreeTitle = '<h4>'+resumeData.experience[0].title+'</h4>';
var entryThreeYears = '<h3>'+resumeData.experience[0].years+'</h3>';
var entryThreeDescriptionOne = '<li>'+resumeData.experience[0].descriptions[0]+'</li>';
var entryThreeDescriptionTwo = '<li>'+resumeData.experience[0].descriptions[1]+'</li>';
var entryThreeDescriptionThree = '<li>'+resumeData.experience[0].descriptions[2]+'</li>';

var entryThreeDescriptions = '<ul>'+entryThreeDescriptionOne+entryThreeDescriptionTwo+entryThreeDescriptionThree+'</ul>'

var entryThreeHTML = 
		'<div class="row">'+
			'<div class="col-sm-9">'+entryThreeOrganization+entryThreeTitle+'</div>'+
			'<div class="col-sm-3 text-right">'+entryThreeYears+'</div>'+
		'</div>'+
		'<div class="ITT-content" id="ITT-content">'+
			'<div class="row">'+entryThreeDescriptions+'</div>';

entryThree.innerHTML = entryThreeHTML
experience.appendChild(entryThree);

/*-- /Experience --*/

/*-- Credentials --*/

var credentials = document.getElementById('credentials');

var entryOne = document.createElement('div');
entryOne.className = "entryOne";

var entryOneDescriptionOne = '<li>'+resumeData.credentials[0].descriptions[0]+'</li>';
var entryOneDescriptionTwo = '<li>'+resumeData.credentials[0].descriptions[1]+'</li>';
var entryOneDescriptionThree = '<li>'+resumeData.credentials[0].descriptions[2]+'</li>';
var entryOneDescriptionFour = '<li>'+resumeData.credentials[0].descriptions[3]+'</li>';

var entryOneDescriptions = '<ul>'+entryOneDescriptionOne+entryOneDescriptionTwo+entryOneDescriptionThree+entryOneDescriptionFour+'</ul>'

var entryOneHTML = 
		'<div class="row">'+
				'<ul class="Credential-List">'+entryOneDescriptionOne+entryOneDescriptionTwo+entryOneDescriptionThree+entryOneDescriptionFour+'</ul>';

entryOne.innerHTML = entryOneHTML
credentials.appendChild(entryOne);

/*-- /Credentials --*/