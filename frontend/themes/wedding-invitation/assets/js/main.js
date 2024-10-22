// Function to copy text to clipboard for Cash Gift
document.addEventListener("DOMContentLoaded", function () {
  function copyTextToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Copied: " + text);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }

  // Add click event listeners to all copy buttons
  const copyButtons = document.querySelectorAll("button[data-account]");
  copyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get the account number from the data attribute
      const accountNumber = this.getAttribute("data-account");
      copyTextToClipboard(accountNumber);
    });
  });
});

// Image Modals and zoom ins
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const closeModal = document.getElementById("closeModal");
  const imageTriggers = document.querySelectorAll(".modal-trigger");

  // Loop through all images with class "modal-trigger" to make them clickable
  imageTriggers.forEach(function (image) {
    image.addEventListener("click", function () {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      modalImg.src = this.src; // Set modal image source to the clicked image source
    });
  });

  // Close modal when the close button is clicked
  closeModal.addEventListener("click", function () {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
  });

  // Close modal when clicking outside the image
  modal.addEventListener("click", function (e) {
    if (e.target !== modalImg) {
      modal.classList.remove("flex");
      modal.classList.add("hidden");
    }
  });
});

// Audio Player
document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audioPlayer");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const playIcon = document.getElementById("playIcon");
  const pauseIcon = document.getElementById("pauseIcon");

  // Update button visibility based on audio playback state
  function updateButtonState() {
    if (audioPlayer.paused) {
      playIcon.classList.remove("hidden");
      pauseIcon.classList.add("hidden");
    } else {
      playIcon.classList.add("hidden");
      pauseIcon.classList.remove("hidden");
    }
  }

  // Play audio and update button state on page load
  audioPlayer.play();
  updateButtonState();

  // Toggle play/pause on button click
  playPauseBtn.addEventListener("click", function () {
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
    updateButtonState();
  });
});

// API GET DATA, Generate child from data-container form tag
async function getWishes() {
  const apiUrl = "https://your-wishes.com/api/wishes"; // Your Wishes API URL
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Select the container where you want to display the data
    const container = document.getElementById("data-container");

    // Create HTML to display the data
    const html = data
      .map(
        (item) => `
        <div>
            <p class="font-bold">${item.name}</p>
            <p>${item.wishes}</p>
            <p class="text-xs">${new Date(item.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</p>
        </div>
      `,
      )
      .join("");

    // Insert the HTML into the container
    container.innerHTML = html;
  } catch (error) {
    console.log(error);
  }
}

// Initial call
getWishes();

// Wishes form
document.addEventListener("DOMContentLoaded", function () {
  // Handle form submission
  const form = document.forms["wishesForm"];
  const sendButton = form.querySelector('button[type="submit"]'); // Select the Send button
  const errorMessage = form.querySelector("#error-message"); // Select the error message element

  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Disable the send button to prevent double submissions
    sendButton.disabled = true;

    // Get the name and wishes from the input fields
    const name = form.querySelector('input[placeholder="Name"]').value;
    const wishes = form.querySelector('textarea[placeholder="Wishes"]').value;
    const attendanceYes = form.querySelector(
      'input[id="attendance-yes"]',
    ).checked;
    const attendanceNo = form.querySelector(
      'input[id="attendance-no"]',
    ).checked;

    let attendance = null;

    if (attendanceYes) {
      attendance = true;
    } else if (attendanceNo) {
      attendance = false;
    }

    // Check if all fields are filled
    if (!name || !wishes || attendance === null) {
      errorMessage.classList.remove("hidden"); // Show the error message
      sendButton.disabled = false; // Re-enable the button if validation fails
      return;
    }

    // Hide the error message if validation is successful
    errorMessage.classList.add("hidden");

    const data = {
      name,
      wishes,
      attendance,
    };

    const apiUrl = "https://your-wishes.com/api/wishes";

    try {
      await fetch(apiUrl, {
        method: "POST", // Specify the method
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify(data),
      });

      // Clear the form inputs
      form.reset();

      // Fetch and display the updated wishes
      getWishes();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      // Re-enable the send button after the request is completed
      sendButton.disabled = false;
    }
  });
});
