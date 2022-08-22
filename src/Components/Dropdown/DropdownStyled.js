import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  top: ${props => props.dropdownTop}px;
  left: ${props => props.dropdownLeft}px;
  background-color: #fff;
  shadow-color: #000000;
  shadow-radius: 4px;
  shadow-offset: 4px 0;
  shadow-opacity: 0.5;
  border-radius: 8px;
`;

export const OverlayedTouchable = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
`;

export const RowTouchable = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
`;

export const RowSafeView = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 5px;
`;

export const DropdownItem = styled(RowTouchable)`
  padding-horizontal: 10px;
  padding-vertical: 10px;
  border-bottom-width: 0.5px;
`;

export const TogglerButton = styled(RowTouchable)`
  align-items: center;
  margin: 10px;
  padding: 10px 16px;
  height: 35px;
  width: auto;
  background-color: hsla(0,0%,68%,.78);
  border-radius: 8px;
  font-size: 14px;
  color: #fff;
  z-index: 1;
`;
  
export const ButtonText = styled.Text`
  text-align: center;
  padding-right: 10px;
`;