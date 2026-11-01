/**
 * NETWORD – Từ điển ngôn ngữ trên không gian mạng dành cho học sinh THPT
 * Khẩu hiệu: "Hiểu đúng ngôn từ – Giao tiếp văn minh"
 * Chuyên đề 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại (Ngữ văn 11)
 * GV phát triển: Thầy Trầm Thanh Tuấn - Trường THCS và THPT Long Hiệp
 */

import React, { useState, useEffect } from 'react';
import { ActiveTab, WordEntry, WordCategory } from './types';
import { dictionaryService } from './services/supabaseClient';
import { AuthProvider, useAuth } from './services/authContext';
import { ThemeProvider, useTheme } from './services/themeContext';
import { Header } from './components/common/Header';
import { BottomNav } from './components/common/BottomNav';
import { Footer } from './components/common/Footer';
import { DisclaimerBanner } from './components/common/DisclaimerBanner';
import { OfflineBanner } from './components/common/OfflineBanner';
import { AccessDeniedView } from './components/common/AccessDeniedView';
import { AuthModal } from './components/auth/AuthModal';
import { HomeView } from './components/home/HomeView';
import { DictionaryView } from './components/dictionary/DictionaryView';
import { WordDetailView } from './components/dictionary/WordDetailView';
import { SuggestWordView } from './components/suggest/SuggestWordView';
import { ChallengesView } from './components/challenges/ChallengesView';
import { ProfileView } from './components/profile/ProfileView';
import { EditorView } from './components/editor/EditorView';
import { AdminView } from './components/admin/AdminView';
import { RoleTestSuiteView } from './components/testing/RoleTestSuiteView';
import { AppropriateExpressionView } from './components/expression/AppropriateExpressionView';
import { ProjectAboutView } from './components/about/ProjectAboutView';

function AppContent() {
  const { currentUser } = useAuth();
  const { toggleTheme } = useTheme();

  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedWordId, setSelectedWordId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<WordCategory | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [words, setWords] = useState<WordEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadWords();
  }, []);

  const loadWords = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await dictionaryService.getWords();
      setWords(data);
    } catch (err: any) {
      console.error('Failed to load words', err);
      setError('Đã có lỗi xảy ra khi tải dữ liệu từ điển. Vui lòng bấm thử lại!');
    } finally {
      setLoading(false);
    }
  };

  const handleNavigate = (tab: ActiveTab, wordId?: string) => {
    setActiveTab(tab);
    if (wordId) {
      setSelectedWordId(wordId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (category: WordCategory) => {
    setSelectedCategory(category);
    setSearchQuery('');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedCategory(null);
  };

  const handleToggleLike = async (id: string) => {
    const updatedCount = await dictionaryService.toggleLike(id);
    setWords((prev) =>
      prev.map((w) => (w.id === id ? { ...w, likesCount: updatedCount } : w))
    );
  };

  // Global Keyboard Shortcuts (1-6 for main tabs, T for theme)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement instanceof HTMLInputElement ||
        document.activeElement instanceof HTMLTextAreaElement ||
        document.activeElement instanceof HTMLSelectElement
      ) {
        return;
      }

      if (e.key === '1') handleNavigate('home');
      else if (e.key === '2') handleNavigate('dictionary');
      else if (e.key === '3') handleNavigate('expression');
      else if (e.key === '4') handleNavigate('suggest');
      else if (e.key === '5') handleNavigate('challenges');
      else if (e.key === '6') handleNavigate('role_tests');
      else if ((e.key === 't' || e.key === 'T') && !e.ctrlKey && !e.metaKey) {
        toggleTheme();
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [toggleTheme]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans text-slate-900 dark:text-slate-100 selection:bg-indigo-600 selection:text-white transition-colors">
      {/* Educational Disclaimer Banner */}
      <DisclaimerBanner />

      {/* Global Navigation Header with Slogan and 4-Role Controls */}
      <Header activeTab={activeTab} onNavigate={handleNavigate} />

      {/* Main Content Area with Strict Route Guards */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 pt-6">
        {activeTab === 'home' && (
          <HomeView
            words={words}
            onNavigate={handleNavigate}
            onSelectCategory={handleSelectCategory}
            onSearch={handleSearch}
          />
        )}

        {activeTab === 'dictionary' && (
          <DictionaryView
            words={words}
            loading={loading}
            error={error}
            onRefresh={loadWords}
            onNavigate={handleNavigate}
            initialCategory={selectedCategory}
            initialSearch={searchQuery}
            onToggleLike={handleToggleLike}
          />
        )}

        {activeTab === 'detail' && (
          <WordDetailView
            wordId={selectedWordId}
            words={words}
            onNavigate={handleNavigate}
            onToggleLike={handleToggleLike}
          />
        )}

        {activeTab === 'suggest' && (
          <SuggestWordView onNavigate={handleNavigate} />
        )}

        {activeTab === 'challenges' && (
          <ChallengesView onNavigate={handleNavigate} />
        )}

        {activeTab === 'expression' && (
          <AppropriateExpressionView onNavigate={handleNavigate} />
        )}

        {activeTab === 'profile' && (
          <ProfileView words={words} onNavigate={handleNavigate} />
        )}

        {activeTab === 'role_tests' && (
          <RoleTestSuiteView />
        )}

        {/* ROUTE GUARD 1: Editor Route - Only 'editor' or 'admin' */}
        {activeTab === 'editor' && (
          currentUser.role === 'editor' || currentUser.role === 'admin' ? (
            <EditorView
              onNavigate={handleNavigate}
              onRefreshWords={loadWords}
            />
          ) : (
            <AccessDeniedView
              attemptedTab="editor"
              requiredRoles={['editor', 'admin']}
              onNavigate={handleNavigate}
            />
          )
        )}

        {/* ROUTE GUARD 2: Admin Route - Strictly only 'admin' */}
        {activeTab === 'admin' && (
          currentUser.role === 'admin' ? (
            <AdminView
              words={words}
              onRefreshWords={loadWords}
              onNavigate={handleNavigate}
            />
          ) : (
            <AccessDeniedView
              attemptedTab="admin"
              requiredRoles={['admin']}
              onNavigate={handleNavigate}
            />
          )
        )}

        {/* TAB: Project About, Share QR & Release Guide */}
        {activeTab === 'about' && (
          <ProjectAboutView onNavigate={handleNavigate} />
        )}
      </main>

      {/* Mobile-First Bottom Navigation Bar */}
      <BottomNav activeTab={activeTab} onNavigate={handleNavigate} />

      {/* Global Auth Modal for Sign in / Register / Recovery */}
      <AuthModal />

      {/* Offline Connectivity Notification Banner */}
      <OfflineBanner />

      {/* Comprehensive School & Curriculum Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}
