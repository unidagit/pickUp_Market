import { SellerNavBar } from "../../../components/navBar";
import { ProductInput, Textarea } from "../../../components/inputs";
import * as S from "./style";
import Upload from "../../../assets/upload.png";
import { FieldValues, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Button from "../../../components/buttons";
import Label from "../../../components/atoms/label";
import useProductUploadQuery from "../../../hooks/mutations/useProductUploadQuery";
import { useLocation, useParams } from "react-router-dom";
import useProductEditQuery from "../../../hooks/mutations/useProductEditQuery";

function ProductUploadPage() {
  const [preview, setPreview] = useState("");
  const [currentTab, setTab] = useState(1);
  const [shipping, setShipping] = useState("PARCEL");
  const { postProduct } = useProductUploadQuery();
  const { editProduct } = useProductEditQuery();
  const { handleSubmit, register, setValue } = useForm();
  const { type } = useParams();
  const location = useLocation();
  const state = location.state;
  const [productId, setProductId] = useState();

  useEffect(() => {
    if (type === "edit") {
      if (state.shipping_method === "DELIVERY") {
        setTab(2);
      }

      setProductId(state.product_id);
      setPreview(state.image);
      setValue("product_name", state.product_name);
      setValue("price", state.price);
      setValue("shipping_fee", state.shipping_fee);
      setValue("product_info", state.product_info);
      setValue("stock", state.stock);
    }
  }, [type, state, setValue, productId]);

  const handleImage = (e: any) => {
    if (e.target.files) {
      setValue("image", e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
      URL.revokeObjectURL(preview);
      // console.log(e.target.files[0]);
    }
  };

  const menuArr = [
    { name: "택배, 소포, 등기", id: 1 },
    { name: "직접배송(화물배달)", id: 2 },
  ];

  const handleSelectBtn = (id: number) => {
    setTab(id);
  };

  useEffect(() => {
    if (currentTab === 1) {
      setShipping("PARCEL");
      return;
    }
  }, [currentTab]);

  const onSubmit = async (formData: FieldValues) => {
    if (type === "upload") {
      formData.shipping_method = shipping;
      postProduct(formData);
    } else if (type === "edit") {
      editProduct({ formData: formData, product_id: Number(productId) });
    }
  };

  return (
    <>
      <SellerNavBar />
      <S.Wrapper>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.UploadContainer>
            <S.InputBox>
              <Label htmlFor="image">
                상품이미지
                <S.ImagePreviewBox>
                  <S.Image src={preview ? preview : Upload} alt="상품이미지" />
                </S.ImagePreviewBox>
              </Label>
              <S.FileInput
                id="image"
                type="file"
                {...(register("image"),
                {
                  onChange: handleImage,
                })}
              />
            </S.InputBox>

            <S.UploadBox>
              <S.InputBox>
                <Label htmlFor="product_name">상품명</Label>
                <ProductInput
                  id="product_name"
                  type="text"
                  width="100%"
                  register={register("product_name")}
                />
              </S.InputBox>

              <S.InputBox>
                <Label htmlFor="price">판매가</Label>
                <ProductInput
                  id="price"
                  type="number"
                  unit="원"
                  register={register("price")}
                />
              </S.InputBox>

              <S.InputBox>
                <Label htmlFor="delivery">배송방법</Label>
                <S.ButtonBox>
                  {menuArr.map((btn) => (
                    <Button
                      type="button"
                      key={btn.id}
                      fontSize="16px"
                      fontWeight="400"
                      width="220px"
                      height="54px"
                      fontColor={currentTab === btn.id ? "#FFFFFF" : "black"}
                      backgroundColor={
                        currentTab === btn.id ? "#21BF48" : "#FFFFFF"
                      }
                      border={
                        currentTab === btn.id ? "none" : "1px solid #C4C4C4"
                      }
                      onClick={() => handleSelectBtn(btn.id)}
                    >
                      {btn.name}
                    </Button>
                  ))}
                </S.ButtonBox>
              </S.InputBox>

              <S.InputBox>
                <Label htmlFor="shipping_fee">기본 배송비</Label>
                <ProductInput
                  id="shipping_fee"
                  type="number"
                  unit="원"
                  register={register("shipping_fee")}
                />
              </S.InputBox>

              <S.InputBox>
                <Label htmlFor="stock">재고</Label>
                <ProductInput
                  id="stock"
                  type="number"
                  unit="개"
                  min="1"
                  register={register("stock")}
                />
              </S.InputBox>
            </S.UploadBox>
          </S.UploadContainer>

          <S.InputBox>
            <Label>상품 상세 정보</Label>
            <Textarea register={register("product_info")} />
          </S.InputBox>

          <Button
            fontSize="16px"
            fontWeight="400"
            width="220px"
            height="54px"
            fontColor="black"
            backgroundColor="#21BF48"
          >
            저장
          </Button>
        </S.Form>
      </S.Wrapper>
    </>
  );
}

export default ProductUploadPage;
