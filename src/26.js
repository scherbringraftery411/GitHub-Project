// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAXeW87hOvY0qgVtQaXJxI5rS3dMkHl24",
  authDomain: "your-auth-domain.com",
  databaseURL: "https://your-database-url.com",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket-name"
};
firebase.initializeApp(firebaseConfig);

// Fetch Firebase credentials from Auth0
var auth = firebase.auth();
auth.onAuthStateChanged(function(user) {
  if (user) {
    var userId = user.uid;
    // Do something with user's ID, such as sending them a link to their dashboard or sharing the link on social media.
  } else {
    alert("You have not signed in.");
  }
});
