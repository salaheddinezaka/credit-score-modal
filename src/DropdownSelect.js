import React, { useCallback, useRef } from 'react'
import { useCombobox } from 'downshift'
import { useVirtual } from 'react-virtual'

import useFuzzy from './use-fuzzy'
import schools from './schools.json'

const menuStyles = {
  maxHeight: 250,
  overflowY: "scroll",
  backgroundColor: "#eee",
  padding: 0,
  listStyle: "none",
  position: "absolute",
  width: "100%"
}

const DropdownSelect = ({ value, setValue, placeholder = "Enter your school name" }) => {
  const { result, search } = useFuzzy(schools, {
    keys: ["school_name", "school_abv"]
  })

  const listRef = useRef()
  const rowVirtualizer = useVirtual({
    size: result.length,
    parentRef: listRef,
    estimateSize: useCallback(() => 30, []),
    overscan: 2
  })

  const itemToString = (item) => item ? item.school_name : ""

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    selectedItem
  } = useCombobox({
    itemToString,
    items: result,
    onInputValueChange: ({ inputValue }) => search(inputValue),
    onSelectedItemChange: ({ selectedItem }) => setValue(selectedItem?.item),
    selectedItem: value,
    scrollIntoView: () => { },
    onHighlightedIndexChange: ({ highlightedIndex }) => rowVirtualizer.scrollToIndex(highlightedIndex)
  })


  return (
    <div {...getComboboxProps()} className="dropdownContainer">
      <input {...getInputProps({
        placeholder,
        className: "dropdownInput"
      })} />
      <ul {...getMenuProps({
        ref: listRef,
        className: "dropdownList"
      })}>
        {isOpen && (
          <>
            <li key="total-size" style={{ height: rowVirtualizer.totalSize }} />
            {rowVirtualizer.virtualItems.map(virtualRow => {
              return <li key={`${result[virtualRow.index].item.id}${virtualRow.index}`}
                {...getItemProps({
                  index: virtualRow.index,
                  style: {
                    backgroundColor: highlightedIndex === virtualRow.index ? 'lightgray' : "inherit",
                    fontWeight: selectedItem && selectedItem.id === result[virtualRow.index].item.id ? "bold" : "normal",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: virtualRow.size,
                    transform: `translateY(${virtualRow.start}px)`
                  },
                  className: "dropdownItem"
                })}
              >
                {result[virtualRow.index].item.school_name}
              </li>
            })}
          </>
        )}
      </ul>
    </div>
  )
}

export default DropdownSelect