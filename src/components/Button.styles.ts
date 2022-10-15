import styled, {css} from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps{
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border-radius: 4px;
  border: none;
  margin-right: 4px;
  padding: 4px 8px 4px 8px ;
  color: white;

  ${props => {
    return css`
      background-color: ${buttonVariants[props.variant]}
      `
  }}
`