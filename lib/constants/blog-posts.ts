export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  image: string;
  publishedAt: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "must-have-gadgets",
    title: "5 Must-Have Gadgets for Your Home Office",
    excerpt:
      "Discover the essential tech tools that can transform your productivity...",
    content: `
        In today's digital age, having the right tech setup is crucial for a productive home office. Here are five essential gadgets that can transform your workspace:
  
        1. High-Quality Webcam
        A professional-grade webcam is essential for video conferences and virtual meetings. Look for features like HD resolution, auto-focus, and built-in noise-canceling microphones.
  
        2. Wireless Noise-Canceling Headphones
        Invest in quality headphones to maintain focus and professional communication. Active noise cancellation helps eliminate distracting background noise.
  
        3. USB-C Hub/Dock
        A versatile USB-C hub connects all your devices and peripherals while keeping your workspace organized. Essential ports include HDMI, USB-A, ethernet, and SD card readers.
  
        4. Smart Lighting System
        Proper lighting affects both productivity and video call quality. Consider adjustable LED desk lamps or smart bulbs that can adapt to different times of day.
  
        5. Wireless Charging Pad
        Keep your devices charged without cable clutter. A multi-device charging pad can handle your phone, earbuds, and other wireless charging-compatible devices.
      `,
    category: "Tech",
    readTime: "5 min read",
    author: {
      name: "Alex Chen",
      role: "Tech Specialist",
    },
    image: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a",
    publishedAt: "2024-03-20",
  },
  {
    id: "ergonomic-furniture-guide",
    title: "The Ultimate Guide to Ergonomic Furniture",
    excerpt:
      "Learn how to choose the right ergonomic furniture for your needs...",
    content: `
        Creating an ergonomic workspace is crucial for your health and productivity. Here's your comprehensive guide to choosing the right furniture:
  
        Choosing the Right Chair
        - Look for adjustable height, armrests, and lumbar support
        - Ensure the seat depth allows proper back support
        - Consider materials for comfort and durability
  
        Desk Selection
        - Height-adjustable desks offer flexibility
        - Ensure adequate workspace depth
        - Consider cable management solutions
  
        Monitor Position
        - Screen should be at arm's length
        - Top of screen at or slightly below eye level
        - Use monitor arms for optimal positioning
  
        Keyboard and Mouse
        - Keep them at elbow height
        - Use wrist rests for support
        - Consider ergonomic keyboard designs
  
        Remember: The best ergonomic setup is one that you can adjust throughout the day to maintain proper posture and comfort.
      `,
    category: "Ergonomics",
    readTime: "8 min read",
    author: {
      name: "Sarah Johnson",
      role: "Ergonomics Consultant",
    },
    image: "https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa",
    publishedAt: "2024-03-18",
  },
];
