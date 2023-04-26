# 픽업마켓

![무제-1](https://user-images.githubusercontent.com/102465469/234612465-52dcbb1b-eb73-4514-beec-49fd8e33fc59.jpg)

## 배포 URL

- URL : https://pick-up-market-syvl.vercel.app/
  <br>
- 구매자 계정

  - `ID`: pickup7
  - `PassWord`: !pick123

- 판매자 계정
  - `ID`: pickup8
  - `PassWord`: !pick456

<br>

## 프로젝트 소개

React + TypeScript + React-Query를 사용하여 CRUD 기능이 있는 쇼핑몰 서비스를 개발 했습니다.
판매자와 구매자를 구별하여 판매자가 상품을 등록, 판매하며 구매자는 구매하는 서비스입니다.
상품을 판매하려고 한다면 판매자로 로그인하여 상품 정보를 등록 및 수정할 수 있습니다. 판매자가 상품을 구매하는 것은 불가능합니다. 오픈마켓에 등록되어 있는 상품을 구매하고자 한다면 상품의 세부사항을 확인한 뒤, 장바구니에 넣어, 상품을 구매할 수 있습니다.<br>

<br>

## 구현 사항

### 1️⃣ Home

- react-lazy-load-image-component와 react-infinite-scroll-component 라이브러리를 홈 화면에서 데이터를 불러오는데 사용했습니다. 페이지 성능을 최적화하고, 이미지 로딩 속도를 개선하여 사용자 경험을 개선시켰습니다.
  ![screen-recording (14)](https://user-images.githubusercontent.com/102465469/234575989-48f57a43-df8d-4242-b302-c042c2c2a479.gif)

<br>

### 2️⃣ Login / Join

- React Hook Form 라이브러리를 사용하여 form을 관리했습니다. 이는 상태 관리를 용이하게 해주었을 뿐만 아니라, 내장된 유효성 검사 기능을 사용하여 검증 규칙을 구현할 수 있었습니다. 이로 인해 코드의 가독성과 유지보수성이 크게 향상되었습니다.
  ![screen-recording (15)](https://user-images.githubusercontent.com/102465469/234590345-d26276b8-e9b5-4dee-93c9-9ffc46209cb1.gif)

<br>

### 3️⃣ Detail / Cart

- Detail 페이지에서는 상품 가격, 실시간 재고, 그리고 택배 유형이 표시됩니다. 또한, 바로 구매 버튼과 장바구니 버튼은 각각 다른 역할을 수행합니다.
- Cart 페이지에서는 구매자가 담은 물건을 선택하여 주문할 수 있으며, 전체 삭제와 상품 개별 삭제가 가능합니다. 하단에는 체크한 상품을 기준으로 실시간으로 금액이 계산되어 보여집니다.
  ![screen-recording (16) (1)](https://user-images.githubusercontent.com/102465469/234595551-68c2dcd7-7bab-40f2-959a-c23cc55f13a1.gif)

<br>

### 4️⃣ Seller

- 판매자는 상품 등록, 수정, 삭제를 할 수 있습니다.
- queryClient.invalidateQueries()를 사용하여 서버에서 데이터가 변경되었을 때, 관련된 모든 쿼리를 쉽게 무효화하여 최신 데이터를 빠르게 가져올 수 있어 애플리케이션의 성능과 사용자 경험을 향상시켰습니다.
  ![screen-recording (14)](https://user-images.githubusercontent.com/102465469/234600277-046b5596-fac7-4d64-bf6f-61da89ab33df.gif)

<br>

## 프로젝트를 통해 경험한 것

· react-query 로직과 반복되는 로직을 커스텀 훅으로 분리하여 유지보수성 향상.<br>
· 사용자 경험 개선을 위해 image-lazy-load-component와 무한 스크롤을 도입하여 웹페이지 성능 개선.<br>
· 리액트 훅 폼을 이용하여 input 유효성 검사 기능을 구현.<br>
· 백엔드 개발자와 디자이너와 함께 협업하여 프로젝트를 수행하여 협업능력 강화.

<br>

## 추가 구현 사항

- alert창 지우고 모달창 구현.
- 반응형 구현.
