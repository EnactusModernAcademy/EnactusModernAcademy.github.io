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

          var emaid = document.getElementById("EMAID").value;
	  var id = document.getElementById("ID").value;
	  var name = document.getElementById("Name").value;
	  var points = document.getElementById("Score").value;
	  var phone = document.getElementById("Phone").value;
	  var university = getCheckedValue()
	  console.log(university);

	  // Create a new object with the form data
	  var data = {
            emaid,
	    id,
	    name: name,
	    phone: phone,
	    points: Number(points),
	    university: university
	  };

// Get a reference to the Firestore database
  var db = firebase.firestore();
  
           if(getCheckedIndex()==0){
           
const authCollection = firebase.firestore().collection("auth");

// Query for the user ID in the auth collection
authCollection.doc(emaid).get()
  .then((doc) => {
    if (doc.exists) {
    
      db.collection("ema").doc(id).get().then(function(doc) {
    if (doc.exists) {
    alert("Document already exist!");
    }else{
    db.collection("ema").doc(id).set(data)
    .then(function() {
      alert("Document successfully written!");
      // Reset the form
      document.getElementById("ID").value = "";
      document.getElementById("Name").value = "";
      document.getElementById("Score").value = "";
      document.getElementById("Phone").value = "";
    })
    .catch(function(error) {
      alert("Error writing document: ", error.code);
    });
    
    }
    
    });
    } else {
      // Restrict write access if the document does not exist in the auth collection
      alert("User not authorized to write data.");
    }
  })
  .catch((error) => {
    alert("Error getting document:", error);
  });
  
         }else if(getCheckedIndex()==1){
         
        
const authCollection = firebase.firestore().collection("auth");

// Query for the user ID in the auth collection
authCollection.doc(emaid).get()
  .then((doc) => {
    if (doc.exists) {
    
      db.collection("cs").doc(id).get().then(function(doc) {
    if (doc.exists) {
    alert("Document already exist!");
    }else{
    db.collection("cs").doc(id).set(data)
    .then(function() {
      alert("Document successfully written!");
      // Reset the form
      document.getElementById("ID").value = "";
      document.getElementById("Name").value = "";
      document.getElementById("Score").value = "";
      document.getElementById("Phone").value = "";
    })
    .catch(function(error) {
      alert("Error writing document: ", error.code);
    });
    
    }
    
    });
    } else {
      // Restrict write access if the document does not exist in the auth collection
      alert("User not authorized to write data.");
    }
  })
  .catch((error) => {
    alert("Error getting document:", error);
  });
         
    
           
  }
    else if(getCheckedIndex()==2){
    
   
const authCollection = firebase.firestore().collection("auth");

// Query for the user ID in the auth collection
authCollection.doc(emaid).get()
  .then((doc) => {
    if (doc.exists) {
      
       db.collection("eng").doc(id).get().then(function(doc) {
    if (doc.exists) {
    alert("Document already exist!");
    }else{
    db.collection("eng").doc(id).set(data)
    .then(function() {
      alert("Document successfully written!");
      // Reset the form
      document.getElementById("ID").value = "";
      document.getElementById("Name").value = "";
      document.getElementById("Score").value = "";
      document.getElementById("Phone").value = "";
     
    })
    .catch(function(error) {
      alert("Error writing document: ", error.code);
    });
    }
    
    });
      
    } else {
      // Restrict write access if the document does not exist in the auth collection
      alert("User not authorized to write data.");
    }
  })
  .catch((error) => {
    alert("Error getting document:", error);
  });
    
       
           
  }
        
           else if(getCheckedIndex()==3){
           
          
const authCollection = firebase.firestore().collection("auth");

// Query for the user ID in the auth collection
authCollection.doc(emaid).get()
  .then((doc) => {
    if (doc.exists) {
      
        db.collection("mis").doc(id).get().then(function(doc) {
    if (doc.exists) {
    alert("Document already exist!");
    }else{
    db.collection("mis").doc(id).set(data)
    .then(function() {
      alert("Document successfully written!");
      // Reset the form
      document.getElementById("ID").value = "";
      document.getElementById("Name").value = "";
      document.getElementById("Score").value = "";
      document.getElementById("Phone").value = "";
     
    })
    .catch(function(error) {
      alert("Error writing document: ", error.code);
    });
    }
    });
      
    } else {
      // Restrict write access if the document does not exist in the auth collection
      alert("User not authorized to write data.");
    }
  })
  .catch((error) => {
    alert("Error getting document:", error);
  });

           
  
           
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

