import { Flex, Heading, Link, Button, Text } from "@chakra-ui/react";
import { Header } from "components/Header";
import { Input } from "components/Input";
import Head from "next/head";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSignup } from "hooks/useSignup";
import { withSSTGuest } from "utils/withsSSRGuest";
import { verifyLogin } from "utils/gerals";

type ConfirmationProps = {
    confirmation: string;
    email?: string;
};

interface Props {
    acess: boolean;
}

const ConfirmationFormSchema = yup.object().shape({
    confirmation: yup
        .string()
        .min(6, "Mínimo de 6 caracteres.")
        .max(6, "maximo de 6 caracteres.")
        .required("Campo obrigatório."),
});

const Signup = ({ acess }: Props) => {
    const { Router, email, signUpConfirmation, resendConfirmation, loading } =
        useSignup();
    const [valor, setValor] = useState<number>(10);
    const { register, handleSubmit, formState } = useForm<ConfirmationProps>({
        resolver: yupResolver(ConfirmationFormSchema),
    });

    useEffect(() => {
        if (valor != 0) {
            setTimeout(() => setValor(valor - 1), 1000);
        }
    }, [valor]);

    const { errors } = formState;

    const onSubmit: SubmitHandler<ConfirmationProps> = async ({
        confirmation,
    }) => {
        const data = { email, confirmation };
        signUpConfirmation(data);
    };

    return (
        <Flex maxW={"100vw"} h={"100vh"} align={"center"} flexDir={"column"}>
            <Head>
                <title> Entrar - SimaCheck</title>
                <meta name="description" content="" />
            </Head>
            <Header page={""} acess={acess} />
            <Flex maxW={"330px"} h={"100%"} align={"center"} justify={"center"}>
                <Flex
                    flexDir={"column"}
                    as={"form"}
                    boxShadow={"0px 4px 10px rgba(0,0,0,0.2)"}
                    p={"2rem 2rem"}
                    borderRadius={"8px"}
                    transition={"all 0.2s"}
                    _hover={{ boxShadow: "0px 4px 20px rgba(0,0,0,0.2)" }}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Heading
                        fontSize={"1.5rem"}
                        pb={"1rem"}
                        position={"relative"}
                        _after={{
                            content: "''",
                            width: "10%",
                            height: "8%",
                            position: "absolute",
                            bottom: 5,
                            left: 0,
                            bg: "red.400",
                            zIndex: -1,
                        }}
                    >
                        Confirme seu email
                    </Heading>
                    <Text color={"#8D8D8D"} fontSize={"80%"} pb={"1rem"}>
                        Um email de com o código de verificação foi enviado
                        para:
                        <Text color={"black"} fontWeight={"600"}>
                            {email}
                        </Text>
                        Digite o código abaixo:
                    </Text>
                    <Input
                        placeholder={"Código de verficação"}
                        mb={"1rem"}
                        type={"number"}
                        minW={"300px"}
                        error={errors.confirmation}
                        {...register("confirmation")}
                    />

                    <Button
                        mt={"1rem"}
                        background={"#18181B"}
                        color={"#FEFEFE"}
                        _hover={{ bg: "#4E4E52" }}
                        isLoading={loading === true ? true : false}
                        type={"submit"}
                    >
                        Confirmar código
                    </Button>

                    <Button
                        mt={"1rem"}
                        background={"#f1f1f1"}
                        color={"#18181b"}
                        border={"1px solid #f1f1f1"}
                        _hover={{ bg: "#4E4E52", color: "#f1f1f1" }}
                        isDisabled={valor == 0 ? false : true}
                        isLoading={loading === true ? true : false}
                        fontSize={"0.8rem"}
                        fontWeight={"normal"}
                        onClick={() => resendConfirmation()}
                    >
                        Não recebeu o código?
                        <br />
                        Enviar novamente ({valor})
                    </Button>
                    <Link onClick={() => Router.back()}>Voltar</Link>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Signup;

export const getServerSideProps = withSSTGuest(async (ctx) => {
    return {
        props: {
            acess: verifyLogin(ctx),
        },
    };
});
