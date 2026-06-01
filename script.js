const users = [
  {
    name: "Amisha Rathore",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "silent chaos in a loud world 🌧️ | not for everyone"
  },
  {
    name: "Kiara Mehta",
    pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "main character energy 🎬 | coffee > everything ☕✨"
  },
  {
    name: "Isha Oberoi",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    bio: "walking through dreams in doc martens ☁️ | late night thinker"
  },
  {
    name: "Ojin Oklawa",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio: "too glam to give a damn 💅 | filter free soul"
  },
  {
    name: "Rahul Sharma",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    bio: "coding by day 💻 | gaming by night 🎮"
  },
  {
    name: "Priya Kapoor",
    pic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
    bio: "sunsets, books and chai 🌅📚☕"
  },
  {
    name: "Arjun Verma",
    pic: "https://images.unsplash.com/photo-1504593811423-6dd665756598",
    bio: "fitness enthusiast 🏋️ | chasing goals daily"
  },
  {
    name: "Neha Singh",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    bio: "designer 🎨 | turning ideas into reality"
  },
  {
    name: "Vikram Joshi",
    pic: "https://images.unsplash.com/photo-1504257432389-52343af06ae3",
    bio: "traveler ✈️ | collecting memories not things"
  },
  {
    name: "Ananya Reddy",
    pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    bio: "music lover 🎵 | living one song at a time"
  }
];
const cards = document.querySelector("#cards");
const input = document.querySelector("input");

function showUsers(data) {
    let clutter = "";

    data.forEach(user => {
        clutter += `
            <div class="card">
                <img src="${user.pic}" class="bg-img">

                <div class="blurred-layer"></div>

                <div class="content">
                    <h3>${user.name}</h3>
                    <p>${user.bio}</p>
                </div>
            </div>
        `;
    });

    cards.innerHTML = clutter;
}

// Show all users initially
showUsers(users);

input.addEventListener("input", function () {
    let searchText = input.value.toLowerCase();

    let filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchText)
    );

    showUsers(filteredUsers);
});
