import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  margin-top: 44px;
  max-width: 1280px;
`;

export const Form = styled.form``;

export const UploadContainer = styled.div`
  display: flex;
  flex: wrap;
  gap: 40px;
  width: 100%;
`;

export const UploadBox = styled.div`
  width: 100%;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const FileInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;

export const ImagePreviewBox = styled.div`
  width: 28.375rem;
  height: 28.375rem;
  cursor: pointer;
  background-color: ${(props) => props.theme.sub.lighter};
  border-radius: 5px;
  margin-top: 10px;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 28.375rem;
  height: 28.375rem;
  border-radius: 5px;
`;

export const ImageUploadBtn = styled.button`
  background-color: transparent;
`;

export const PhotoIcon = styled.img`
  width: 50px;
  width: 50px;
`;

export const EditorBox = styled.div`
  width: 100%;
  height: 700px;
  background-color: ${(props) => props.theme.sub.lighter};
  border-radius: 5px;
`;
