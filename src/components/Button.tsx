import React from 'react';
import styled from 'styled-components';

export enum ButtonType {
    Number,
    Service
}

type Props = React.HTMLProps<HTMLButtonElement> & {
    buttonType: ButtonType;
    label: string;
    position?: [y: number, x: number];
    height?: number;
    width?: number;
}

const StyledButton = styled.button`
    border: none;
    border-radius: 8px;
    font-size: 24px;
`;

const Button: React.FC<Props> = ({
    buttonType,
    label,
    position,
    height,
    width,
    onClick
}) => {
    const styles: React.CSSProperties = {};

    if (position) {
        styles.gridColumnStart = position[1] + 1;
        styles.gridRowStart = position[0] + 2;
    }
    if (height) {
        styles.gridRowEnd = `span ${height}`;
    }
    if (width) {
        styles.gridColumnEnd = `span ${width}`;
    }
    if (buttonType === ButtonType.Number) {
        styles.color = '#000000';
        styles.background = '#e48900';
    }
    if (buttonType === ButtonType.Service) {
        styles.color = '#ffffff';
        styles.background = '#727171';
    }

    return <StyledButton onClick={onClick} style={styles}>
        {label}
    </StyledButton>;
}

export default Button;