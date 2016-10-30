// JavaScript Document

function generate(){
	
    var name = document.getElementById("userName").value; 
	var offName = document.getElementById("offName").value;
	var pronoun = document.getElementById("pronouns").value;
	var teacher = document.getElementById("teachName").value;
	var classN = document.getElementById("class").value;
	var institute = document.getElementById("institute").value;
	//add validation
					
		document.getElementById("message").innerHTML="Dear " + teacher + ", \n\nMy name is " + name + " and I will be attending your " + classN + " subject at " + institute + " this semester. I am transgender and have not yet legally changed my name, so on your roster is my legal name, " + offName + ". I would greatly appreciate it if you refer to me as " + name + " and use " + pronoun + " pronouns when referring to me. Thank you for your understanding, I look forward to class this semester. \n\nIf your have any questions please feel free to email me. If your questions are about transgender individuals in general then the following resource may answer them https://www.glaad.org/transgender/transfaq \n\nKind Regards, \n" + name;
		//can be done neater??
		
	}