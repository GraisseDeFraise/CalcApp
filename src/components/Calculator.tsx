import React, { useState } from 'react';
import styled from 'styled-components';
import Button, { ButtonType } from './Button';
import Calc, { CalcInput, InputType, OperatorType } from '../modules/calc';

const Grid = styled.div`
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: 120px repeat(5, 80px);
`;

const Display = styled.div`
    
    text-align: right;
    background: #ffffff;
    border-radius: 8px;
    padding: 34px 24px;
    font-size: 48px;
    grid-column-end: span 4;
`;

const Calculator: React.FC<{}> = () => {
    const [inputs, setInputs] = useState<Array<CalcInput>>([]);
    const state = Calc.getState(inputs);

    const appendInput = (input: CalcInput): void => {
        setInputs((prev) => [...prev, input]);
    };

    const handleAllClear = () => setInputs([]);

    const handlePrevious = () => setInputs((prev) => prev.slice(0, -1));

    const handleNumerical = (value: string) => () =>
        appendInput({ type: InputType.Numerical, value });

    const handleOperator = (operator: OperatorType) => () =>
        appendInput({ type: InputType.Operator, operator });

    return (
        <Grid>
            <Display>{state.displayValue}</Display>
            <Button onClick={handleAllClear} buttonType={ButtonType.Service} label="C" position={[0, 0]} />
            <Button onClick={handlePrevious} buttonType={ButtonType.Service} label={String.fromCharCode(9003)} position={[0, 1]} />
            <Button onClick={handleOperator(OperatorType.Min)} buttonType={ButtonType.Service} label={String.fromCharCode(177)} position={[0, 2]} />
            <Button onClick={handleOperator(OperatorType.Div)} buttonType={ButtonType.Service} label={String.fromCharCode(247)} position={[0, 3]} />
            <Button onClick={handleOperator(OperatorType.Mul)} buttonType={ButtonType.Service} label={String.fromCharCode(215)} position={[1, 3]} />
            <Button onClick={handleOperator(OperatorType.Sub)} buttonType={ButtonType.Service} label="-" position={[2, 3]} />
            <Button onClick={handleOperator(OperatorType.Add)} buttonType={ButtonType.Service} label="+" position={[3, 3]} />
            <Button onClick={handleOperator(OperatorType.Equals)} buttonType={ButtonType.Service} label="=" position={[4, 3]} />
            <Button onClick={handleNumerical('.')} buttonType={ButtonType.Number} label="." position={[4, 2]} />
            <Button onClick={handleNumerical('0')} buttonType={ButtonType.Number} label="0" position={[4, 0]} width={2} />
            <Button onClick={handleNumerical('1')} buttonType={ButtonType.Number} label="1" position={[3, 0]} />
            <Button onClick={handleNumerical('2')} buttonType={ButtonType.Number} label="2" position={[3, 1]} />
            <Button onClick={handleNumerical('3')} buttonType={ButtonType.Number} label="3" position={[3, 2]} />
            <Button onClick={handleNumerical('4')} buttonType={ButtonType.Number} label="4" position={[2, 0]} />
            <Button onClick={handleNumerical('5')} buttonType={ButtonType.Number} label="5" position={[2, 1]} />
            <Button onClick={handleNumerical('6')} buttonType={ButtonType.Number} label="6" position={[2, 2]} />
            <Button onClick={handleNumerical('7')} buttonType={ButtonType.Number} label="7" position={[1, 0]} />
            <Button onClick={handleNumerical('8')} buttonType={ButtonType.Number} label="8" position={[1, 1]} />
            <Button onClick={handleNumerical('9')} buttonType={ButtonType.Number} label="9" position={[1, 2]} />
        </Grid>
    );
};

export default Calculator;