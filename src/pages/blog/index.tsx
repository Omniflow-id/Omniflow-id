import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BlogPost, BlogResponse } from '../../types/blog';
import BlogCard from './components/BlogCard';
import { Loader2, BookOpen, TrendingUp, Users, Award } from 'lucide-react';

export default function BlogPage() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('https://824f-103-163-240-34.ngrok-free.app/api/blogs', {
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
        
        const data: BlogResponse = await response.json();
        
        if (data.success && data.data && data.data.blogs) {
          setPosts(data.data.blogs);
        } else {
          throw new Error('Invalid API response structure');
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An error occurred while fetching blogs';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section-hero">
          <div className="container-enterprise">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                <BookOpen className="h-4 w-4 mr-2" />
                {t('blog.badge')}
              </div>
              <h1 className="text-enterprise-primary mb-6">
                {t('blog.title')}
              </h1>
              <p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
                {t('blog.subtitle')}
              </p>
            </div>
          </div>
        </section>

        <div className="section-enterprise">
          <div className="container-enterprise">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <Loader2 className="h-12 w-12 animate-spin mx-auto mb-6 text-blue-600" />
                <p className="text-xl text-enterprise-secondary">{t('blog.loading')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section-hero">
          <div className="container-enterprise">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                <BookOpen className="h-4 w-4 mr-2" />
                {t('blog.badge')}
              </div>
              <h1 className="text-enterprise-primary mb-6">
                {t('blog.title')}
              </h1>
              <p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
                {t('blog.subtitle')}
              </p>
            </div>
          </div>
        </section>

        <div className="section-enterprise">
          <div className="container-enterprise">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center max-w-md">
                <div className="card-enterprise p-8">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-enterprise-primary mb-4">{t('blog.error.title')}</h3>
                  <p className="text-enterprise-secondary mb-6">{error}</p>
                  <button 
                    onClick={() => window.location.reload()} 
                    className="btn-primary"
                  >
                    {t('blog.error.tryAgain')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-hero">
        <div className="container-enterprise">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <BookOpen className="h-4 w-4 mr-2" />
              {t('blog.badge')}
            </div>
            <h1 className="text-enterprise-primary mb-6">
              {t('blog.title')}
            </h1>
            <p className="text-xl text-enterprise-secondary max-w-3xl mx-auto mb-12">
              {t('blog.subtitle')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="card-enterprise p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-enterprise-primary mb-2">{t('blog.features.trends.title')}</h3>
                <p className="text-enterprise-muted text-sm">{t('blog.features.trends.description')}</p>
              </div>
              <div className="card-enterprise p-6 text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-enterprise-primary mb-2">{t('blog.features.practices.title')}</h3>
                <p className="text-enterprise-muted text-sm">{t('blog.features.practices.description')}</p>
              </div>
              <div className="card-enterprise p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-enterprise-primary mb-2">{t('blog.features.stories.title')}</h3>
                <p className="text-enterprise-muted text-sm">{t('blog.features.stories.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="section-enterprise gradient-secondary">
        <div className="container-enterprise">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <div className="card-enterprise p-12 max-w-md mx-auto">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-enterprise-primary mb-4">{t('blog.comingSoon.title')}</h3>
                <p className="text-enterprise-secondary">{t('blog.comingSoon.message')}</p>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-enterprise-primary mb-4">{t('blog.latest')}</h2>
                <p className="text-enterprise-secondary">{t('blog.latestSubtitle')}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </>
          )}
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
              {t('common.scheduleDemo')}
            </button>
            <button className="btn-cta-outline">
              {t('blog.cta.readMore')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}