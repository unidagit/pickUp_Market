import * as S from './style';
import { DefaultLayout } from '../_layouts';
import OrderSuccessListBox from '../../components/contents/orderSuccessListBox';
import useOrderSuccessListQuery from '../../hooks/queries/useOrderSuccessListQuery';

function OrderListPage() {
  const { orderList } = useOrderSuccessListQuery();

  console.log(orderList);
  return (
    <>
      <DefaultLayout>
        <S.Wrapper>
          <S.Container>
            <S.MainTitle>주문리스트</S.MainTitle>

            <OrderSuccessListBox orderList={orderList} />
          </S.Container>
        </S.Wrapper>
      </DefaultLayout>
      ;
    </>
  );
}

export default OrderListPage;
