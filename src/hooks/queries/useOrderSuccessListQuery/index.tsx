import { useQuery } from '@tanstack/react-query';
import { apiGetOrderSuccessList } from '../../../services/api';
import { OrderSuccess } from '../../../common/types/api';

export default function useOrderSuccessListQuery() {
  const { data: orderList, isLoading } = useQuery<OrderSuccess>(
    ['orderSuccessList'],
    () => apiGetOrderSuccessList()
  );
  console.log(orderList);

  return { orderList, isLoading };
}
