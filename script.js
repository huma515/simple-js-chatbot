const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");


const responses = [
  { keywords: ["hello", "hi", "hey"], reply: "Hello 👋 Welcome to ABC Institute! How are you today?" },
  { keywords: ["fee", "fees", "charges"], reply: "Our institute fee is 5000 PKR per month. Would you like to know about the available courses?" },
  { keywords: ["course", "subject", "learn"], reply: "We currently offer HTML, CSS, JavaScript, and Python courses. Which one are you interested in?" },
  { keywords: ["timing", "time", "schedule", "class"], reply: "Our classes run from 9:00 AM to 5:00 PM, Monday to Friday." },
  { keywords: ["address", "location", "where"], reply: "Our institute is located at Main Shahrah-e-Faisal, Karachi." },
  { keywords: ["contact", "phone", "number"], reply: "You can contact us at 📞 0300-1234567 for more details." },
  { keywords: ["teacher", "instructor", "faculty"], reply: "Our teachers are highly qualified with 5+ years of experience in their respective fields." },
  { keywords: ["admission", "join", "enroll"], reply: "The admission process is simple: Fill the online form, submit your documents, and confirm your fee payment." },

  
  { keywords: ["html"], reply: "Great choice 👍 HTML is the foundation of web development. You’ll learn how to structure websites properly." },
  { keywords: ["css"], reply: "CSS will help you style and design your websites beautifully 🎨. It’s the backbone of modern web design." },
  { keywords: ["javascript", "js"], reply: "JavaScript adds life to your websites ⚡. You’ll learn logic, interactivity, and dynamic features." },
  { keywords: ["python"], reply: "Python is a powerful programming language 🐍 used in AI, Data Science, and Web Development." },

  { keywords: ["bye", "goodbye", "take care"], reply: "Goodbye! 👋 Thank you for visiting ABC Institute. Wishing you success in your studies!" }
];

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  // User message
  const userMsgDiv = document.createElement("div");
  userMsgDiv.className = "message user-message";
  userMsgDiv.innerText = message;
  chatBox.appendChild(userMsgDiv);

  chatBox.scrollTop = chatBox.scrollHeight;

  // Bot reply after delay
  setTimeout(() => {
    const botMsgDiv = document.createElement("div");
    botMsgDiv.className = "message bot-message";

    const reply = getBotReply(message.toLowerCase());
    botMsgDiv.innerText = reply;

    chatBox.appendChild(botMsgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 800);

  userInput.value = "";
}


function getBotReply(msg) {
  for (let item of responses) {
    for (let keyword of item.keywords) {
      if (msg.includes(keyword)) {
        return item.reply;
      }
    }
  }
  return "I'm sorry, I didn’t quite understand that 🤔 Could you please ask something related to our institute, courses, or timings?";
}


userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
