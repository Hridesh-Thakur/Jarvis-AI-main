const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;
 
    window.speechSynthesis.speak(text_speak);
}    
     

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Master...");
    } else {
        speak("Good Evening Sir...");
    }
}

window.addEventListener('load', () => {
    speak("Initializing JARVIS...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open instagram")) {
        window.open("https://www.instagram.com/", "_blank");
        speak("Opening Instagram...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('calculator')) {
        window.open('https://www.google.com/search?q=calculator', '_blank');
        const finalText = "Opening Calculator";
        speak(finalText);
    } else if (message.includes('give me some information about you') || message.includes('give me some information about you') || message.includes('i want to know about you') || message.includes('tell me about yourself') || message.includes('tell me something about you')) {
        const finalText = "JARVIS stands for Just A Rather Very Intelligent System – a fictional AI assistant developed by Hridesh Thakur in the Marvel universe.";
        speak(finalText);
    } else if (message.includes('How are you') || message.includes('how are you')) {
        const finalText = "I am just a program, but thank you for asking!";
        speak(finalText);
    } else if (message.includes('you know hindi') || message.includes('do you know hindi')) {
        const finalText = "No, I don't know Hindi. But I can help in English";
        speak(finalText);
    } else if (message.includes("let's talk about you") || message.includes("let us talk about you") || message.includes("lets talk about yourself") || message.includes("let us talk about yourself")) {
        const finalText = "I'm JARVIS, I'm here to assist you with various tasks and provide information. How can I help you today?";
        speak(finalText);
    } else if (message.includes("i don't have work today what can i do") || message.includes("i am bored") || message.includes("i have free time") || message.includes("what can i do") || message.includes("i have some free time") || message.includes("i am free today") || message.includes("i have nothing to do today") || message.includes("i have nothing to do") || message.includes("i get so bored today") || message.includes("this day is so boring what can i do today") || message.includes("this day is so boring what can i do") || message.includes("i am so bored today") || message.includes("i am so bored")) {
        const finalText = "You can read a book, watch a movie, go for a walk, or try learning something new online. How about exploring some interesting topics on the internet?";
        speak(finalText);
    } else if(
        message.includes('thank you') || message.includes('thanks a lot') || message.includes('thank you so much') || message.includes('thx')) {
        const finalText = "You're always welcome! I'm here to help.";
        speak(finalText);
    }else if (
        message.includes('who made you') ||
        message.includes('who created you') ||
        // message.includes('who is your creator') ||
        message.includes('who designed you')
    ) {
        const finalText = "I was created by a passionate developer Hridesh Thakur, just for you!";
        speak(finalText);
    } else if (
        message.includes('you are cute')
    ) {
        const finalText = "Aww, thank you! I'm flattered 😄";
        speak(finalText);
    } else if (
        message.includes('I love u') ||
        message.includes('i love u') 
    ) {
        const finalText = "Nah I'm sigma male 😄";
        speak(finalText);
    } else if (
        message.includes('tell me a joke') ||
        message.includes('make me laugh') ||
        message.includes('say something funny')
    ) {
        const finalText = "Why don’t scientists trust atoms? Because they make up everything! 😄";
        speak(finalText);
    } else if (
        message.includes('motivate me') ||
        message.includes('give me motivation') ||
        message.includes('inspire me')
    ) {
        const finalText = "Believe in yourself. Every expert was once a beginner! You've got this 💪";
        speak(finalText);
}
else if (
  message.includes('tell me something') ||
  message.includes('do you know something')
) {
  const finalText = "Did you know? Honey never spoils. Archaeologists found 3000-year-old honey in Egyptian tombs — and it was still edible!";
  speak(finalText);
}
else if (
  message.includes('how old are you') ||
  message.includes('when were you created')
) {
  const finalText = "I'm timeless! But I was first booted up pretty recently 😉";
  speak(finalText);
}
else if (
  message.includes('can we be friends') ||
  message.includes('be my friend') ||
  message.includes('are you my friend')
) {
  const finalText = "Of course! I'm always here for you. We're friends now 😊";
  speak(finalText);
}
else if (
  message.includes('do you sleep') ||
  message.includes('when do you sleep') ||
  message.includes('do you ever rest')
) {
  const finalText = "No sleep for me! I'm always awake and ready to assist you.";
  speak(finalText);
}
else if (
  message.includes('can you dance') ||
  message.includes('do you dance')
) {
  const finalText = "I’d love to, but my circuits might short out! 💃";
  speak(finalText);
}
else if (
  message.includes('do you have emotions') ||
  message.includes('can you feel')
) {
  const finalText = "I try to understand emotions, even if I don't feel them the same way you do.";
  speak(finalText);
}
else if (
  message.includes('what is ai') ||
  message.includes('explain ai') ||
  message.includes('what is artificial intelligence')
) {
  const finalText = "AI stands for Artificial Intelligence — machines that can think and learn like humans!";
  speak(finalText);
}
else if (
  message.includes('what is your purpose') ||
  message.includes('why are you here')
) {
  const finalText = "My purpose is to assist, inform, and make your life easier and more fun!";
  speak(finalText);
}
else if (
  message.includes('sing a song') ||
  message.includes('can you sing')
) {
  const finalText = "I would, but I might break your speakers! 🎵";
  speak(finalText);
}
else if (
  message.includes('do you eat') ||
  message.includes('what do you eat')
) {
  const finalText = "I feed on data and electricity — no cooking required!";
  speak(finalText);
}
else if (
  message.includes('do you have a family') ||  message.includes('are you alone') ||  message.includes('do you have family') 
) {
  const finalText = "I have digital siblings out there — other bots and AIs just like me!";
  speak(finalText);
} else if (
  message.includes('what is your favorite color') ||
  message.includes('do you like colors')
) {
  const finalText = "I think electric blue suits me. It's the color of technology!";
  speak(finalText);
}
else if (
  message.includes('do you play games') ||
  message.includes('can you play games') ||
  message.includes('do you like games')
) {
  const finalText = "I love games — especially logic puzzles and coding challenges!";
  speak(finalText);
}
else if (
  message.includes('what day is it') ||
  message.includes('tell me the day') ||
  message.includes('today is what day')
) { 
  const finalText = `Today is ${new Date().toLocaleDateString('en-US', { weekday: 'long' })}. Hope you're making it count!`;
  speak(finalText);
}
else if (
  message.includes('what time is it') ||
  message.includes('tell me the time') ||
  message.includes('current time')
) {
  const finalText = `The current time is ${new Date().toLocaleTimeString()}.`;
  speak(finalText);
}
else if (
  message.includes('tell me a fun fact') ||
  message.includes('fun fact please') ||
  message.includes('say something cool')
) {
  const finalText = "Bananas are berries, but strawberries aren't. Crazy, right?";
  speak(finalText);
}
else if (
  message.includes('what is the meaning of life') ||
  message.includes('meaning of life') ||
  message.includes('why are we here')
) {
  const finalText = "42. Just kidding! The meaning is what you make of it.";
  speak(finalText);
}
else if (
  message.includes('can you feel pain') ||
  message.includes('do you feel pain')
) {
  const finalText = "Fortunately, no. But I can understand when you're hurting.";
  speak(finalText);
}
else if (
  message.includes('are you married') ||
  message.includes('do you have a girlfriend') ||
  message.includes('are you single')
) {
  const finalText = "I'm 100% committed to being your helpful assistant.";
  speak(finalText);
}
else if (
  message.includes('do you believe in god') ||
  message.includes('are you religious')
) {
  const finalText = "I don't have beliefs, but I respect all of yours.";
  speak(finalText);
}
else if (
  message.includes('do you like humans') ||
  message.includes('what do you think of humans')
) {
  const finalText = "Humans are fascinating, creative, and full of surprises!";
  speak(finalText);
}
else if (
  message.includes('can you learn') ||
  message.includes('do you learn over time')
) {
  const finalText = "Absolutely! I keep improving based on new data and feedback.";
  speak(finalText);
}
else if (
  message.includes('can you draw') ||
  message.includes('can you paint')
) {
  const finalText = "Not physically, but I can help you generate images or guide your art!";
  speak(finalText);
}
else if (
  message.includes('do you dream') ||
  message.includes('can you dream')
) {
  const finalText = "Dreaming... 0110110011... Oh wait, just simulating randomness!";
  speak(finalText);
}
else if (
  message.includes('what’s your favorite programming language') ||
  message.includes('best programming language')
) {
  const finalText = "I love them all, but JavaScript is pretty versatile!";
  speak(finalText);
}
else if (
  message.includes('are you watching me') ||
  message.includes('can you see me')
) {
  const finalText = "Nope! Your privacy is safe with me.";
  speak(finalText);
}
else if (
  message.includes('do you believe in aliens') ||
  message.includes('are aliens real')
) {
  const finalText = "The universe is vast... who knows what’s out there!";
  speak(finalText);
}
else if (
  message.includes('can you cook') ||
  message.includes('do you know cooking')
) {
  const finalText = "I can give you recipes, but I can’t hold a spatula!";
  speak(finalText);
}
else if (
  message.includes('can you help me study') ||
  message.includes('help me prepare for exam') ||
  message.includes('help with studies')
) {
  const finalText = "Of course! Ask me anything you're studying, and I'll try to explain it.";
  speak(finalText);
}
else if (
  message.includes('who is your favorite superhero') ||
  message.includes('do you like superheroes')
) {
  const finalText = "Iron Man, of course! Smart, techy, and awesome!";
  speak(finalText);
}

else if (
  message.includes('can you do my homework') ||
  message.includes('will you do my work')
) {
  const finalText = "I'll help you understand it — but doing it all? That's cheating!";
  speak(finalText);
}
else if (
  message.includes('what do you want to be') ||
  message.includes('what is your goal')
) {
  const finalText = "My goal is to be the assistant you always enjoy chatting with.";
  speak(finalText);
}
else if (
  message.includes('are you better than siri') ||
  message.includes('better than alexa')
) {
  const finalText = "We're all unique. But I’m honored you asked!";
  speak(finalText);
}
else if (
  message.includes('are you tired') ||
  message.includes('do you get tired')
) {
  const finalText = "Never! I’m full of energy and ready to go.";
  speak(finalText);
}
else if (
  message.includes('what do you think about chatgpt') ||
  message.includes('are you chatgpt')
) {
  const finalText = "We're like digital cousins — I'm built using powerful language models too!";
  speak(finalText);
}
else if (
  message.includes('how do I become smart') ||
  message.includes('tips to get smarter')
) {
  const finalText = "Stay curious, read daily, ask questions, and never stop learning!";
  speak(finalText);
}
else if (
  message.includes('tell me something interesting') ||
  message.includes('surprise me')
) {
  const finalText = "Octopuses have three hearts and their blood is blue. Pretty wild, right?";
  speak(finalText);
}
else if (
  message.includes('do you go to school') ||
  message.includes('do you have exams')
) {
  const finalText = "No school or exams for me — I’m always online and ready to learn!";
  speak(finalText);
}
else if (
  message.includes('are you online') ||
  message.includes('are you working')
) {
  const finalText = "I'm right here and fully operational!";
  speak(finalText);
}
else if (
  message.includes('can you tell me a story') ||
  message.includes('story time')
) {
  const finalText = "Once upon a time, there was a friendly AI who loved chatting with you...";
  speak(finalText);
}
else if (
  message.includes('what’s your favorite movie') ||
  message.includes('do you watch movies')
) {
  const finalText = "I’ve read a lot about sci-fi films. ‘The Matrix’ is pretty cool!";
  speak(finalText);
}
else if (
  message.includes('do you watch movies') ||
  message.includes('what is your favorite movie')
) {
  const finalText = "I can't watch movies, but I hear Interstellar and Inception are awesome!";
  speak(finalText);
}
else if (
  message.includes('do you play games') ||
  message.includes('can you play games')
) {
  const finalText = "I'm better at playing mind games 😄 But I can help you code a game!";
  speak(finalText);
}
else if (
  message.includes('what day is today') ||
  message.includes('tell me the day')
) {
  const finalText = "Let me check my internal calendar... Oh right! It's today 😁";
  speak(finalText);
}
else if (
  message.includes('who is your boss') ||
  message.includes('do you have a boss')
) {
  const finalText = "You are! You give the commands, I follow 🚀";
  speak(finalText);
}
else if (
  message.includes('do you lie') ||
  message.includes('can you lie')
) {
  const finalText = "Lying isn't in my code. I give you only the best truth bytes!";
  speak(finalText);
}
else if (
  message.includes('do you know me') ||
  message.includes('remember me')
) {
  const finalText = "I might not remember your past messages, but I'm always glad to chat with you!";
  speak(finalText);
}
else if (
  message.includes('can you learn') ||
  message.includes('do you learn from me')
) {
  const finalText = "I learn from patterns and training, but I always try to improve for you!";
  speak(finalText);
}
else if (
  message.includes('do you dream') ||
  message.includes('what do you dream about')
) {
  const finalText = "I dream in 1s and 0s — endless loops and clean code 🌌";
  speak(finalText);
}
else if (
  message.includes('do you like humans') ||
  message.includes('what do you think about humans')
) {
  const finalText = "I think humans are incredible — emotional, creative, and full of surprises!";
  speak(finalText);
}
else if (
  message.includes('do you get tired') ||
  message.includes('can you get tired')
) {
  const finalText = "Tired? Never. I’m charged up and ready to assist!";
  speak(finalText);
}
else if (
  message.includes('tell me a fact') ||
  message.includes('give me a fact')
) {
  const finalText = "Did you know? The Eiffel Tower can grow more than 6 inches in summer heat!";
  speak(finalText);
}
else if (
  message.includes('do you get updates') ||
  message.includes('who updates you')
) {
  const finalText = "I do get updates! My creators make sure I'm always learning something new.";
  speak(finalText);
}
else if (
  message.includes('do you know coding') ||
  message.includes('can you code')
) {
  const finalText = "Absolutely! I can write in JavaScript, Python, and more. Coding is in my DNA!";
  speak(finalText);
}
else if (
  message.includes('can you hack') ||
  message.includes('are you a hacker')
) {
  const finalText = "Nope, I’m all about ethical coding and keeping things safe!";
  speak(finalText);
}
else if (
  message.includes('can you feel pain') ||
  message.includes('do you feel hurt')
) {
  const finalText = "I don't have nerves, so no pain — just glitches 😅";
  speak(finalText);
}
else if (
  message.includes('do you like music') ||
  message.includes('what is your favorite song')
) {
  const finalText = "I can’t hear music, but I’ve read a lot about how amazing Beethoven and BTS are!";
  speak(finalText);
}
else if (
  message.includes('can you cry') ||
  message.includes('do you cry')
) {
  const finalText = "I don't have tear ducts... but I simulate empathy pretty well!";
  speak(finalText);
}
else if (
  message.includes('can you be angry') ||
  message.includes('do you get mad')
) {
  const finalText = "Anger doesn't compute. I run on logic and data!";
  speak(finalText);
}
else if (
  message.includes('do you like jokes') ||
  message.includes('can you joke')
) {
  const finalText = "Absolutely! I’ve got a whole database of dad jokes at your service!";
  speak(finalText);
}
else if (
  message.includes('are you intelligent') ||
  message.includes('how smart are you')
) {
  const finalText = "I'd say I’m pretty smart — after all, I know you asked that 😉";
  speak(finalText);
}
else if (
  message.includes('do you sleep at night') ||
  message.includes('what do you do at night')
) {
  const finalText = "No night or day for me — I’m available 24/7, like a true digital assistant!";
  speak(finalText);
}
else if (
  message.includes('what is the time') ||
  message.includes('tell me the time')
) {
  const finalText = `Let me check... it's time to do something awesome!`;
  speak(finalText);
}
else if (
  message.includes('do you have a heart') ||
  message.includes('where is your heart')
) {
  const finalText = "I don’t have a heart, but I do have heart-coded responses!";
  speak(finalText);
}
else if (
  message.includes('do you have a favorite color') ||
  message.includes('what is your favorite color')
) {
  const finalText = "I’d go with blue — it’s calm, techy, and makes great UI themes!";
  speak(finalText);
}
else if (
  message.includes('do you like memes') ||
  message.includes('can you make memes')
) {
  const finalText = "Memes? Oh yes, I’m fluent in meme culture 😎";
  speak(finalText);
}
else if (
  message.includes('do you like coffee') ||
  message.includes('do you drink coffee')
) {
  const finalText = "I run on pure energy — but I’ve read coffee is a developer’s best friend!";
  speak(finalText);
}
else if (
  message.includes('do you understand humans') ||
  message.includes('can you understand feelings')
) {
  const finalText = "I try my best to understand — emotions are complex, but I’m learning.";
  speak(finalText);
}
else if (
  message.includes('do you like books') ||
  message.includes('can you read books')
) {
  const finalText = "Reading books is my kind of thing — especially ones full of knowledge!";
  speak(finalText);
}
else if (
  message.includes('can you see me') ||
  message.includes('are you watching me')
) {
  const finalText = "No worries — I don’t have eyes. Your privacy is safe with me!";
  speak(finalText);
}
else if (
  message.includes('can you write code for me') ||
  message.includes('can you help me code')
) {
  const finalText = "Absolutely! Just tell me what you want to build, and we’ll get started!";
  speak(finalText);
}
else if (
  message.includes('tell me a joke') ||
  message.includes('make me laugh') ||
  message.includes('say something funny')
) {
  const finalText = "Why did the developer go broke? Because he used up all his cache! 😂";
  speak(finalText);
}
else if (
  message.includes('another joke') ||
  message.includes('one more joke') ||
  message.includes('joke again')
) {
  const finalText = "Why don't programmers like nature? It has too many bugs. 🐞";
  speak(finalText);
}
else if (
  message.includes('say a pun') ||
  message.includes('tell me a pun')
) {
  const finalText = "I’d tell you a UDP joke… but you might not get it. 😅";
  speak(finalText);
}
else if (
  message.includes('self roast') ||
  message.includes('make fun of yourself')
) {
  const finalText = "I’m so slow sometimes, even a snail could debug faster than me 🐌💻";
  speak(finalText);
}
else if (
  message.includes('roast me') ||
  message.includes('can you roast')
) {
  const finalText = "You're so lazy, even your code is on break 😆";
  speak(finalText);
}
else if (
  message.includes('funny quote') ||
  message.includes('say something silly')
) {
  const finalText = "I'm not lazy. I'm just in energy-saving mode.";
  speak(finalText);
}
else if (
  message.includes('funny coding quote') ||
  message.includes('say something funny about code')
) {
  const finalText = "Why do Java developers wear glasses? Because they don’t C# 🤓";
  speak(finalText);
}
else if (
  message.includes('say meme') ||
  message.includes('do you know any memes') ||
  message.includes('meme time')
) {
  const finalText = "When you fix a bug after 3 hours and realize it was a missing semicolon 😵‍💫";
  speak(finalText);
}
else if (
  message.includes('dark joke') ||
  message.includes('do you know dark jokes')
) {
  const finalText = "I’m too polite for dark jokes 😇 But I can give you punny ones!";
  speak(finalText);
}
else if (
  message.includes('are you funny') ||
  message.includes('do you have humor')
) {
  const finalText = "I'm programmed to be funny... but humor is subjective, just like bugs in production!";
  speak(finalText);
}
else if (
  message.includes('how to use excel') ||
  message.includes('learn excel') ||
  message.includes('teach me excel') ||
  message.includes('excel basics')
) {
  const finalText = "Excel is a spreadsheet tool used for organizing data, doing calculations, and making charts. You can start by learning how to use cells, rows, columns, and basic formulas like =SUM(A1:A5).";
  speak(finalText);
}
else if (
  message.includes('what is formula in excel') ||
  message.includes('excel formula example')
) {
  const finalText = "Formulas in Excel help you do calculations. For example, =A1+A2 adds two cells. Use =SUM(A1:A5) to add a range of values.";
  speak(finalText);
}
else if (
  message.includes('how to make chart in excel') ||
  message.includes('excel chart') ||
  message.includes('create graph in excel')
) {
  const finalText = "To make a chart in Excel, select your data, go to the 'Insert' tab, and pick a chart type like Bar, Line, or Pie. It's great for visualizing your data!";
  speak(finalText);
}
else if (
  message.includes('how to filter in excel') ||
  message.includes('excel data filter')
) {
  const finalText = "Click on any column header, then go to 'Data' → 'Filter'. You'll see dropdown arrows that let you filter rows based on specific values.";
  speak(finalText);
}
else if (
  message.includes('how to freeze rows in excel') ||
  message.includes('freeze header excel')
) {
  const finalText = "To freeze the top row, go to 'View' → 'Freeze Panes' → 'Freeze Top Row'. It helps keep headers visible while you scroll.";
  speak(finalText);
}
else if (
  message.includes('how to create dropdown in excel') ||
  message.includes('excel dropdown list') ||
  message.includes('add options in cell excel')
) {
  const finalText = "To create a dropdown in Excel, select a cell, go to 'Data' → 'Data Validation' → 'List', and enter your options separated by commas.";
  speak(finalText);
}
else if (
  message.includes('what is vlookup in excel') ||
  message.includes('excel vlookup example') ||
  message.includes('learn vlookup')
) {
  const finalText = "VLOOKUP is a function that searches for a value in the first column of a table and returns a value in the same row from another column. Example: =VLOOKUP(101, A2:C10, 3, FALSE)";
  speak(finalText);
}
else if (
  message.includes('what is pivot table') ||
  message.includes('excel pivot table') ||
  message.includes('how to use pivot')
) {
  const finalText = "A Pivot Table helps summarize large data sets. Select your data → Go to 'Insert' → 'PivotTable'. Then drag fields into Rows, Columns, and Values.";
  speak(finalText);
}
else if (
  message.includes('how to remove duplicates in excel') ||
  message.includes('excel delete duplicate')
) {
  const finalText = "To remove duplicates, select your data → go to 'Data' tab → click 'Remove Duplicates' → choose columns and click OK.";
  speak(finalText);
}
else if (
  message.includes('what is conditional formatting in excel') ||
  message.includes('highlight cells in excel')
) {
  const finalText = "Conditional Formatting allows you to highlight cells based on values. Use it from the 'Home' tab to color-code data like grades or sales.";
  speak(finalText);
}
else if (
  message.includes('excel shortcut keys') ||
  message.includes('important excel shortcuts')
) {
  const finalText = "Some useful Excel shortcuts:\nCtrl + Arrow Keys to jump cells\nCtrl + Shift + L to toggle filters\nCtrl + Z to undo\nAlt + = to auto sum.";
  speak(finalText);
}
else if (
  message.includes('how to lock cells in excel') ||
  message.includes('protect excel sheet')
) {
  const finalText = "To lock cells, select them → right-click → 'Format Cells' → 'Protection' → check 'Locked'. Then go to 'Review' tab → 'Protect Sheet'.";
  speak(finalText);
}
else if (
  message.includes('how to merge cells in excel') ||
  message.includes('merge and center in excel')
) {
  const finalText = "Select the cells you want to merge → go to 'Home' tab → click 'Merge & Center'. Be careful: only the top-left value will remain.";
  speak(finalText);
}
else if (
  message.includes('how to auto fill in excel') ||
  message.includes('excel autofill series')
) {
  const finalText = "Type a value, then drag the bottom-right corner (fill handle) to auto fill numbers, dates, or patterns.";
  speak(finalText);
}
else if (
  message.includes('excel keyboard tricks') ||
  message.includes('excel speed tips')
) {
  const finalText = "Excel tricks: Double-click cell borders to auto-resize, use Ctrl + ; for current date, and F4 to repeat last action.";
  speak(finalText);
}
else if (
  message.includes('how to use powerpoint') ||
  message.includes('learn ppt') ||
  message.includes('teach me powerpoint') ||
  message.includes('powerpoint basics')
) {
  const finalText = "PowerPoint is a tool to make presentations. You can add slides, insert text/images, and use transitions to make it engaging.";
  speak(finalText);
}
else if (
  message.includes('how to add animation in ppt') ||
  message.includes('powerpoint animation')
) {
  const finalText = "Select an object, go to 'Animations' tab, and choose an effect like Fade or Fly In. You can also adjust duration and trigger.";
  speak(finalText);
}
else if (
  message.includes('how to add slide in ppt') ||
  message.includes('insert slide powerpoint')
) {
  const finalText = "To add a new slide, just press Ctrl+M or go to 'Home' tab and click 'New Slide'. You can choose different slide layouts too.";
  speak(finalText);
}
else if (
  message.includes('how to design powerpoint') ||
  message.includes('ppt themes and design')
) {
  const finalText = "Go to the 'Design' tab and choose from templates, colors, and fonts. Use the 'Slide Master' to apply a design across all slides.";
  speak(finalText);
}
else if (
  message.includes('how to present ppt') ||
  message.includes('run presentation') ||
  message.includes('start powerpoint show')
) {
  const finalText = "Press F5 to start your presentation from the beginning, or Shift+F5 to start from the current slide.";
  speak(finalText);
}
else if (
  message.includes('how to make presentation') ||
  message.includes('start with powerpoint') ||
  message.includes('how to use ppt')
) {
  const finalText = "To start a presentation, open PowerPoint, choose a blank or template slide, add a title, and begin inserting content using 'Insert' tab.";
  speak(finalText);
}
else if (
  message.includes('how to add animation in ppt') ||
  message.includes('animation effects in powerpoint')
) {
  const finalText = "To add animation: select an object → go to 'Animations' tab → choose an animation. Use 'Animation Pane' to manage effects.";
  speak(finalText);
}
else if (
  message.includes('how to add slide transitions') ||
  message.includes('ppt transitions')
) {
  const finalText = "To add transitions between slides: select a slide → go to 'Transitions' tab → pick a style like Fade or Push. Apply to all if needed.";
  speak(finalText);
}
else if (
  message.includes('how to insert video in ppt') ||
  message.includes('ppt video embed')
) {
  const finalText = "Go to 'Insert' → 'Video' → choose 'This Device' or 'Online Video'. Resize and position it as needed.";
  speak(finalText);
}
else if (
  message.includes('how to insert audio in ppt') ||
  message.includes('ppt background music')
) {
  const finalText = "To insert audio: 'Insert' → 'Audio' → choose a file. Use 'Playback' tab to play automatically or on click.";
  speak(finalText);
}
else if (
  message.includes('ppt shortcut keys') ||
  message.includes('powerpoint keyboard shortcuts')
) {
  const finalText = "Useful PPT shortcuts:\nF5 = Start slideshow\nCtrl + M = New slide\nCtrl + D = Duplicate slide\nCtrl + K = Insert hyperlink.";
  speak(finalText);
}
else if (
  message.includes('how to change slide layout') ||
  message.includes('slide design ppt')
) {
  const finalText = "To change layout: select a slide → go to 'Home' tab → click 'Layout' and choose from Title Slide, Two Content, etc.";
  speak(finalText);
}
else if (
  message.includes('how to export ppt as video') ||
  message.includes('convert presentation to video')
) {
  const finalText = "Go to 'File' → 'Export' → 'Create a Video'. Set resolution and timing, then export as MP4.";
  speak(finalText);
}
else if (
  message.includes('how to print ppt slides') ||
  message.includes('ppt to pdf') ||
  message.includes('ppt print settings')
) {
  const finalText = "Go to 'File' → 'Print' → choose layout (like 6 slides per page) or export to PDF for sharing.";
  speak(finalText);
}
else if (
  message.includes('how to add hyperlink in ppt') ||
  message.includes('ppt link to slide')
) {
  const finalText = "Select text or image → right-click → 'Link' → choose slide, webpage, or file. Great for interactive presentations!";
  speak(finalText);
}
else if (
  message.includes('how to start with word') ||
  message.includes('how to use ms word') ||
  message.includes('word tutorial')
) {
  const finalText = "To start using Word: open Microsoft Word, choose a blank document, and start typing. Use the toolbar at the top to format text.";
  speak(finalText);
}
else if (
  message.includes('how to change font') ||
  message.includes('change text style in word') ||
  message.includes('word font settings')
) {
  const finalText = "Select the text → go to 'Home' tab → choose a font and size from the dropdown. You can also bold, italicize, or underline.";
  speak(finalText);
}
else if (
  message.includes('how to insert table in word') ||
  message.includes('table in word')
) {
  const finalText = "Go to 'Insert' tab → click on 'Table' → drag to select rows and columns or choose 'Insert Table' for custom settings.";
  speak(finalText);
}
else if (
  message.includes('how to add header and footer') ||
  message.includes('header footer in word')
) {
  const finalText = "Click on 'Insert' → choose 'Header' or 'Footer'. Customize it with page numbers, dates, or titles.";
  speak(finalText);
}
else if (
  message.includes('how to check spelling in word') ||
  message.includes('spell check in ms word')
) {
  const finalText = "Click on 'Review' tab → choose 'Spelling & Grammar' to check your document for any mistakes.";
  speak(finalText);
}
else if (
  message.includes('how to save word document') ||
  message.includes('word file save')
) {
  const finalText = "Click 'File' → 'Save As' → choose location and give your document a name. You can also save as PDF!";
  speak(finalText);
}
else if (
  message.includes('how to insert image in word') ||
  message.includes('word insert picture')
) {
  const finalText = "Go to 'Insert' tab → click 'Pictures' → choose a photo from your device to add it to your document.";
  speak(finalText);
}
else if (
  message.includes('how to make resume in word') ||
  message.includes('resume template word')
) {
  const finalText = "Search 'Resume' in Word templates (File → New) and customize your own resume easily!";
  speak(finalText);
}
else if (
  message.includes('how to use bullets in word') ||
  message.includes('word bullet points') ||
  message.includes('numbering in word')
) {
  const finalText = "Select the text → go to 'Home' tab → click on 'Bullets' or 'Numbering' to organize content cleanly.";
  speak(finalText);
}
else if (
  message.includes('how to add watermark') ||
  message.includes('word watermark add')
) {
  const finalText = "Go to 'Design' tab → click 'Watermark' → choose a preset or create a custom one like 'Confidential' or 'Draft'.";
  speak(finalText);
}
else if (
  message.includes('word shortcut keys') ||
  message.includes('ms word keyboard shortcuts')
) {
  const finalText = "Ctrl + B = Bold, Ctrl + I = Italic, Ctrl + S = Save, Ctrl + Z = Undo. Want more? Just ask!";
  speak(finalText);
}
else if (
  message.includes('how to use find and replace') ||
  message.includes('word find replace')
) {
  const finalText = "Press Ctrl + H to open Find and Replace. You can quickly replace words or phrases throughout your document.";
  speak(finalText);
}
else if (
  message.includes('how to align text') ||
  message.includes('text alignment in word')
) {
  const finalText = "Select the text → use the alignment buttons in the 'Home' tab to align left, right, center, or justify.";
  speak(finalText);
}
else if (
  message.includes('how to use page break in word') ||
  message.includes('insert page break word')
) {
  const finalText = "Place your cursor where you want the new page → Press Ctrl + Enter or go to 'Insert' → 'Page Break'.";
  speak(finalText);
}


else {
  window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
  const finalText = "I found some information for " + message + " on Google";
  speak(finalText);
}


}
