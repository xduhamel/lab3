'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
    $("a.thumbnail").click(projectClick);
    $("#submitBtn").click(updateProject);
}

function updateProject(e){
    var projectID = $('#project').val();
    $(projectID).animate({
        width: $('width').val()
    });

    var newText = $('#description').val();
    $(projectID + " .project-description").text(newText);
}

function projectClick(e) {
    e.preventDefault();
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    
    $("#testjs").text("Please wait...");
    $(".jumbotron p").toggleClass("active");
    jumbotronHeader.text(projectTitle); 

    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    
    if (description.length == 0) {
        $(containingProject).append("<div class='project-description'><p>Project Description</p></div>");
    } else {
        description.html("<p>Stop clicking the button!  You just did it at " + (new Date()) + "</p>");
    }
}
