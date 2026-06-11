const compliments = [
  "You have a great sense of humor.",
  "You are very intelligent.",
  "You have an amazing personality.",
  "You are very creative.",
  "You have a kind heart.",
  "You are very hardworking.",
  "You have a positive attitude.",
  "You are very thoughtful.",
  "You are incredibly talented.",
  "You are very inspiring.",
  "You have great ideas.",
  "You are very confident.",
  "You are very reliable.",
  "You have a great smile.",
  "You are very supportive.",
  "You are very brave.",
  "You are very unique.",
  "You are very friendly.",
  "You are very smart.",
  "You have great leadership skills.",
  "You are very motivated.",
  "You are very patient.",
  "You are very generous.",
  "You are very charming.",
  "You are very passionate.",
  "You are very determined.",
  "You are very helpful.",
  "You are very respectful.",
  "You are very optimistic.",
  "You are very awesome."
];
const victimCardCompliments = [
  "You have a magnetic personality.",
  "Your smile can brighten anyone's day.",
  "You have an amazing sense of humor.",
  "You are incredibly thoughtful.",
  "You make people feel comfortable around you.",
  "You have a very creative mind.",
  "You bring positive energy wherever you go.",
  "You are very easy to talk to.",
  "You have a natural charm.",
  "You are a great listener.",
  "You have a unique perspective on things.",
  "You are very inspiring.",
  "You make people feel valued.",
  "You have a warm and friendly vibe.",
  "You are very genuine.",
  "You have strong character.",
  "You are very encouraging.",
  "You always find a way to make things better.",
  "You have great emotional intelligence.",
  "You are very supportive of others.",
  "You have an impressive way of thinking.",
  "You are very open-minded.",
  "You make people laugh easily.",
  "You are very approachable.",
  "You have a calm and reassuring presence.",
  "You are naturally likable.",
  "You have a great outlook on life.",
  "You are very dependable.",
  "You have a wonderful attitude.",
  "You leave a positive impression on people."
];
const recommendations = [
  "Take time to relax and recharge today.",
  "Trust your instincts when making decisions.",
  "Focus on improving one skill this week.",
  "Spend some quality time with your loved ones.",
  "Try something new and step out of your comfort zone.",
  "Stay consistent with your goals.",
  "Listen carefully before reacting in conversations.",
  "Organize your tasks to reduce stress.",
  "Take a short walk to refresh your mind.",
  "Practice patience in difficult situations.",
  "Stay curious and keep learning.",
  "Avoid overthinking small problems.",
  "Focus on what you can control.",
  "Take breaks when working for long hours.",
  "Believe in your abilities.",
  "Stay positive even during challenges.",
  "Work on improving your communication skills.",
  "Read something useful today.",
  "Keep your surroundings clean and organized.",
  "Stay disciplined with your daily routine.",
  "Try to help someone today.",
  "Reflect on your progress regularly.",
  "Drink enough water and stay healthy.",
  "Maintain a balance between work and rest.",
  "Spend some time away from screens.",
  "Plan your next steps carefully.",
  "Learn from your mistakes.",
  "Be open to feedback.",
  "Stay focused on your long-term goals.",
  "Celebrate small achievements."
];
const predictions = [
  "A pleasant surprise is waiting for you soon.",
  "You will soon discover a new opportunity.",
  "Someone important will appreciate your efforts.",
  "A small challenge will lead to a big learning.",
  "Good news may come from an unexpected place.",
  "Your patience will soon pay off.",
  "You may meet someone who changes your perspective.",
  "An exciting idea will come to your mind soon.",
  "You will overcome a problem that has been bothering you.",
  "A positive change is approaching in your life.",
  "You may receive appreciation for your hard work.",
  "An opportunity to learn something new will appear.",
  "Your confidence will help you achieve something important.",
  "A meaningful conversation will inspire you.",
  "You may reconnect with someone from the past.",
  "A lucky moment will brighten your day.",
  "You will find clarity in a confusing situation.",
  "Your creativity will bring you success.",
  "You will soon make a decision that benefits you.",
  "A new idea will help you solve a problem.",
  "Someone will rely on your advice.",
  "A small risk may lead to a great reward.",
  "Your determination will impress others.",
  "You may discover a hidden talent.",
  "An unexpected opportunity may appear soon.",
  "Your efforts will bring positive results.",
  "You will soon feel proud of your progress.",
  "Something you have been waiting for may finally happen.",
  "A good opportunity may knock on your door.",
  "The coming days will bring positive energy."
];
const zodiacSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces"
];

const form = document.getElementById("astroForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  const text = `Hi ${name} ${surname}, your Zodiac Sign is ${zodiacSigns[month-1]}.
  ${compliments[(day-1) % compliments.length]} 
  ${victimCardCompliments[year % victimCardCompliments.length]} 
  ${recommendations[day % recommendations.length]}`;

  document.querySelector(".result").textContent = text;
});