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
    id: "standing-desks-benefits",
    title: "Why Standing Desks Are Taking Over Workspaces",
    excerpt:
      "Explore the benefits of standing desks and how they can revolutionize your productivity and health...",
    content: `
          Standing desks are becoming a staple in modern workplaces, and for good reason. Here’s how they can benefit you:
          
          1. Improved Posture
          Standing desks encourage a more natural posture, reducing slouching and spinal strain.
          
          2. Increased Energy
          Alternating between sitting and standing boosts energy levels and reduces fatigue.
          
          3. Lower Risk of Chronic Diseases
          Studies suggest that reducing sedentary time can decrease the risk of heart disease and diabetes.
          
          4. Enhanced Productivity
          Standing while working has been linked to improved focus and mental clarity.
          
          5. Customization and Flexibility
          Many standing desks are adjustable, allowing you to find the perfect balance throughout your day.
        `,
    category: "Ergonomics",
    readTime: "6 min read",
    author: {
      name: "Emily Carter",
      role: "Health & Wellness Writer",
    },
    image:
      "https://images.unsplash.com/photo-1632923946112-637c9167403f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publishedAt: "2024-05-10",
  },
  {
    id: "office-chair-myths",
    title: "Debunking Common Myths About Office Chairs",
    excerpt:
      "Not all office chairs are created equal. Let's separate fact from fiction...",
    content: `
          Office chairs play a key role in workplace ergonomics. However, several myths persist that may lead to poor purchasing decisions:
          
          Myth 1: All Chairs Are Ergonomic
          Truth: A chair is only ergonomic if it supports proper posture and is adjustable to your body.
          
          Myth 2: Higher Price Equals Better Comfort
          Truth: While price can reflect quality, the best chair is one that suits your specific needs.
          
          Myth 3: Armrests Are Optional
          Truth: Properly positioned armrests reduce strain on your shoulders and wrists.
          
          Myth 4: Reclining Chairs Are Bad for Posture
          Truth: Adjustable reclining supports your back and reduces pressure on your spine.
          
          Invest in a chair with proven ergonomic features to enhance your workspace comfort.
        `,
    category: "Ergonomics",
    readTime: "5 min read",
    author: {
      name: "David Lopez",
      role: "Workplace Designer",
    },
    image:
      "https://images.unsplash.com/photo-1632923945815-c5a235ab458e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publishedAt: "2024-06-15",
  },
  {
    id: "ergonomics-and-mental-health",
    title: "The Connection Between Ergonomics and Mental Health",
    excerpt:
      "Discover how a well-designed workspace can positively impact your mental well-being...",
    content: `
          Your workspace ergonomics can significantly affect your mental health. Here's how:
          
          1. Reduced Stress Levels
          Proper seating and desk setup alleviate physical discomfort, reducing stress triggers.
          
          2. Better Focus
          An ergonomic setup minimizes distractions like neck pain or eye strain, enhancing focus.
          
          3. Boosted Mood
          Comfortable, well-lit spaces promote a sense of well-being and satisfaction.
          
          4. Improved Sleep
          Ergonomic solutions reduce physical tension, contributing to better sleep quality.
          
          5. Enhanced Work-Life Balance
          Efficient setups encourage healthier work habits, preventing burnout.
        `,
    category: "Health",
    readTime: "7 min read",
    author: {
      name: "Lisa Brown",
      role: "Ergonomics Specialist",
    },
    image:
      "https://images.unsplash.com/photo-1632923946568-7b10d00b00ee?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publishedAt: "2024-07-01",
  },
  {
    id: "remote-work-ergonomics",
    title: "Ergonomics Tips for Remote Workers",
    excerpt:
      "Working from home? Learn how to optimize your setup for comfort and productivity...",
    content: `
          Remote work presents unique challenges, but a few ergonomic adjustments can make all the difference:
          
          1. Create a Dedicated Workspace
          Choose a quiet area with minimal distractions to enhance focus.
          
          2. Use Proper Lighting
          Ensure your workspace is well-lit to reduce eye strain and improve mood.
          
          3. Adjust Your Screen Height
          Keep your monitor at eye level to avoid neck strain.
          
          4. Incorporate Movement
          Take regular breaks to stretch and move to prevent stiffness and fatigue.
          
          5. Invest in Ergonomic Accessories
          Consider items like laptop stands, footrests, and ergonomic keyboards.
        `,
    category: "Workplace",
    readTime: "6 min read",
    author: {
      name: "James Parker",
      role: "Remote Work Advisor",
    },
    image:
      "https://images.unsplash.com/photo-1683836809851-9e3aad661ffd?q=80&w=3261&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publishedAt: "2024-05-30",
  },
  {
    id: "child-friendly-ergonomics",
    title: "Designing Ergonomic Spaces for Kids",
    excerpt:
      "Children need ergonomic solutions too! Learn how to create a kid-friendly workspace...",
    content: `
          Kids benefit from ergonomic setups just as much as adults. Here's how to design their spaces:
          
          1. Adjustable Furniture
          Select desks and chairs that grow with your child, ensuring long-term comfort.
          
          2. Encourage Good Posture
          Teach kids to sit upright with feet flat on the floor.
          
          3. Screen Time Management
          Position screens at eye level and maintain a safe viewing distance.
          
          4. Add Supportive Accessories
          Consider using wrist rests and foot supports for smaller children.
          
          5. Promote Breaks and Activity
          Encourage regular movement and stretching to counteract prolonged sitting.
        `,
    category: "Health",
    readTime: "5 min read",
    author: {
      name: "Anna Lee",
      role: "Pediatric Ergonomics Expert",
    },
    image:
      "https://images.unsplash.com/photo-1632923946106-b2faa6152025?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publishedAt: "2024-06-20",
  },
  {
    id: "ergonomics-trends-2024",
    title: "Top Ergonomics Trends for 2024",
    excerpt:
      "From AI-driven designs to sustainable materials, see what’s trending in ergonomics this year...",
    content: `
          Ergonomics is evolving with new innovations and practices. Here are the top trends for 2024:
          
          1. AI-Powered Furniture
          Smart furniture that adapts to your body in real-time is gaining popularity.
          
          2. Biophilic Design
          Incorporating natural elements to enhance well-being is a growing focus.
          
          3. Sustainable Materials
          Furniture made from eco-friendly materials is becoming a priority for many.
          
          4. Hybrid Work Solutions
          Products designed for seamless transitions between home and office are in demand.
          
          5. Gamified Ergonomics
          Apps and devices that gamify posture and movement tracking are engaging users like never before.
        `,
    category: "Trends",
    readTime: "7 min read",
    author: {
      name: "Michael Stone",
      role: "Industry Analyst",
    },
    image:
      "https://images.unsplash.com/photo-1632923945906-b831f5ea46b5?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publishedAt: "2024-04-25",
  },
];
