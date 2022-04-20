import React, { useMemo } from 'react';
import { useParams } from 'react-router';
import WrapContainer from '~/components/commons/WrapContainer';
import DirectALinerPage from '~/pages/services/DirectALinerPage';
type Props = {};
type ServiceType = 'direct';

const Service_TYPE_COMPONENT_MAP = {
  direct: DirectALinerPage,
};

const ServiceRoutes = (props: Props) => {
  const params = useParams();
  const { serviceType } = params as { serviceType: ServiceType };

  const ServiceTypeTypeComponent = useMemo(
    () => Service_TYPE_COMPONENT_MAP[serviceType],
    [serviceType],
  );

  return (
    <WrapContainer>
      <ServiceTypeTypeComponent />
    </WrapContainer>
  );
};

export default ServiceRoutes;
