import FeaturedArticles from "@/components/FeaturedArticle";
import HeroSection from "@/components/HeroSection";
import LatestPosts from "@/components/LatestPost";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedArticles />
      <LatestPosts />
      <Testimonials />
      <NewsletterSubscription />
    </div>
  );
}
