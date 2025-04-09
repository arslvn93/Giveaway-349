// This file centralizes all editable content for the giveaway page

// Prize section
export const prizeImages = [
  "https://images.unsplash.com/photo-1556742400-b5b7c5121f99?ixid=M3w3MjQzNjF8MXwxfHNlYXJjaHwxfHxjYWZlfGVufDB8fHx8MTc0NDIyNTQ2M3ww&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixid=M3w3MjQzNjF8MHwxfHNlYXJjaHwyfHxjYWZlfGVufDB8fHx8MTc0NDIyNTQ2M3ww&ixlib=rb-4.0.3", 
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixid=M3w3MjQzNjF8MHwxfHNlYXJjaHwzfHxjYWZlfGVufDB8fHx8MTc0NDIyNTQ2M3ww&ixlib=rb-4.0.3", 
];
export const prizeContent = {
  title: "Pumpkin Patch Experience",
  description: "Immerse yourself in the magic of autumn with an exclusive pumpkin patch experience! Enjoy a day among vibrant pumpkins in Toronto—an unforgettable treat for first-time home buyers looking to add a seasonal touch to their new home.",
  features: [
    "Enjoy a guided tour of a picturesque pumpkin patch in Toronto",
    "Select your perfect pumpkin to carve or decorate your new home",
    "Experience the charm and warmth of fall with family and friends",
    "Free entry exclusively for first-time home buyers",
    "Limited time offer – don’t miss this seasonal celebration!"
  ],
  value: "$100",
};

// Header section
export const headerContent = {
  title: "Win a Pumpkin Patch Experience!",
  description: "Calling all first-time home buyers in Toronto! Enter now for your chance to win a day of autumn magic valued at $100. Free entry – no purchase necessary.",
  ctaText: "Enter Now",
  heroImage: prizeImages[0],
  secondaryImage: prizeImages[1],
};

// Navigation section
export const navigationContent = {
  title: "Pumpkin Patch Giveaway",
  links: [
    { name: 'Home', href: '#' },
    { name: 'Prize Details', href: '#prize' },
    { name: 'How to Enter', href: '#howToEnter' },
    { name: 'Rules', href: '#rules' },
    { name: 'Contact', href: '#contact' }
  ]
};

// How to Enter section
export const howToEnterContent = {
  title: "How to Enter",
  description: "Getting started is easy! Follow these simple steps to enter our Pumpkin Patch Giveaway.",
  steps: [
    {
      icon: "Mail",
      title: "Fill Out the Form",
      description: "Enter your name and email address in the form and submit it."
    },
    {
      icon: "Share2",
      title: "Share with Friends",
      description: "Share this giveaway on social media for extra entries."
    },
    {
      icon: "Users",
      title: "Confirm Entry",
      description: "Check your email to confirm your entry and you're all set!"
    }
  ],
  benefits: [
    { 
      icon: "Clock", 
      title: "Quick & Easy", 
      desc: "Takes less than a minute" 
    },
    { 
      icon: "Trophy", 
      title: "Multiple Entries", 
      desc: "Share for more chances" 
    },
    { 
      icon: "Gift", 
      title: "$100 Value Experience", 
      desc: "Experience a day at a pumpkin patch" 
    }
  ],
  formLabels: {
    nameLabel: "Your Name",
    namePlaceholder: "John Doe",
    emailLabel: "Email Address",
    emailPlaceholder: "you@example.com",
    submitButton: "Enter Pumpkin Patch Giveaway",
    processingText: "Processing...",
    sharingPlatforms: ["Facebook", "Twitter", "Instagram"],
    sharingText: "Share for Extra Entries:",
    termsText: "By entering, you agree to our Terms & Conditions and Privacy Policy."
  },
  successMessage: {
    title: "Entry Submitted!",
    description: "Check your email to confirm your entry."
  },
  currentEntries: 125
};

