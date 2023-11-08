const quotesData = [
    { text: "The only way to do great work is to love what you do.", author: "- Steve Jobs" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "- Robert Frost" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "- Nelson Mandela" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "- Franklin D. Roosevelt" },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "- Ralph Waldo Emerson" },
    { text: "The only thing we have to fear is fear itself.", author: "- Franklin D. Roosevelt" },
    { text: "Life is what happens when you're busy making other plans.", author: "- John Lennon" },
    { text: "Believe you can and you're halfway there.", author: "- Theodore Roosevelt" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "- Eleanor Roosevelt" },
    { text: "The purpose of our lives is to be happy.", author: "- Dalai Lama" },
    { text: "You have the right to work, but never to the fruit of work.", author: "- Bhagavad Gita" },
    { text: "The mind is everything. What you think, you become.", author: "- Gautama Buddha (while not a Hindu, his teachings have influenced Hindu philosophy)" },
    { text: "Truth can be stated in a thousand different ways, yet each one can be true.", author: "- Swami Vivekananda" },
    { text: "The soul is neither born, and nor does it die.", author: "- Bhagavad Gita" },
    { text: "The greatest mistake you can make in life is to be continually fearing you will make one.", author: "- Elbert Hubbard (inspired by Hindu philosophy)" },
    { text: "The wise see the same God in a Brahmana, endowed with learning and humility, a cow, an elephant, a dog, and a dog-eater.", author: "- Bhagavad Gita" },
    { text: "Ignorance is the cause of sinful life, and sinful life is the cause of one's dragging on in material existence.", author: "- Bhagavad Gita" },
    { text: "The happiness which comes from long practice, which leads to the end of suffering, which at first is like poison, but at last like nectar - this kind of happiness arises from the serenity of one's own mind.", author: "- Bhagavad Gita" },
    { text: "The whole world is a cremation ground, and Lord Shiva is the ascetic there.", author: "- Swami Vivekananda" },
    { text: "The self-controlled soul, who moves amongst sense objects, free from either attachment or repulsion, he wins eternal peace.", author: "- Bhagavad Gita" },
  ];
  
const generateButton = document.getElementById("generate-button");
const quote = document.getElementById('quote');

generateButton.addEventListener('click', function () {
  const randomIndex = Math.floor(Math.random() * quotesData.length);
  const randomQuote = quotesData[randomIndex];

  // Format the quote and author with bold and italic
  const formattedQuote = `${randomQuote.text} <span class="author">${randomQuote.author}</span>`;
  quote.innerHTML = formattedQuote;
});