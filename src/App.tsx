import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout/Layout';
import { CourseDashboard } from '@/pages/CourseDashboard/CourseDashboard';
import { Home } from '@/pages/Home/Home';
import { ModulePage } from '@/pages/Module/Module';
import { LessonPage } from '@/pages/Lesson/Lesson';
import { NotFound } from '@/components/NotFound/NotFound';
import { Login } from '@/pages/Login/Login';
import { useMsal } from '@/MsalProvider';

export function App() {
  const { accounts, inProgress } = useMsal();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(accounts.length > 0);
  }, [accounts]);

  if (inProgress) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <p>Loading…</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <Routes>
      <Route index element={<CourseDashboard />} />
      <Route path="course/:courseId" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="day/:dayId/module/:moduleId" element={<ModulePage />} />
        <Route path="day/:dayId/module/:moduleId/lesson/:lessonId" element={<LessonPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
