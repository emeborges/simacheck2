import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input as InputChakra,
    InputProps as InputPropsChakra,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import {  FieldError } from "react-hook-form";
import InputMask from "react-input-mask";
import { UFS } from "utils/gerals";

interface InputProps extends InputPropsChakra {
    name: string;
    label?: string;
    error?: FieldError;
    masktUF?: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    { name, label, error,masktUF, ...rest },
    ref
) => {
    const mask = UFS.find((uf) => uf.uf === masktUF);
    console.log(mask);
    return (
        <FormControl isInvalid={!!error} mb={2}>
            {!!label && (
                <FormLabel mb={"0"} fontSize={"0.8rem"}>
                    {label}
                </FormLabel>
            )}
            <InputChakra
                as={InputMask}
                mask={mask?.maskTel}
                formatChars={{ "9": "", "*": "[0-9]" }}
                name={name}
                focusBorderColor={"black"}
                {...rest}
                borderRadius={"3px"}
                ref={ref}
                mb={"0"}
            />
            <FormErrorMessage fontSize={"0.7rem"} pt={"0"}>
                {error?.message}
            </FormErrorMessage>
        </FormControl>
    );
};

export const InputTel = forwardRef(Input);