// Rules section
export const rulesContent = {
  title: "Rules & Eligibility",
  description: "Please review the following rules and eligibility requirements before entering the giveaway.",
  rules: [
    {
      question: "Who is eligible to enter?",
      answer: "Anyone 18 years or older residing in Toronto can enter this giveaway.",
    },
    {
      question: "How long does the giveaway run?",
      answer: "This giveaway runs from April 15, 2025 to April 30, 2025, as indicated by the countdown timer.",
    },
    {
      question: "How will the winner be selected?",
      answer: "The winner will be selected randomly from all valid entries using a certified random selection tool to ensure fairness.",
    },
    {
      question: "When and how will the winner be notified?",
      answer: "The winner will be notified via email within 48 hours after the giveaway ends on April 30, 2025. They must respond within 72 hours to claim their prize.",
    },
    {
      question: "How many times can I enter?",
      answer: "Each person may enter once. Additional entries can be earned through sharing on social media (up to 3 additional entries).",
    },
    {
      question: "Is my information secure?",
      answer: "Yes, we take privacy seriously. Your information will only be used for this giveaway and will not be shared with third parties.",
    },
  ],
  imageUrl: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=800",
  tipsForEntering: [
    "Double-check your email address before submitting your entry",
    "Share on social media for additional entry opportunities",
    "Mark your calendar for the drawing date"
  ],
  importantNotice: "All winners will be contacted via the email provided during entry. Make sure to check your inbox (and spam folder) regularly after the giveaway ends.",
  supportEmail: "support@theskygroup.ca",
  termsText: "By entering, you agree to all rules and terms.",
  downloadRulesText: "Download Full Rules PDF"
};

// Contact section
export const contactContent = {
  title: "Get In Touch",
  email: "info@theskygroup.ca",
  phone: "289-210-5250",
  brokerage: {
    name: "The Sky Group",
    address: "123 Arena Blvd, Toronto"
  },
  disclaimer: "This site is not intended to solicit buyers or sellers who are currently under contract.",
  copyright: "Copyright 2025. All rights reserved",
  privacyPolicyText: "Privacy Policy"
};

// Footer section
export const footerContent = {
  aboutText: "The Sky Group Giveaway connects first-time home buyers with unforgettable experiences in Toronto.",
  email: "info@theskygroup.ca",
  phone: "289-210-5250",
  quickLinks: ["Home", "About", "Listings", "Contact", "Privacy Policy"],
  newsletterText: "Subscribe to our newsletter for the latest updates on giveaways and exclusive offers.",
  brokerage: {
    name: "The Sky Group",
    address: "123 Arena Blvd, Toronto"
  },
  disclaimer: "This site is not intended to solicit buyers or sellers who are currently under contract.",
  copyright: "Copyright 2025. All rights reserved",
  company: "The Sky Group",
  privacyPolicyText: "Privacy Policy"
};

// Countdown
export const countdownContent = {
  endDate: new Date("April 30, 2025")
};

// Color scheme configuration for the entire giveaway
export const colorScheme = {
  primary: {
    main: 'orange-600',
    light: 'orange-400',
    dark: 'orange-800',
    gradient: 'from-orange-500 to-orange-700',
    text: 'orange-700',
    textLight: 'orange-500',
    textDark: 'orange-900',
    hover: 'orange-700',
    border: 'orange-200',
    background: 'orange-50',
    accent: 'orange-100',
    accentDark: 'orange-300',
  },
  secondary: {
    main: 'white',
    text: 'gray-700',
    textLight: 'gray-600',
    textDark: 'gray-800',
    border: 'gray-200',
    background: 'white',
    accent: 'gray-100',
  },
  utility: {
    success: 'green-600',
    successLight: 'green-100',
    error: 'red-600',
    errorLight: 'red-100',
    warning: 'yellow-600',
    warningLight: 'yellow-100',
    info: 'blue-600',
    infoLight: 'blue-100',
  },
  gradients: {
    header: 'from-orange-100/70 via-orange-50/40 to-transparent',
    countdownBg: 'from-orange-800 to-orange-950',
    countdownText: 'from-orange-200 to-orange-400',
    prizeTitle: 'from-orange-700 to-orange-500',
    button: 'from-orange-500 to-orange-600',
    buttonHover: 'from-orange-600 to-orange-700',
  },
  shadows: {
    small: 'shadow-md',
    medium: 'shadow-lg',
    large: 'shadow-xl',
    extraLarge: 'shadow-2xl',
    glow: 'shadow-[0_0_15px_rgba(251,191,36,0.3)]',
  },
  animations: {
    float: 'animate-float',
    pulseSlow: 'animate-pulse-slow',
    bounceSlow: 'animate-bounce-slow',
  }
};