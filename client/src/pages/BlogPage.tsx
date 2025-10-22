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
                  <Card className="group h-full overflow-hidden border-border/50 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20">
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

                      <Link href={`/blog/${post.slug}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        >
                          {t("blog.readMore")}
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
