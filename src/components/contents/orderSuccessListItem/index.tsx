import { OrderSuccessList } from '../../../common/types/api';
import * as S from './style';

function OrderSuccessListItem({
  order_number,
  receiver,
  receiver_phone_number,
  address_message,
  payment_method,
  total_price,
}: OrderSuccessList) {
  return (
    <S.Table>
      <S.Text>{order_number}</S.Text>
      <S.Text>{receiver}</S.Text>
      <S.Text>{receiver_phone_number}</S.Text>
      <S.Text>{address_message}</S.Text>
      <S.Text>{payment_method}</S.Text>
      <S.Text>{total_price}</S.Text>
    </S.Table>
  );
}

export default OrderSuccessListItem;
