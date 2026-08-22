import React from 'react';
import { useSearchParams, Navigate } from 'react-router-dom';
import { weddingData } from '../../data/weddingData';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

/**
 * Route guard component that verifies the presence and validity
 * of the static access token (?token=...) before rendering protected portals.
 * Bounces unauthorized visitors immediately back to the main invitation page.
 */
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  if (!token || token !== weddingData.staticShareToken) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
