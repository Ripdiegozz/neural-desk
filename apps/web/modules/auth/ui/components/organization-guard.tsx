'use client';

import React from 'react';
import { useOrganization } from '@clerk/nextjs';
import { AuthLayout } from '@/modules/auth/ui/layouts/auth-layout';
import { OrgSelectionView } from '@/modules/auth/ui/views/org-select-view';

const OrganizationGuard = ({ children }: { children: React.ReactNode }) => {
  const { organization } = useOrganization();

  // If no organization is selected, redirect to the auth layout
  if (!organization) {
    return (
      <AuthLayout>
        <OrgSelectionView />
      </AuthLayout>
    );
  }

  return <>{children}</>;
};

export default OrganizationGuard;
