/* ============================================================
   config.js — customize EVERYTHING here (except the letter).
   The letter body lives inside index.html on purpose.
   ============================================================ */

window.CONFIG = {

  /* ---------- META ---------- */
  meta: {
    title: "For Shivam 👑",
    description: "A little something for Shivam aka Billo Rani",
    favicon: "👑",
    themeColor: "#0e0a22"
  },

  /* ---------- IDENTITY ---------- */
  identity: {
    name: "Ridit",           // hero letter animation + footer
    nickname: "ridit"    // footer highlight
  },

  /* ---------- THEME (CSS variables) ---------- */
  theme: {
    bg: "#0e0a22",
    pink: "#ff4fa3",
    gold: "#ffb52e",
    cyan: "#3de0ff",
    lime: "#b8f35a",
    text: "#fbf7ff",
    muted: "#b7aad0"
  },

  /* ---------- MUSIC ---------- */
  music: {
    file: "billo.mp3",
    startTime: 101   // seconds
  },

  /* ---------- TIME LOCK ---------- */
  timeLock: {
    enabled: true,
    target: "2026-10-21T00:00:00+05:30",
    progressStart: "2026-10-01T00:00:00+05:30",
    crownEmoji: "⏳",
    eyebrow: "not so fast, Bbg Rani",
    title: "patience, bhai",
    subtitle: "this surprise unlocks at midnight",
    targetDisplay: "21 oct 2026 · 00:00 IST",
    hint: "come back when the clock strikes twelve ✨"
  },

  /* ---------- PIN LOCK ---------- */
  lock: {
    enabled: true,
    pin: "2110",
    crownEmoji: "👑",
    eyebrow: "Billo Rani only",
    title: "Enter the code, bhai",
    sub: "ek kissssss october??",
    errorMsg: "nope. try again, Billo Rani",
    hint: "tip: use hands mf~"
  },

  /* ---------- HERO ---------- */
  hero: {
    crownEmoji: "👑",
    eyebrow: "official bestie notice",
    happyBoday: "happy boday to",
    line: "aka Billo Rani. aka Shivu bhai. aka the absolute menace. This one's all yours.",
    scrollCue: "scroll"
  },

  /* ---------- TICKER ---------- */
  ticker: [
    "👑 BILLO RANI", "🎂 HAPPY BODAY", "🔥 BESTFRIEND",
    "💃 BAKCHODI ONLY", "🎉 SHIVU BHAI", "😈 ABSOLUTE MENACE"
  ],

  /* ---------- MEMORIES ---------- */
  memories: {
    eyebrow: "tap the cards",
    title: "Six memories, one menace",
    items: [
      { e: "🙈", t: "The Misunderstanding", b: "bliss cafe wala shivamm alwayss thoughtt you are him aayu ne btaya ki ye dusra wala hai" },
      { e: "👑", t: "babban billo to billo rani", b: "litrally speaking mujhe ni yaad ye naam tera kbbb pdaa ab yhi rhega hehehhhe" },
      { e: "🤪", t: "tannie wala case", b: "context du iska? lmaoo" },
      { e: "📞", t: "server ki os gyo", b: "teri gend fatiii walii sidee is smtg never gonna forget for sureee" },
      { e: "🫂", t: "bliss cafe X lollogram", b: "idk if u remember or nahh but u said \"agar maine ban (teen cafe wala) jesi harkatein krii to tum sb milke meri gand maar lena, kr yaar kuch ab mood bn gya\"" },
      { e: "😎", t: "tera birthday paragraph", b: "the way u wished me like lets be honest none did and that paragraph was deeep and real, i criedd seeing it thrice the day loll" }
    ]
  },

  /* ---------- STATS ---------- */
  stats: {
    eyebrow: "official statistics",
    title: "Billo Rani, measured",
    items: [
      { label: "Bakchodi level", value: "100%", width: 100 },
      { label: "Billo Rani energy", value: "∞", width: 100 },
      { label: "Dimaag", value: "loading…", width: 12 }
    ]
  },

  /* ---------- QUIZ ---------- */
  quiz: {
    eyebrow: "certification exam",
    title: "How well do you know Billo Rani?",
    nextLabel: "next question →",
    scoreLabel: "see my score 🎯",
    replayLabel: "try again 🔁",
    questions: [
      { q: "What is Shivam's official royal title?",
        opts: ["Billo Singh", "Billo Rani", "Shivu Maharaj", "Rani ji"], a: 1,
        ok: "correct, your highness 👑 obviously.",
        no: "lmaooo nope. it's Billo Rani, forever." },
      { q: "How much bakchodi can Shivam do in 1 minute?",
        opts: ["10%", "50%", "100%", "Over 9000"], a: 3,
        ok: "over 9000 is the only right answer 😈",
        no: "bro it's OVER 9000, come on." },
      { q: "Shivam's dimaag is currently loading at...",
        opts: ["100%", "50%", "12%", "Loading..."], a: 2,
        ok: "12% and rising (slowly) 😭",
        no: "12% bhai. it's always 12%." },
      { q: "What does Aarav call Shivam?",
        opts: ["Billo Rani", "Beta", "Sex slave", "All of the above (and more)"], a: 3,
        ok: "ALL OF THEM. the list never ends brooo 😂",
        no: "try ALL of the above. and more." },
      { q: "What's the golden rule of this friendship?",
        opts: ["Always be serious", "Never change", "Be boring", "Sleep early"], a: 1,
        ok: "NEVER CHANGE (okay maybe thoda dimaag) 💖",
        no: "never change, Billo Rani. that's the rule." },
      { q: "When Shivam is sad, what should he remember?",
        opts: ["Give up", "Feel bad", "THIS TOO SHALL PASS", "Stay sad"], a: 2,
        ok: "THIS TOO SHALL PASSSS ✨ and it always does.",
        no: "THIS TOO SHALL PASS. always." }
    ],
    results: {
      perfect: { emoji: "👑", title: "Certified Billo Rani Expert", msg: "100%?! you literally invented this. absolute menace behavior. 👑" },
      good:    { emoji: "😎", title: "Billo Rani Apprentice",      msg: "pretty solid. you know your own chaos. respect." },
      okay:    { emoji: "🕵️", title: "Undercover Billo Rani",      msg: "hmm. suspicious. need to step up the bakchodi." },
      bad:     { emoji: "🤡", title: "Who Are You Even?",           msg: "did you even read the questions?? absolute disaster. iconic." }
    }
  },

  /* ---------- GIFT ---------- */
  gift: {
    eyebrow: "for the birthday boy",
    title: "One gift, no returns",
    frontIcon: "🎁",
    backIcon: "🎉",
    hint: "tap to open",
    status: "Go on, Billo Rani. Open it."
  },

  /* ---------- SCRATCH ---------- */
  scratch: {
    eyebrow: "scratch to reveal",
    title: "A secret, just for you",
    lockEmoji: "🔒",
    text: "if i find u backbitching abt me ever again then u assasinated simply, misss Billo Rani.<br>you are the bestiee 😌",
    hint: "use your finger to scratch",
    canvasMain: "scratch me 🔍",
    canvasSub: "use your finger"
  },

  /* ---------- REASONS ---------- */
  reasons: {
    eyebrow: "why you're special",
    title: "Reasons, on demand",
    buttonLabel: "give me a reason ✨",
    allSeenLabel: "you've heard them all 💖",
    resetLabel: "give me another reason ✨",
    defaultEmoji: "💖",
    defaultText: "tap below and I'll tell you why you're literally the best",
    items: [
      { e: "💫", t: "the energyyy like noneee elseee??" },
      { e: "🔥", t: "aura ka laura i meannn peak aura lmao" },
      { e: "🎭", t: "the maskk off fakingg things and hiding (pagal kahika)" },
      { e: "🫂", t: "u helped when none else did!" },
      { e: "👑", t: "you're the my billooo rannnii" },
      { e: "😄", t: "your jokess are L but laughablee (hehehehehehe)" },
      { e: "🤪", t: "the way u always makes me and others feel safee tooo open up" },
      { e: "😈", t: "the humour. (jiske liye tu daru pee rha hai wo kisi aur ko doodh pilari hai lmaooo)" },
      { e: "💪", t: "cute andd strong natureeee to teraa haii hiii teri phechann" },
      { e: "📱", t: "99+ msggssss alwaysss!!" },
      { e: "✨", t: "doomsdayy dekhne chlengeeeeeeee isliye" },
      { e: "💖", t: "bas itna reason bohot haiii" }
    ]
  },

  /* ---------- CAKE ---------- */
  cake: {
    eyebrow: "last thing",
    title: "Make a wish, Billo Rani",
    defaultWish: "close your eyes, make a wish, then tap the cake 🎂",
    blownWish: "wish locked in 🔒 it's coming true, Billo Rani. happy boday 🎂",
    relitWish: "lit again 🔥 make another one, you deserve them all"
  },

  /* ---------- KISS BUTTON (UI near letter) ---------- */
  kiss: {
    label: "💋 kiss button",
    emojis: ["💋", "💖", "😘", "💕"]
  },

  /* ---------- FLOATERS / BURST EMOJIS ---------- */
  floaters: {
    words: ["billo rani", "bakchodi", "bestie", "shivu", "menace", "dimaag 12%", "chaos", "faltu baatein"],
    emojis: ["👑", "🎂", "🔥", "💃", "🎉", "✨", "💖", "💫"]
  },

  /* ---------- FOOTER ---------- */
  footer: {
    prefix: "made with bakchodi, for",
    highlight: "Billo Rani",
    suffix: "👑"
  },

  /* ---------- DEBUG ---------- */
  debug: {
    preview: false   // if true, add ?preview to URL to skip time lock + pin
  }
};
