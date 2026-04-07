import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Jewellery Buying Guides & Blog | Al Siraj Abu Dhabi",
  description: "Expert advice on buying gold in the UAE, diamond care tips, and bridal jewellery trends from Al Siraj Jewellery.",
};

const BLOG_POSTS = [
    {
        id: "18kt-vs-21kt-vs-22kt-gold-uae",
        title: "18KT vs 21KT vs 22KT Gold: Which is Better for Daily Wear in the UAE?",
        date: "April 2026",
        category: "Gold Guide"
    },
    {
        id: "ultimate-guide-buying-bridal-jewellery-abu-dhabi",
        title: "The Ultimate Guide to Buying Bridal Jewellery in Abu Dhabi",
        date: "April 2026",
        category: "Bridal"
    },
    {
        id: "how-to-care-for-diamond-jewellery-humid-uae",
        title: "How to Care for Diamond Jewellery in Humid UAE Weather",
        date: "May 2026",
        category: "Jewellery Care"
    },
    {
        id: "understanding-gold-making-charges-madama",
        title: "Understanding Gold Making Charges (Madama) in the UAE",
        date: "May 2026",
        category: "Buying Guide"
    }
];

export default function BlogIndexPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-32 pb-16 container mx-auto px-6 relative z-10">
        <h1 className="font-playfair text-5xl md:text-6xl text-cream mb-6">
            Al Siraj <span className="text-gold">Guides & Insights</span>
        </h1>
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mb-12 shadow-[0_0_10px_#D4AF37]" />
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post) => (
                <Link href={`/blog/${post.id}`} key={post.id}>
                    <div className="bg-[#3a0a13] border border-gold/10 p-8 rounded-sm hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col justify-between">
                        <div>
                            <span className="text-gold tracking-[0.2em] text-[10px] uppercase mb-4 block">{post.category}</span>
                            <h3 className="text-cream font-playfair text-2xl mb-4 leading-relaxed">{post.title}</h3>
                        </div>
                        <div className="flex justify-between items-center mt-6 pt-6 border-t border-white/5">
                            <span className="text-cream/50 text-xs">{post.date}</span>
                            <span className="text-gold text-xs uppercase tracking-widest group-hover:underline">Read Article &rarr;</span>
                        </div>
                    </div>
                </Link>
            ))}
        </section>
      </main>
    </div>
  );
}
