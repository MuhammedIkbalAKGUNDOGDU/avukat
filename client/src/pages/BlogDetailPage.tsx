import { useTranslation } from "react-i18next";
import { useRoute } from "wouter";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedText } from "@/components/ui/animated-text";
import { Meta } from "@/components/Meta";
import { blogPosts } from "@/mockData";
import { Calendar, Clock, User, ArrowLeft, Share2, Tag } from "lucide-react";

export default function BlogDetailPage() {
  const { t } = useTranslation();
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  // Find the blog post by slug
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Meta
          title={t("pageTitle.notFound")}
          description="Blog post not found"
        />
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Blog Post Not Found
            </h1>
            <Link href="/blog">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <>
      <Meta
        title={t("pageTitle.blogDetail", { title: t(post.titleKey) })}
        description={t(post.excerptKey)}
        keywords={t(post.tagsKey, { returnObjects: true }).join(", ")}
      />

      <div className="flex flex-col">
        {/* Back Button */}
        <section className="bg-background py-6">
          <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-12">
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("blog.backToBlog")}
              </Button>
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-muted/30 py-12">
          <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <div className="text-center mb-8">
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  {t(post.categoryKey)}
                </Badge>
                <AnimatedText className="font-serif text-3xl font-bold text-foreground md:text-4xl mb-6 leading-tight">
                  {t(post.titleKey)}
                </AnimatedText>
                <AnimatedText className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  {t(post.excerptKey)}
                </AnimatedText>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString("tr-TR")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  {t("blog.share")}
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Article Image */}
        <section className="py-8">
          <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-12">
            <AnimatedSection>
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt={t(post.titleKey)}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <AnimatedSection>
                  <div className="prose prose-lg max-w-none">
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {t(post.contentKey)}
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <AnimatedSection delay={0.2}>
                  <Card className="sticky top-8">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Tag className="h-4 w-4" />
                        {t("blog.tags")}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {t(post.tagsKey, { returnObjects: true }).map(
                          (tag: string, index: number) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          )
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-muted/30 py-16">
            <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
              <AnimatedSection>
                <div className="text-center mb-12">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                    {t("blog.relatedPosts")}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relatedPosts.map((relatedPost, index) => (
                    <AnimatedSection key={relatedPost.id} delay={index * 0.1}>
                      <Card className="group overflow-hidden border-border/50 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                        <div className="relative overflow-hidden">
                          <img
                            src={relatedPost.image}
                            alt={t(relatedPost.titleKey)}
                            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                          <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                            {t(relatedPost.categoryKey)}
                          </Badge>
                        </div>

                        <CardContent className="p-6">
                          <h3 className="font-serif text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                            {t(relatedPost.titleKey)}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                            {t(relatedPost.excerptKey)}
                          </p>

                          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              <span>{relatedPost.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>
                                {new Date(
                                  relatedPost.publishedAt
                                ).toLocaleDateString("tr-TR")}
                              </span>
                            </div>
                          </div>

                          <Link href={`/blog/${relatedPost.slug}`}>
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                            >
                              {t("blog.readMore")}
                              <ArrowLeft className="ml-2 h-3 w-3 rotate-180" />
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
