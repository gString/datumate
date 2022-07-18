import styled from "styled-components";

export const Container = styled.div`
  border-radius: 20px;
  background-color: lightgray;
  border: 1px solid pink;
  padding: 20px;
`;

// ErrorDisplay
export const Display = styled(Container)`
  position: absolute;
  top: 0;
  right: 30px;
  left: 20em;
  height: 62px;
  display: flex;
  padding: 0 20px;
`;

export const Title   = styled.strong`
	font-size: 13px;
`;

export const ErrorsMsg  = styled.p`
	font-size: 12px;
  text-align: left;
`;

// ImportModal
export const Modal        = styled (Container)`
  width: 12em;
  margin-top: 30px;
  margin-left: 30px;
`;

export const InputWrapper = styled.label`
  cursor: pointer;
  display: block;
  background-color: #282c34;
  width: 12em;
  border-radius: 50px;
  padding: 2px;
  color: lightgray;
  
  &:hover {
    color: white;
  }
`;

export const HiddenInput = styled.input`
	display: none;
`;

export const StyledInput = styled.input`
  font-size: 13px;
  padding: 2px 8px;
  margin-left: 8px;
  border: 1px solid pink;
  border-radius: 8px;
  outline: none;
  height: 15px;
`;

export const EditInput = styled(StyledInput)`
	width: 80px;
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1 1 auto;
`;

export const EditLabel = styled(StyledLabel)`
  flex: 1 0 100px;
`;

export const EditButton = styled(InputWrapper)`
  height: 22px;
  width: 70px;
  margin-left: 8px;
  flex: 1 0 auto;
`;

export const Spacer = styled.div`
  flex: 1 0 auto;
`;

export const EditModal = styled(Display)`
  align-items: center;
  
  &:after {
	content: "Edit entry";
	font-size: 12px;
	position: absolute;
	top: 3px;
	left: 20px;
    border-bottom: 1px dotted green;
  }
`;