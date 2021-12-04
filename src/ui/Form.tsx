import {useForm} from "react-hook-form";
import styled from "styled-components/macro";
import {Button} from "./Buttons";
import Img from '../static/formimg.png'
import {Dispatch, FC, SetStateAction} from "react";
import {css} from "styled-components";


export interface InputsSingUp {
  Name?: string;
  Phone: string;
  Address: string;
  APhone?: string;
}

interface FormProp {
  setValue?: Dispatch<SetStateAction<boolean>>;
  setModal?: Dispatch<SetStateAction<boolean>>;
  
}

export const ErrorMessage: FC = ({children}) => {
  return <ErrorText>{children}</ErrorText>;
};

const ErrorText = styled.div`
  position: absolute;
  font-size: 12px;
  left: 0;
  bottom: -10px;
  color: #E24666
`;


export const Form = ({setValue, setModal}: FormProp) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<InputsSingUp>({mode: "onChange"});
  
  const confirm = (data: InputsSingUp) => {
    return window.confirm(`Ваше имя => ${data.Name}. Ваш номер телефона => ${data.Phone}. Адре - ${data.Address}. Телефон адресата - ${data.APhone}`)
    
  }
  
  const onSubmit = (data: InputsSingUp) => {
    confirm(data)
    setModal && setModal(false)
    setValue && setTimeout(() => setValue(false), 300);
    
    
  };
  
  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <InputWrapper>
          <Title>Закажи букет прямо сейчас!</Title>
          <WrapperForErrow>
            <Input
              $error={!!errors.Name}
              placeholder="Введите своё имя"
              {...register("Name", {required: true})}
            />
            {errors.Name && <ErrorMessage>Поле с вашим именем обязательно</ErrorMessage>}
          </WrapperForErrow>
          <WrapperForErrow>
            <Input $error={!!errors.Phone} placeholder="Введите ваш номер телефона"
                   {...register("Phone", {required: true})}
            />
            {errors.Phone && <ErrorMessage>Поле с вашим именем обязательно</ErrorMessage>}
          </WrapperForErrow>
          <WrapperForErrow>
            <Input $error={!!errors.Address} placeholder="Введите адрес "
                   {...register("Address", {required: true})}
            />
            {errors.Address && <ErrorMessage>Поле с вашим именем обязательно</ErrorMessage>}
          </WrapperForErrow>
          
          <WrapperForErrow>
            <Input $error={!!errors.APhone} placeholder="Введите номер телефона адресата"
                   {...register("APhone", {required: true})}
            />
            {errors.APhone && <ErrorMessage>Поле с вашим именем обязательно</ErrorMessage>}
          </WrapperForErrow>
          <Button>Заказать Букет</Button>
        </InputWrapper>
        <img src={Img} alt="flower"/>
      </Wrapper>
      
      
      <ButtonWrapper>
      </ButtonWrapper>
    </FormStyle>
  );
};

const WrapperForErrow = styled.div`
  position: relative;
`

const Wrapper = styled.div`
  display: flex;
  gap: 100px;
`

const Title = styled.p`
  margin-top: 60px;
  margin-bottom: 30px;
  font-family: Yeseva One, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  color: #E24666;
  white-space: nowrap;
  text-wrap: none`


const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  gap: 55px;
  max-width: 550px;
  min-width: 300px;
  width: content-box;
  flex: 1;`;


const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Input = styled.input<{ $error: boolean }>`
  padding-left: 2px;
  width: 100%;
  height: 30px;
  outline: none;
  margin-bottom: 5px;
  border: none;
  border-bottom: 1px solid #323232;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: #323232;
  max-width: 521px;
  ${({$error}) => $error && css`
    border-bottom-color: red;
  `}
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  //gap: 7px;
  margin: 0 auto;

  label {
    color: gray;
  }

`;
