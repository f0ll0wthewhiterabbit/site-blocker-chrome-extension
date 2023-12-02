import { HomePage } from '@/pages/home.page';
import { AppProvider } from './app-providers';

export function App() {
  return (
    <AppProvider>
      <HomePage />
    </AppProvider>
  );
}
