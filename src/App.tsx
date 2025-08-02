
import { useState } from 'react';
import { CustomThemeProvider } from './theme';
import { Layout } from './components';
import { Dashboard } from './components/dashboard/Dashboard';
import { StockList } from './components/stocks/StockList';

type CurrentView = 'dashboard' | 'stocks';

function App() {
  const [currentView, setCurrentView] = useState<CurrentView>('dashboard');

  const handleNavigateToStocks = () => {
    setCurrentView('stocks');
  };

  const handleNavigateToDashboard = () => {
    setCurrentView('dashboard');
  };

  return (
    <CustomThemeProvider>
      <Layout 
        currentView={currentView}
        onNavigateToDashboard={handleNavigateToDashboard}
        onNavigateToStocks={handleNavigateToStocks}
      >
        {currentView === 'dashboard' && (
          <Dashboard onNavigateToStocks={handleNavigateToStocks} />
        )}
        {currentView === 'stocks' && <StockList onNavigateBack={handleNavigateToDashboard} />}
      </Layout>
    </CustomThemeProvider>
  );
}

export default App;