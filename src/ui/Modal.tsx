import {Dispatch, memo, SetStateAction, useEffect, useRef, useState} from "react";
import styled, {createGlobalStyle, keyframes} from "styled-components";
import {Transition} from "react-transition-group";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {Button} from "./Buttons";
import {Form} from "./Form";


interface IModalProps {
  value?: boolean;
  setValue?: Dispatch<SetStateAction<boolean>>;
  text?: string | null;
  order?: boolean;
}


export const Modal = memo(({setValue, text, order}: IModalProps) => {
  const outClickRef = useRef<HTMLDivElement | null>(null);
  const [modal, setModal] = useState<boolean>(false);
  
  const handleExit = () => {
    setValue && setTimeout(() => setValue(false), 300);
    setModal(false);
  };
  
  useEffect(() => {
    setModal(true);
    const outsideClick = (event: any) => {
      event?.stopPropagation();
      if (!outClickRef.current?.contains(event.path?.[0] || event.target)) {
        setValue && setTimeout(() => setValue(false), 300);
        setModal(false);
        
        
      }
    };
    document.addEventListener("click", outsideClick);
    
    const keydown = (event: any) => {
      if (event.key === "Escape" || event.key === "Esc") {
        setModal(false);
      }
    };
    document.addEventListener("keydown", keydown);
    
    return () => {
      document.removeEventListener("keydown", keydown);
      document.removeEventListener("click", outsideClick);
      
    };
  }, [setValue]);
  
  return (
    <>
      {modal && <Lock/>}
      <Transition in={modal} timeout={300} unmountOnExit mountOnEnter>
        {(state) => (
          <StyledTest>
            <BG className={state}/>
            
            <ModalStyle className={state} ref={outClickRef}>
              {!order && (
                <ButtonWrapper><Button onClick={handleExit} cancel>
                  <IconCancel/>
                </Button> </ButtonWrapper>
              )}
              
              
              <FormWrapper>
                {order ? <Form setModal={setModal} setValue={setValue}/> : <>
                  <Title>{!!text && text}</Title>
                  <Text>Данного раздела пока-что нет, но скоро он появится :)</Text>
                  <Button onClick={handleExit} secondary>Закрыть</Button>
                </>}
              </FormWrapper>
            </ModalStyle>
          </StyledTest>
        )}
      </Transition>
    </>
  );
});
const Text = styled.p`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #4F86F7;
  margin: 12px 0 26px 0;
`
const Title = styled.p`
  font-family: Montserrat,sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #323232;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`

const show = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledTest = styled.div`
  .entering {
    animation: ${show} 300ms forwards;
  }

  .exiting {
    animation: ${show} 300ms reverse;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: auto;
  flex: 1;
  color: black;
`;

const ModalStyle = styled.div`
  padding: 10px 10px 10px 70px;
  position: fixed;
  border-radius: 20px;
  border: 2px solid #E24666;
  box-shadow: 0 1px 4px rgba(103, 132, 162, 0.16), 0 4px 16px -2px rgba(103, 132, 162, 0.32);
  z-index: 999999;
  //width: 400px;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;


const IconCancel = styled(FontAwesomeIcon).attrs({icon: faTimes})`
  font-size: 16px;
`;

const BG = styled.div`
  z-index: 9998;
  position: absolute;
  //top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;


const Lock = createGlobalStyle`
  body {
    overflow: hidden !important;

  }
`
