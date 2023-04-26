import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiPostCart } from '../../../services/api';
import { useNavigate } from 'react-router';

export const useCartPostQuery = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: postCartList } = useMutation(
    (data: {
      product_id: number | undefined;
      quantity: number;
      check: boolean;
    }) => apiPostCart(data),
    {
      onSuccess() {
        alert('장바구니에 추가되었습니다.');
        navigate('/cart');
        queryClient.invalidateQueries(['cartList']);
      },
    }
  );

  return { postCartList };
};
