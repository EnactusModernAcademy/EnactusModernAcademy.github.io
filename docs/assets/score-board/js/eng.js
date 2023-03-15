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
const leaderboard = document.querySelector(".row");
const table = document.querySelector("tbody");

// Get a reference to the users collection
const usersRef = firebase.firestore().collection("eng");

// Retrieve the top 3 users
usersRef.orderBy("points", "desc").limit(3).get().then((querySnapshot) => {
  // Loop through each document in the query result
  querySnapshot.forEach((doc) => {
    // Create a new leaderboard card element
    const card = document.createElement("div");
    card.classList.add("col-sm-4");

    // Set the HTML content of the leaderboard card
    card.innerHTML = `
      <div class="leaderboard-card leaderboard-card--first">
        <div class="leaderboard-card__top"></div>
        <div class="leaderboard-card__body">
          <div class="text-center">
            <img src="../assets/score-board/img/avatar.png" class="circle-img mb-2" alt="User Img">
            <h5 class="mb-0">${doc.data().name}</h5>
            <p class="text-muted mb-0">${doc.data().points}</p>
            <hr>
            <div class="d-flex justify-content-between align-items-center">
              <span><i class="fa fa-map-marker"></i> ${doc.data().university}</span>
            </div>
          </div>
        </div>
      </div>
    `;

    // Append the leaderboard card to the leaderboard section
    leaderboard.appendChild(card);
  });
});

// Retrieve all users and display them in the table
usersRef.orderBy("points", "desc").get().then((querySnapshot) => {
  // Loop through each document in the query result
  querySnapshot.forEach((doc) => {
    // Create a new table row element
    const row = document.createElement("tr");

    // Set the HTML content of the table row
    row.innerHTML = `
      <td>
        <div class="d-flex align-items-center">
          <img src="../assets/score-board/img/avatar.png" class="circle-img circle-img--small mr-2" alt="User Img">
          <div class="user-info__basic">
            <h5 class="mb-0">${doc.data().name}</h5>
          </div>
        </div>
      </td>
      <td>
        <div class="d-flex align-items-baseline">
          <h4 class="mr-1">${doc.data().points}</h4>
          <small class="text-success"><i class="fa fa-arrow-up"></i>${doc.data().points}%</small>
        </div>
      </td>
      <td>${doc.data().university}</td>
    `;

    // Append the table row to the table body
    table.appendChild(row);
  });
});

