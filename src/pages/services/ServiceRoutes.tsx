import React, { useMemo } from 'react';
import { useParams } from 'react-router';
import WrapContainer from '~/components/commons/WrapContainer';
import DirectALinerPage from '~/pages/services/DirectALinerPage';
type Props = {};
type ServiceType = 'direct';

const SERVICE_TYPE_COMPONENT_MAP = {
  direct: DirectALinerPage,
};

const ServiceRoutes = (props: Props) => {
  const params = useParams();
  const { serviceType } = params as { serviceType: ServiceType };

  const ServiceTypeComponent = useMemo(
    () => SERVICE_TYPE_COMPONENT_MAP[serviceType],
    [serviceType],
  );

  return (
    <WrapContainer>
      <ServiceTypeComponent />
    </WrapContainer>
  );
};

export default ServiceRoutes;
