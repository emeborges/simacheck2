import {
    Text,
    Flex,
    Button,
    IconButton,
    Image,
    FormControl,
    FormLabel,
    Input as InputChakra,
    InputProps as InputPropsChakra
} from "@chakra-ui/react";

interface InputProps extends InputPropsChakra {
    name: string;
    label?: string;

}

export const Input = ({ name, label, ...rest }: InputProps) => {

    return (
        <FormControl>
            {!!label && <FormLabel mb={"0"}>{label}</FormLabel>}
            <InputChakra
                name={name}
                focusBorderColor={"black"}
                {...rest}
                borderRadius={"3px"}
            />
        </FormControl>
    );
};
