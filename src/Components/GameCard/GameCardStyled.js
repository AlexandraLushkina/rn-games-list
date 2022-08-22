import styled from 'styled-components/native';

export const Card = styled.View`
  margin: 15px;
  background-color: #6C6B6D;
  border-radius: 12px;
  overflow: hidden;
`;

export const Info = styled.View`
  padding: 16px;
`;

export const Texts = styled.Text`
  font-size: 14px;
  color: white;
`;

export const Title = styled(Texts)`
  margin-top: 8px;
  margin-bottom: 8px;
  padding-bottom: 2px;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
`;

export const Poster = styled.Image`
  width: 100%;
  height: 170px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const Rating = styled(Texts)`
  flex: 0 1 auto;
`;

export const Released = styled(Texts)`
`;
