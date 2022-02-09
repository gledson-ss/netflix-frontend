import React, { useEffect, useState, useRef, FormEvent } from "react";

import * as St from "./styles";

const Input: React.FC = () => {
  const ref = useRef();
  const [inputValue, setInputValue] = useState("");
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    const handleClickedOutside = (event: FormEvent<EventTarget>) => {
      if (showInput && ref.current && !ref.current.contains(event.target)) {
        if (inputValue.length === 0) {
          setShowInput(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickedOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickedOutside);
    };
  });

  return (
    <St.Container>
      <St.Content>
        {showInput ? (
          <St.ContainerInput show={showInput} ref={ref}>
            <St.SearchIcon />
            <St.Input
              placeholder="Títulos, gente e gêneros"
              onChange={(e) => setInputValue(e.currentTarget.value)}
              value={inputValue}
            />
            <St.ClearIconContainer onClick={() => setInputValue("")}>
              {inputValue.length > 0 && <St.ClearIcon />}
            </St.ClearIconContainer>
          </St.ContainerInput>
        ) : (
          <St.SearchIconFirst onClick={() => setShowInput(true)} />
        )}
      </St.Content>
    </St.Container>
  );
};

export default Input;
