import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BlogPost, BlogDetailResponse } from '../../types/blog';
import SEOHead from '../../components/SEOHead';
import StructuredData from '../../components/StructuredData';
import { ArrowLeft, Calendar, Tag, Loader2, Share2, Facebook, Twitter, Linkedin, Clock, BookOpen } from 'lucide-react';

export default function BlogDetailPage() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`https://824f-103-163-240-34.ngrok-free.app/api/blogs/${slug}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true'
          },
          mode: 'cors'
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: BlogDetailResponse = await response.json();
        
        if (data.success && data.data && data.data.blog) {
          setPost(data.data.blog);
        } else {
          throw new Error('Blog post not found');
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An error occurred while fetching the blog post';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [slug]);

  const formatDate = (dateString: string) => {
    const [datePart] = dateString.split(', ');
    const [day, month, year] = datePart.split('/');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatDateISO = (dateString: string) => {
    const [datePart] = dateString.split(', ');
    const [day, month, year] = datePart.split('/');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return date.toISOString();
  };

  const shareUrl = window.location.href;
  const shareTitle = post?.title || '';

  const handleShare = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    };
    
    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
  };

  if (loading) {
    return (
      <>
        <SEOHead
          title={t('blog.loading')}
          description={t('blog.subtitle')}
          keywords="Blog Article, Business Insights, ERP, Technology"
          type="article"
        />
        
        <div className="min-h-screen bg-white">
          <section className="section-hero">
            <div className="container-enterprise">
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                  <BookOpen className="h-4 w-4 mr-2" />
                  {t('blog.loading')}
                </div>
                <div className="flex items-center justify-center min-h-[200px]">
                  <div className="text-center">
                    <Loader2 className="h-12 w-12 animate-spin mx-auto mb-6 text-blue-600" />
                    <p className="text-xl text-enterprise-secondary">{t('blog.loading')}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <SEOHead
          title={t('blog.articleNotFound.title')}
          description={t('blog.articleNotFound.message')}
          keywords="Blog Article, Not Found, Error"
          type="article"
        />
        
        <div className="min-h-screen bg-white">
          <section className="section-hero">
            <div className="container-enterprise">
              <div className="text-center">
                <Link 
                  to="/blog" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {t('blog.backToBlog')}
                </Link>
                <div className="card-enterprise p-12 max-w-md mx-auto">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-enterprise-primary mb-4">{t('blog.articleNotFound.title')}</h3>
                  <p className="text-enterprise-secondary mb-6">{error || t('blog.articleNotFound.message')}</p>
                  <Link 
                    to="/blog" 
                    className="btn-primary"
                  >
                    {t('blog.backToBlog')}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.meta_description}
        keywords={post.meta_keywords}
        image={post.banner_url}
        type="article"
        publishedTime={formatDateISO(post.created_at)}
        modifiedTime={formatDateISO(post.updated_at)}
        author="Omniflow.id Team"
        section="Business Technology"
        tags={post.meta_keywords.split(', ')}
      />
      <StructuredData 
        type="Article" 
        data={{
          headline: post.title,
          description: post.meta_description,
          image: post.banner_url,
          publishedTime: formatDateISO(post.created_at),
          modifiedTime: formatDateISO(post.updated_at),
          keywords: post.meta_keywords,
          wordCount: post.content.split(' ').length,
          content: post.content,
          section: "Business Technology"
        }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section-hero">
          <div className="container-enterprise">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t('blog.backToBlog')}
              </Link>
              
              <div className="card-enterprise p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50" />
                <div className="relative">
                  <div className="flex items-center text-enterprise-muted space-x-6 mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{formatDate(post.created_at)}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{Math.ceil(post.content.split(' ').length / 200)} {t('blog.readingTime')}</span>
                    </div>
                    <div className="flex items-center">
                      <Tag className="h-4 w-4 mr-2" />
                      <span>{post.meta_keywords.split(', ')[0]}</span>
                    </div>
                  </div>
                  <h1 className="text-enterprise-primary mb-6 leading-tight">
                    {post.title}
                  </h1>
                  <p className="text-xl text-enterprise-secondary">
                    {post.meta_description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="section-enterprise bg-white">
          <div className="container-enterprise">
            <div className="max-w-4xl mx-auto">
              <img
                src={post.banner_url}
                alt={post.title}
                className="w-full h-96 object-cover rounded-2xl shadow-enterprise-lg"
              />
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-enterprise gradient-secondary">
          <div className="container-enterprise">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Main Content */}
                <article className="lg:col-span-3">
                  <div className="card-enterprise p-10">
                    <div className="prose prose-lg max-w-none">
                      <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        components={{
                          h1: ({children}) => <h1 className="text-3xl font-bold text-enterprise-primary mb-6 mt-8 first:mt-0">{children}</h1>,
                          h2: ({children}) => <h2 className="text-2xl font-bold text-enterprise-primary mb-4 mt-8">{children}</h2>,
                          h3: ({children}) => <h3 className="text-xl font-bold text-enterprise-primary mb-3 mt-6">{children}</h3>,
                          p: ({children}) => <p className="text-enterprise-secondary mb-4 leading-relaxed">{children}</p>,
                          ul: ({children}) => <ul className="list-disc list-inside mb-4 space-y-2 text-enterprise-secondary">{children}</ul>,
                          ol: ({children}) => <ol className="list-decimal list-inside mb-4 space-y-2 text-enterprise-secondary">{children}</ol>,
                          li: ({children}) => <li className="leading-relaxed">{children}</li>,
                          blockquote: ({children}) => (
                            <blockquote className="border-l-4 border-blue-500 pl-6 py-4 mb-6 bg-blue-50 italic text-enterprise-secondary rounded-r-lg">
                              {children}
                            </blockquote>
                          ),
                          code: ({children}) => (
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
                              {children}
                            </code>
                          ),
                          pre: ({children}) => (
                            <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto mb-6">
                              {children}
                            </pre>
                          )
                        }}
                      >
                        {post.content}
                      </ReactMarkdown>
                    </div>

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                      <h4 className="text-lg font-bold text-enterprise-primary mb-4">{t('blog.relatedTopics')}</h4>
                      <div className="flex flex-wrap gap-3">
                        {post.meta_keywords.split(', ').map((keyword, index) => (
                          <span 
                            key={index} 
                            className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>

                {/* Sidebar */}
                <aside className="lg:col-span-1">
                  <div className="sticky top-24 space-y-6">
                    {/* Share Section */}
                    <div className="card-enterprise p-6">
                      <h4 className="text-lg font-bold text-enterprise-primary mb-4 flex items-center">
                        <Share2 className="h-5 w-5 mr-2" />
                        {t('blog.shareArticle')}
                      </h4>
                      <div className="space-y-3">
                        <button
                          onClick={() => handleShare('facebook')}
                          className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
                        >
                          <Facebook className="h-4 w-4 mr-2" />
                          Facebook
                        </button>
                        <button
                          onClick={() => handleShare('twitter')}
                          className="w-full flex items-center justify-center px-4 py-3 bg-sky-500 text-white rounded-xl hover:bg-sky-600 transition-colors font-medium"
                        >
                          <Twitter className="h-4 w-4 mr-2" />
                          Twitter
                        </button>
                        <button
                          onClick={() => handleShare('linkedin')}
                          className="w-full flex items-center justify-center px-4 py-3 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-colors font-medium"
                        >
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </button>
                      </div>
                    </div>

                    {/* Article Info */}
                    <div className="card-enterprise p-6">
                      <h4 className="text-lg font-bold text-enterprise-primary mb-4">{t('blog.articleDetails')}</h4>
                      <div className="space-y-4 text-sm">
                        <div>
                          <span className="font-semibold text-enterprise-primary">{t('blog.published')}</span>
                          <p className="text-enterprise-secondary">{formatDate(post.created_at)}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-enterprise-primary">{t('blog.lastUpdated')}</span>
                          <p className="text-enterprise-secondary">{formatDate(post.updated_at)}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-enterprise-primary">{t('blog.readingTimeLabel')}</span>
                          <p className="text-enterprise-secondary">{Math.ceil(post.content.split(' ').length / 200)} {t('blog.minutes')}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-enterprise-primary">{t('blog.wordCount')}</span>
                          <p className="text-enterprise-secondary">{post.content.split(' ').length.toLocaleString()} {t('blog.words')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-enterprise gradient-dark text-white">
          <div className="container-enterprise text-center">
            <h2 className="text-white mb-6">
              {t('blog.cta.title')}
            </h2>
            <p className="text-blue-100 mb-12 max-w-3xl mx-auto text-xl">
              {t('blog.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-cta-light">
                {t('blog.cta.consultation')}
              </button>
              <Link to="/blog" className="btn-cta-outline">
                {t('blog.cta.readMore')}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}