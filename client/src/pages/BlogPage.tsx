import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedText } from "@/components/ui/animated-text";
import { Meta } from "@/components/Meta";
import { blogPosts } from "@/mockData";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function BlogPage() {
  const { t } = useTranslation();
  const [showBlogModal, setShowBlogModal] = useState(false);

  useEffect(() => {
    // Check if user has seen the blog modal before
    const hasSeenBlogModal = sessionStorage.getItem("hasSeenBlogModal");
    if (!hasSeenBlogModal) {
      setShowBlogModal(true);
    }
  }, []);

  const handleCloseBlogModal = () => {
    setShowBlogModal(false);
    sessionStorage.setItem("hasSeenBlogModal", "true");
  };

  const handleCardClick = (slug: string) => {
    window.location.href = `/blog/${slug}`;
  };

  return (
    <>
      <Meta
        title={t("pageTitle.blog")}
        description={t("blog.subtitle")}
        keywords="hukuk blog, hukuki makaleler, hukuk güncellemeleri, şirketler hukuku, aile hukuku, ceza hukuku"
      />

      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-muted/30 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="text-center">
              <AnimatedText className="font-serif text-4xl font-bold text-foreground md:text-5xl mb-6">
                {t("blog.title")}
              </AnimatedText>
              <AnimatedText className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t("blog.subtitle")}
              </AnimatedText>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 0.1}>
                  <Card
                    className="group h-full overflow-hidden border-border/50 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20 cursor-pointer"
                    onClick={() => handleCardClick(post.slug)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={t(post.titleKey)}
                        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                        {t(post.categoryKey)}
                      </Badge>
                    </div>

                    <CardHeader className="pb-3">
                      <h3 className="font-serif text-xl font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                        {t(post.titleKey)}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {t(post.excerptKey)}
                      </p>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {new Date(post.publishedAt).toLocaleDateString(
                              "tr-TR"
                            )}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {t(post.tagsKey, { returnObjects: true })
                          .slice(0, 2)
                          .map((tag: string, tagIndex: number) => (
                            <Badge
                              key={tagIndex}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                      </div>

                      <div className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors rounded-md border border-border px-3 py-2 text-center text-sm font-medium">
                        {t("blog.readMore")}
                        <ArrowRight className="ml-2 h-3 w-3 inline" />
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Blog Modal */}
      {showBlogModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleCloseBlogModal();
            }
          }}
        >
          <div className="mx-4 w-full max-w-2xl animate-in fade-in-0 zoom-in-95 duration-300">
            <div className="bg-background rounded-lg border border-border shadow-lg">
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    <svg
                      className="h-8 w-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {t("blog.modal.title")}
                  </h2>
                  <p className="text-muted-foreground">
                    {t("blog.modal.subtitle")}
                  </p>
                </div>

                <div className="space-y-4 text-foreground mb-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800 font-medium mb-2">
                      ⚠️ {t("blog.modal.warning")}
                    </p>
                    <p className="text-sm text-blue-700">
                      {t("blog.modal.warningText")}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed">
                    {t("blog.modal.description")}
                  </p>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-green-800 font-medium mb-2">
                      💡 {t("blog.modal.advantages")}
                    </p>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• {t("blog.modal.advantage1")}</li>
                      <li>• {t("blog.modal.advantage2")}</li>
                      <li>• {t("blog.modal.advantage3")}</li>
                      <li>• {t("blog.modal.advantage4")}</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={handleCloseBlogModal}
                    className="flex-1 bg-primary hover:bg-primary/90"
                    size="lg"
                  >
                    {t("blog.modal.understood")}
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary/10"
                    size="lg"
                    onClick={() =>
                      window.open("https://softiumtechnologies.com", "_blank")
                    }
                  >
                    {t("blog.modal.softiumLink")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
