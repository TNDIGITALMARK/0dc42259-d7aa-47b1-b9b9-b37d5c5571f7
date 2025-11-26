// Blog post data for LifePlan Pro
// This can be replaced with Supabase integration later

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  authorName: string;
  authorAvatar: string;
  category: 'wellness' | 'fitness' | 'nutrition' | 'goals' | 'productivity';
  tags: string[];
  readTimeMinutes: number;
  publishedAt: string;
  published: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Morning Habits That Will Transform Your Day',
    slug: '10-morning-habits-transform-your-day',
    excerpt: 'Start your day right with these science-backed morning routines that boost energy, focus, and productivity.',
    content: `
# 10 Morning Habits That Will Transform Your Day

Starting your day with intention sets the tone for everything that follows. Research shows that successful people share common morning habits that maximize their energy and productivity.

## 1. Wake Up at a Consistent Time

Your circadian rhythm thrives on consistency. Waking up at the same time every day, even on weekends, helps regulate your sleep cycle and improves overall sleep quality.

## 2. Hydrate Immediately

After 6-8 hours of sleep, your body is dehydrated. Drinking 16-20 oz of water first thing in the morning kickstarts your metabolism and flushes out toxins.

## 3. Move Your Body

Even just 10 minutes of movement—stretching, yoga, or a quick walk—increases blood flow, releases endorphins, and sharpens mental clarity.

## 4. Practice Mindfulness

Whether it's meditation, journaling, or simply sitting in silence, mindfulness helps reduce stress and improves emotional regulation throughout the day.

## 5. Eat a Nutritious Breakfast

Fuel your body with protein, healthy fats, and complex carbohydrates. This combination stabilizes blood sugar and provides sustained energy.

## 6. Review Your Goals

Spend 5 minutes reviewing your daily priorities. This helps you stay focused on what truly matters and prevents reactive decision-making.

## 7. Avoid Your Phone for the First Hour

Resist the urge to check emails or social media immediately. This protects your mental space and prevents unnecessary stress.

## 8. Get Natural Light

Expose yourself to natural sunlight within the first 30 minutes of waking. This regulates your circadian rhythm and boosts mood.

## 9. Practice Gratitude

Take a moment to acknowledge three things you're grateful for. This simple practice has been shown to improve happiness and resilience.

## 10. Prepare the Night Before

The best morning routines actually start the night before. Lay out clothes, prep breakfast, and set clear intentions for the next day.

## Start Small

You don't need to implement all 10 habits at once. Choose one or two that resonate with you and build from there. Consistency beats perfection every time.

Ready to transform your mornings? Track your progress with LifePlan Pro and build lasting habits that stick.
    `,
    coverImage: '/generated/blog-morning-habits.png',
    authorName: 'Sarah Johnson',
    authorAvatar: '/generated/avatar-sarah.png',
    category: 'wellness',
    tags: ['morning routine', 'habits', 'productivity', 'wellness'],
    readTimeMinutes: 8,
    publishedAt: '2025-11-20',
    published: true
  },
  {
    id: '2',
    title: 'The Science of Building Habits That Actually Stick',
    slug: 'science-building-habits-that-stick',
    excerpt: 'Learn the neuroscience behind habit formation and practical strategies to make lasting changes in your life.',
    content: `
# The Science of Building Habits That Actually Stick

Why do some habits stick while others fade away? The answer lies in understanding how your brain creates and reinforces behavioral patterns.

## The Habit Loop

Every habit follows a three-step loop: Cue → Routine → Reward. Understanding this loop is the key to building new habits and breaking old ones.

### Cue

A cue is a trigger that initiates the behavior. It can be a time of day, a location, an emotional state, or another action.

### Routine

The routine is the behavior itself—the action you take in response to the cue.

### Reward

The reward is the positive outcome that reinforces the habit loop and makes you want to repeat it.

## Start Ridiculously Small

Research by BJ Fogg shows that the best way to build a new habit is to start impossibly small. Want to exercise more? Start with just 2 pushups. Want to read more? Start with 2 pages.

## Stack Your Habits

Habit stacking leverages existing routines by adding new behaviors immediately after established ones. For example: "After I pour my morning coffee, I will do 10 squats."

## Make It Obvious

Design your environment to make good habits unavoidable and bad habits invisible. Put your workout clothes next to your bed. Hide the junk food.

## Track Your Progress

Studies show that people who track their habits are significantly more likely to stick with them. Visual progress creates a powerful motivation loop.

## The Two-Minute Rule

If a habit takes less than two minutes to do, do it immediately. This prevents procrastination and builds momentum.

## Be Patient

Neuroplasticity research shows it takes an average of 66 days for a new behavior to become automatic. Don't give up if you don't see instant results.

Ready to build habits that transform your life? LifePlan Pro's habit tracking system is designed around these evidence-based principles.
    `,
    coverImage: '/generated/blog-habit-science.png',
    authorName: 'Dr. Michael Chen',
    authorAvatar: '/generated/avatar-michael.png',
    category: 'goals',
    tags: ['habits', 'behavior change', 'neuroscience', 'goal setting'],
    readTimeMinutes: 10,
    publishedAt: '2025-11-18',
    published: true
  },
  {
    id: '3',
    title: 'Meal Prep Made Easy: A Beginner's Complete Guide',
    slug: 'meal-prep-beginners-complete-guide',
    excerpt: 'Master the art of meal prepping with this step-by-step guide. Save time, eat healthier, and reduce food waste.',
    content: `
# Meal Prep Made Easy: A Beginner's Complete Guide

Meal prepping is one of the most powerful habits you can develop for your health, time, and budget. Here's how to get started.

## Why Meal Prep?

- **Saves Time**: Spend 2-3 hours on Sunday, save 5+ hours during the week
- **Saves Money**: Reduce restaurant spending by 70%
- **Improves Health**: Control portions and ingredients
- **Reduces Stress**: No more "what's for dinner?" decisions

## Essential Equipment

You don't need fancy equipment, but these basics help:

- **Glass containers** with locking lids (BPA-free)
- **Sharp knives** and cutting boards
- **Sheet pans** for batch roasting
- **Slow cooker or Instant Pot** (optional but helpful)

## The 5-Step Meal Prep System

### Step 1: Plan Your Menu

Choose 3-4 recipes for the week. Focus on simple, reheatable meals with proteins, vegetables, and complex carbohydrates.

### Step 2: Create Your Shopping List

Organize your list by grocery store section to save time. Check what you already have to avoid duplicates.

### Step 3: Batch Cook Proteins

Grill 3-4 pounds of chicken, bake salmon, or cook a pot of beans. Having protein ready makes meals come together quickly.

### Step 4: Prep Vegetables

Wash, chop, and portion vegetables. Some (like bell peppers and cucumbers) last all week; others (like salad greens) prep mid-week.

### Step 5: Assemble and Store

Portion meals into containers. Label with dates and reheating instructions. Most meals last 4-5 days in the fridge.

## Beginner-Friendly Meal Prep Ideas

**Breakfast**: Overnight oats, egg muffins, smoothie packs
**Lunch**: Buddha bowls, salad jars, grain bowls
**Dinner**: Sheet pan meals, slow cooker recipes, stir-fries
**Snacks**: Cut vegetables, portioned nuts, hard-boiled eggs

## Common Mistakes to Avoid

1. **Prepping too much variety** - Start with 3-4 meals maximum
2. **Not investing in quality containers** - They pay for themselves quickly
3. **Forgetting about freezing** - Many meals freeze beautifully
4. **Expecting perfection** - It's okay if things aren't Instagram-worthy

## Make It Sustainable

Start with just prepping lunch for 3 days. Once that feels easy, add dinner or breakfast. Build gradually rather than burning out.

Track your meal prep habits and recipes with LifePlan Pro's nutrition planning tools. You've got this!
    `,
    coverImage: '/generated/blog-meal-prep.png',
    authorName: 'Emily Rodriguez',
    authorAvatar: '/generated/avatar-emily.png',
    category: 'nutrition',
    tags: ['meal prep', 'nutrition', 'healthy eating', 'time management'],
    readTimeMinutes: 12,
    publishedAt: '2025-11-15',
    published: true
  },
  {
    id: '4',
    title: 'Progressive Overload: The Key to Continuous Fitness Gains',
    slug: 'progressive-overload-fitness-gains',
    excerpt: 'Understand the fundamental principle that drives all strength and fitness improvements, and how to apply it safely.',
    content: `
# Progressive Overload: The Key to Continuous Fitness Gains

If you want to get stronger, faster, or more fit, you need to understand progressive overload—the single most important principle in exercise science.

## What Is Progressive Overload?

Progressive overload means gradually increasing the demands placed on your body during exercise. Without it, your body has no reason to adapt and improve.

## The Science Behind It

When you stress your muscles beyond their current capacity, they experience micro-tears. During recovery, your body repairs these tears and builds the muscle back stronger to handle future stress.

This adaptation process is how you get stronger, build muscle, and improve endurance. But here's the key: your body only adapts if you give it a reason to.

## Five Ways to Apply Progressive Overload

### 1. Increase Weight

The most straightforward method. Once you can complete your target reps with good form, add 5-10 pounds.

### 2. Increase Reps

If you're doing 8 reps, work up to 10-12 before adding weight.

### 3. Increase Sets

Add an extra set to your exercises once your current volume feels manageable.

### 4. Decrease Rest Time

Shorten rest periods between sets to increase workout intensity.

### 5. Improve Technique

Slowing down the eccentric (lowering) phase or adding pauses increases time under tension.

## How Often to Progress

**Beginners**: Can often progress weekly or every other week
**Intermediate**: Progress every 2-4 weeks
**Advanced**: May only progress monthly or quarterly

## Signs You're Progressing Too Fast

- Form is breaking down
- Excessive soreness lasting 3+ days
- Joint pain
- Decreased performance
- Poor sleep or recovery

## The Importance of Deload Weeks

Every 4-8 weeks, take a deload week where you reduce volume by 40-50%. This allows your body to fully recover and prevents overtraining.

## Track Everything

The only way to ensure progressive overload is to track your workouts. Record weights, reps, sets, and how each workout felt.

## Be Patient

True strength gains happen over months and years, not days and weeks. Consistency beats intensity every time.

Ready to level up your training? LifePlan Pro's workout tracking makes progressive overload simple and automatic.
    `,
    coverImage: '/generated/blog-progressive-overload.png',
    authorName: 'Coach Marcus Thompson',
    authorAvatar: '/generated/avatar-marcus.png',
    category: 'fitness',
    tags: ['strength training', 'progressive overload', 'muscle building', 'workout tips'],
    readTimeMinutes: 9,
    publishedAt: '2025-11-12',
    published: true
  },
  {
    id: '5',
    title: 'The SMART Goals Framework: From Dream to Reality',
    slug: 'smart-goals-framework-dream-to-reality',
    excerpt: 'Learn how to set goals that you actually achieve using the proven SMART methodology.',
    content: `
# The SMART Goals Framework: From Dream to Reality

Setting goals is easy. Achieving them is hard. The difference? How you define your goals in the first place.

## The Problem With Vague Goals

"I want to get fit" sounds great, but it's not actionable. How do you know when you've achieved it? What specific steps will you take? When will you start?

Vague goals lead to vague results.

## Enter SMART Goals

SMART is an acronym that ensures your goals are well-defined and achievable:

### S - Specific

Define exactly what you want to accomplish. Who, what, where, when, and why?

**Bad**: "I want to exercise more"
**Good**: "I will do 30 minutes of cardio three times per week"

### M - Measurable

Include concrete criteria for tracking progress and determining success.

**Bad**: "I want to eat healthier"
**Good**: "I will eat 5 servings of vegetables every day"

### A - Achievable

Be ambitious but realistic. Can you actually do this given your current resources and constraints?

**Bad**: "I'll lose 50 pounds in one month"
**Good**: "I'll lose 1-2 pounds per week for the next 6 months"

### R - Relevant

Does this goal align with your broader life priorities and values?

Ask yourself: Why does this matter to me? Is this the right time?

### T - Time-Bound

Set a deadline. Without one, there's no urgency and no way to know if you're on track.

**Bad**: "I want to run a marathon someday"
**Good**: "I will complete a marathon by October 15th, 2025"

## Example SMART Goals

**Fitness**: "I will increase my squat by 30 pounds within 12 weeks by following a progressive strength program 3x per week."

**Nutrition**: "I will prepare 4 healthy lunches every Sunday for the next 8 weeks to reduce eating out."

**Wellness**: "I will meditate for 10 minutes every morning before work for the next 30 days."

## Breaking Down Big Goals

Large goals can feel overwhelming. Break them into smaller milestones:

- **Big Goal**: Run a marathon in 6 months
- **Month 1**: Build base running 3x per week, 3 miles each
- **Month 2**: Increase to 4x per week, longest run 6 miles
- **Month 3**: Add speed work, longest run 10 miles
- And so on...

## Review and Adjust

Goals aren't set in stone. Review them weekly and monthly. Are you on track? Do they need adjustment? Life changes—your goals should too.

## The Power of Writing Goals Down

Research shows people who write their goals down are 42% more likely to achieve them. Make them visible.

Ready to turn your dreams into reality? LifePlan Pro's goal-setting system is built on the SMART framework with built-in tracking and accountability.
    `,
    coverImage: '/generated/blog-smart-goals.png',
    authorName: 'Jennifer Lee',
    authorAvatar: '/generated/avatar-jennifer.png',
    category: 'goals',
    tags: ['goal setting', 'SMART goals', 'productivity', 'achievement'],
    readTimeMinutes: 11,
    publishedAt: '2025-11-08',
    published: true
  },
  {
    id: '6',
    title: 'Understanding Macronutrients: The Ultimate Guide',
    slug: 'understanding-macronutrients-ultimate-guide',
    excerpt: 'Decode proteins, carbs, and fats. Learn how to balance macros for your specific fitness and health goals.',
    content: `
# Understanding Macronutrients: The Ultimate Guide

Calories matter, but not all calories are created equal. Understanding macronutrients is the key to optimizing your nutrition.

## What Are Macronutrients?

Macronutrients (or "macros") are the nutrients your body needs in large amounts for energy and function. There are three primary macros:

### Protein

**Function**: Builds and repairs tissues, makes enzymes and hormones, supports immune function

**Calories per gram**: 4
**Best sources**: Chicken, fish, eggs, Greek yogurt, tofu, legumes, protein powder

**How much?**: 0.8-1g per pound of body weight for active individuals

### Carbohydrates

**Function**: Primary energy source, fuels brain and physical activity, spares protein

**Calories per gram**: 4
**Best sources**: Oats, rice, quinoa, fruits, vegetables, sweet potatoes, whole grain bread

**How much?**: 45-65% of total calories for most people

### Fats

**Function**: Hormone production, nutrient absorption, brain function, inflammation control

**Calories per gram**: 9
**Best sources**: Avocados, nuts, seeds, olive oil, fatty fish, coconut oil, eggs

**How much?**: 20-35% of total calories

## Why Macros Matter More Than Just Calories

Two people can eat the same number of calories but have completely different body composition results based on their macro breakdown.

**Example**:
- **Person A**: 2000 calories (40% carbs, 30% protein, 30% fat) → Builds muscle, loses fat
- **Person B**: 2000 calories (70% carbs, 15% protein, 15% fat) → Loses muscle, struggles with hunger

## Macro Ratios for Different Goals

### Fat Loss

- **Protein**: 1g per lb body weight (35-40%)
- **Fat**: 0.3-0.4g per lb body weight (25-30%)
- **Carbs**: Fill remainder (30-40%)

High protein preserves muscle while in a calorie deficit. Moderate fat supports hormones. Lower carbs when less active.

### Muscle Gain

- **Protein**: 0.8-1g per lb body weight (25-30%)
- **Carbs**: Higher to fuel workouts (45-55%)
- **Fat**: 0.3-0.5g per lb body weight (20-25%)

Higher carbs support training intensity and recovery. Adequate protein builds new muscle tissue.

### Athletic Performance

- **Carbs**: Highest (50-60%)
- **Protein**: Moderate (20-25%)
- **Fat**: Lower (20-25%)

Endurance athletes need more carbs to fuel prolonged activity.

## How to Track Macros

1. **Calculate your total daily calories** based on your goal (maintenance, deficit, or surplus)
2. **Set protein first** (0.8-1g per lb body weight)
3. **Set fat second** (0.3-0.5g per lb body weight)
4. **Fill remainder with carbs**

## Tracking Tools

Apps like MyFitnessPal, Cronometer, or LifePlan Pro make macro tracking simple. Start by tracking for 2 weeks to understand your eating patterns.

## Don't Stress Perfection

Getting within 5-10g of your macro targets is perfectly fine. The goal is consistency over time, not daily perfection.

## Food Quality Still Matters

Hitting your macros with processed junk food won't support optimal health. Focus on whole, nutrient-dense foods whenever possible.

Track your nutrition effortlessly with LifePlan Pro's built-in macro calculator and meal planning tools.
    `,
    coverImage: '/generated/blog-macronutrients.png',
    authorName: 'Dr. Amanda Foster',
    authorAvatar: '/generated/avatar-amanda.png',
    category: 'nutrition',
    tags: ['nutrition', 'macronutrients', 'diet', 'meal planning'],
    readTimeMinutes: 13,
    publishedAt: '2025-11-05',
    published: true
  }
];

// Helper functions
export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.filter(post => post.published).sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug && post.published);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts
    .filter(post => post.published && post.category === category)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getRelatedPosts(currentPostId: string, limit: number = 3): BlogPost[] {
  const currentPost = blogPosts.find(post => post.id === currentPostId);
  if (!currentPost) return [];

  return blogPosts
    .filter(post =>
      post.published &&
      post.id !== currentPostId &&
      (post.category === currentPost.category ||
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
}
