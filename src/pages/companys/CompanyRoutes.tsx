import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router';
import WrapContainer from '~/components/commons/WrapContainer';

import IntroducePage from '~/pages/companys/IntroducePage';
import CompanyIntroducePage from '~/pages/companys/CompanyIntroducePage';
import ContactPage from '~/pages/companys/ContactPage';

type Props = {};

type CompanyType = 'introduce' | 'company_introduce' | 'contact';

const COMPANY_TYPE_COMPONENT_MAP = {
  introduce: IntroducePage,
  company_introduce: CompanyIntroducePage,
  contact: ContactPage,
};

export default function CompanyRoutes(props: Props) {
  const params = useParams();
  const { companyType } = params as { companyType: CompanyType };

  const CompanyTypeComponent = useMemo(
    () => COMPANY_TYPE_COMPONENT_MAP[companyType ?? 'introduce'],
    [companyType],
  );

  return (
    <WrapContainer>
      <CompanyTypeComponent />
    </WrapContainer>
  );
}
