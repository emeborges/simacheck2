import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input as InputChakra,
    InputProps as InputPropsChakra,
    NumberInputField
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { appendErrors, FieldError } from "react-hook-form";

interface InputProps extends InputPropsChakra {
    name: string;
    label?: string;
    error?: FieldError;

}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    { name, label, error, ...rest },
    ref
) => {

    return (
        <FormControl isInvalid={!!error} mb={2}>
            {!!label && <FormLabel mb={"0"} fontSize={'0.8rem'}>{label}</FormLabel>}
            <InputChakra
                name={name}
                focusBorderColor={"black"}
                {...rest}
                borderRadius={"3px"}
                ref={ref}
                mb={'0'}
            />
            <FormErrorMessage fontSize={'0.7rem'} pt={'0'}>{error?.message}</FormErrorMessage>
        </FormControl>
    );
};

export const Input = forwardRef(InputBase)
