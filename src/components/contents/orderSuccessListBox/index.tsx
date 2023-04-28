import { OrderSuccess, OrderSuccessList } from '../../../common/types/api';
import OrderSuccessListItem from '../orderSuccessListItem';
import * as S from './style';

function OrderSuccessListBox({ orderList }: any) {
  return (
    <>
      <S.Table>
        <S.Text>주문번호</S.Text>
        <S.Text>받는사람</S.Text>
        <S.Text>받는사람 연락처</S.Text>
        <S.Text>배송메시지</S.Text>
        <S.Text>결제방법</S.Text>
        <S.Text>결제금액</S.Text>
      </S.Table>
      {orderList &&
        orderList.results.map((item: OrderSuccessList) => (
          <OrderSuccessListItem {...item} />
        ))}
    </>
  );
}

export default OrderSuccessListBox;
