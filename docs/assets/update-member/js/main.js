	var firebaseConfig = {
		        apiKey: "AIzaSyCYc2DzBRdKn6XB63iP0GQeAdixvN8mqzE",
			authDomain: "enactus-modern-academy.firebaseapp.com",
			projectId: "enactus-modern-academy",
			storageBucket: "enactus-modern-academy.appspot.com",
			messagingSenderId: "50514893109",
			appId: "1:50514893109:web:4bf6d4c1b3eae44387947c",
			measurementId: "G-WGKYBXLR3F"
	      };
	      firebase.initializeApp(firebaseConfig);
	      
	addEventListener('submit', function(event) {
	
	event.preventDefault(); // Prevent the form from submitting

	  var id = document.getElementById("ID").value;
	 
	  var points = document.getElementById("Score").value;
	 
	  var university = getCheckedValue()
	  console.log(university);

	  // Create a new object with the form data
	  var data = {
	    id,
	    points: Number(points),
	    university: university
	  };

// Get a reference to the Firestore database
  var db = firebase.firestore();
  
           if(getCheckedIndex()==0){
           // Check if the user exists and update their score if they do
    db.collection("ema").doc(id).get().then(function(doc) {
    if (doc.exists) {
    var oldPoints = doc.data().points;
    var newPoints = parseInt(oldPoints) + parseInt(points);
    db.collection("ema").doc(id).update({ points: newPoints})
      .then(function() {
        alert("Document successfully updated!");
        // Reset the form
        document.getElementById("ID").value = "";
       
        document.getElementById("Score").value = "";
      
      })
      .catch(function(error) {
        alert("Error updating document: " + error.message);
      });
  }else{
   alert("Document not exist");     
  }
  })
  
  
  
  
  
         }else if(getCheckedIndex()==1){
             // Check if the user exists and update their score if they do
    db.collection("cs").doc(id).get().then(function(doc) {
    if (doc.exists) {
    var oldPoints = doc.data().points;
    var newPoints = parseInt(oldPoints) + parseInt(points);
    db.collection("cs").doc(id).update({ points: newPoints })
      .then(function() {
        alert("Document successfully updated!");
        // Reset the form
        document.getElementById("ID").value = "";
       
        document.getElementById("Score").value = "";
      })
      .catch(function(error) {
        alert("Error updating document: " + error.message);
      });
  }else{
   alert("Document not exist");          
  }
  })
           }else if(getCheckedIndex()==2){
             // Check if the user exists and update their score if they do
    db.collection("eng").doc(id).get().then(function(doc) {
    if (doc.exists) {
    var oldPoints = doc.data().points;
    var newPoints = parseInt(oldPoints) + parseInt(points);
    db.collection("eng").doc(id).update({ points: newPoints })
      .then(function() {
        alert("Document successfully updated!");
        // Reset the form
        document.getElementById("ID").value = "";
       
        document.getElementById("Score").value = "";
        
      })
      .catch(function(error) {
        alert("Error updating document: " + error.message);
      });
  }else{
    alert("Document not exist");    
          
  }
  })
           }
           
           else if(getCheckedIndex()==3){
             // Check if the user exists and update their score if they do
    db.collection("mis").doc(id).get().then(function(doc) {
    if (doc.exists) {
    var oldPoints = doc.data().points;
    var newPoints = parseInt(oldPoints) + parseInt(points);
    db.collection("mis").doc(id).update({ points: newPoints })
      .then(function() {
        alert("Document successfully updated!");
        // Reset the form
        document.getElementById("ID").value = "";
       
        document.getElementById("Score").value = "";
      })
      .catch(function(error) {
        alert("Error updating document: " + error.message);
      });
  }else{
    alert("Document not exist");  
  }
  })
           }

	  
	      });
	      
	 

	// Get checked item

	function getCheckedValue() {
	  // Get all the radio buttons in the ul
	  var radioButtons = document.querySelectorAll('ul input[type="radio"]');

	  // Loop through the radio buttons to find the checked one
	  for (var i = 0; i < radioButtons.length; i++) {
	    if (radioButtons[i].checked) {
	      // Get the value of the checked radio button
	      var checkedValue = radioButtons[i].value;

	      // Return the checked value
	      return checkedValue;
	    }
	  }

	  // Return null if no radio button is checked
	  return null;
	}
	
	function getCheckedIndex() {
	  // Get all the radio buttons in the ul
	  var radioButtons = document.querySelectorAll('ul input[type="radio"]');

	  // Loop through the radio buttons to find the checked one
	  for (var i = 0; i < radioButtons.length; i++) {
	    if (radioButtons[i].checked) {
	      // Get the value of the checked radio button
	      var checkedIndex = i;

	      // Return the checked value
	      return checkedIndex;
	    }
	  }

	  // Return null if no radio button is checked
	  return null;
	}


