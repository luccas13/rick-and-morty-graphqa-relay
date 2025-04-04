import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import relayEnvironment from './graphql/RelayEnvironment';
import { RelayEnvironmentProvider } from 'react-relay';
import './main.css';
import { BrowserRouter } from 'react-router';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </RelayEnvironmentProvider>
  </StrictMode>
);
