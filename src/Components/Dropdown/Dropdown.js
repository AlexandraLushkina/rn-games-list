import React, { useState, useRef } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Text,
  Modal,
  FlatList,
  SafeAreaView,
} from 'react-native';

import {
  Container,
  OverlayedTouchable,
  RowSafeView,
  DropdownItem,
  TogglerButton,
  ButtonText,
} from './DropdownStyled';

const Dropdown = ({ startLabel, data, onSelect = () => {}, withChevron = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const DropdownButton = useRef();
  const [selected, setSelected] = useState(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [dropdownLeft, setDropdownLeft] = useState(0);

  const toggleDropdown = () => {
    isVisible ? setIsVisible(false) : openDropdown();
  };

  const openDropdown = () => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(Math.ceil(py + h));
      setDropdownLeft(Math.ceil((_px + _w) / 1.5));
    });
    setIsVisible(true);
  };

  const onItemPress = (item) => {
    setSelected(item);
    onSelect(item);
    setIsVisible(false);
  };

  const renderItem = ({ item }) => {
    if (item.icon) {
      return (
        <DropdownItem onPress={() => onItemPress(item)}>
          <Text>{item.label}</Text>
          <Icon type='font-awesome' name={item.icon}/>
        </DropdownItem>
      )
    }
    return (
      <DropdownItem onPress={() => onItemPress(item)}>
        <Text>{item.label}</Text>
      </DropdownItem>
    )
  };
  
  const renderDropdown = () => {
    if (isVisible) {
      return (
        <Modal visible={isVisible} transparent animationType="none">
          <OverlayedTouchable
            onPress={() => setIsVisible(false)}
          >
            <Container dropdownTop={dropdownTop} dropdownLeft={dropdownLeft}>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              /> 
            </Container>
          </OverlayedTouchable>
        </Modal>
      );
    }
    return;
  };

  const renderButtonText = () => {
    const findLabel = data.find(e => e.type === startLabel);
    const labelSelected = selected ? selected : findLabel ? findLabel : startLabel;
    if (labelSelected.icon) {
      return (
        <RowSafeView>
          <ButtonText>{labelSelected.label || labelSelected}</ButtonText>
          <Icon type='font-awesome' name={labelSelected.icon}/>
        </RowSafeView>
      );
    } else {
      return <ButtonText>{labelSelected.label || labelSelected}</ButtonText>
    }
  }

  return (
    <SafeAreaView>
      <TogglerButton
        ref={DropdownButton}
        onPress={toggleDropdown}
      >
        {renderDropdown()}
        {renderButtonText()}
        { withChevron ? (<Icon type='font-awesome' name='chevron-down'/>) : null }
      </TogglerButton>
    </SafeAreaView>
  );
};

export default Dropdown;
