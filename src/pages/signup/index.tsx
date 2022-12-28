import { Flex, Heading, Link, Button, Checkbox, Text} from "@chakra-ui/react";
import { Header } from "components/Header";
import { Input } from "components/Input";
import Head from 'next/head'
import {  useState } from "react";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSignup } from "hooks/useSignup";
import { withSSTGuest } from "utils/withsSSRGuest";
import { useTranslation } from "hooks/useTranslation";

type SignUpProps = {
    email: string;
    password: string;
    confirmationPassword: string;
};

const signUpFormSchema = yup.object().shape({
    email: yup
        .string()
        .required("E-mail obrigatório")
        .email("E-mail inválido."),
    password: yup
        .string()
        .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?])[0-9a-zA-Z-+_!@#$%^&*.,?]{8,}$/,
            "A senha deve ser composta de letras minusculas e maiusculas, números e caracteres especiais."
        )
        .required("Senha obrigatória."),
    confirmationPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
});

const Signup = () => {
    const { signUp, Router, loading } = useSignup();
    const { register, handleSubmit, formState } = useForm<SignUpProps>({
        resolver: yupResolver(signUpFormSchema),
    });
    const {locale} = useTranslation()
    const [valueCheck, setValeuCheck ] = useState(false)
    const { errors } = formState

    const onSubmit: SubmitHandler<SignUpProps> = async ({ email, password}) => {
        const data = {email, password, locale}
        signUp(data);
    };

    return (
        <Flex maxW={"100vw"} h={"100vh"} align={"center"} flexDir={"column"}>
            <Head>
                <title> Entrar - SimaCheck</title>
                <meta name="description" content="" />
            </Head>
            <Header />
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
                        Cadastrar-se
                    </Heading>
                    <Input
                        label={"login"}
                        placeholder={"Endereço de e-mail"}
                        mb={"1rem"}
                        error={errors.email}
                        {...register("email")}
                    />
                    <Input
                        label={"senha"}
                        type={"password"}
                        placeholder={"Senha"}
                        mb={"1rem"}
                        error={errors.password}
                        {...register("password")}
                        autoComplete={"on"}
                    />
                    <Input
                        label={"repita a senha"}
                        type={"password"}
                        minW={{ base: "200px", md: "330px" }}
                        error={errors.confirmationPassword}
                        placeholder={"Senha"}
                        {...register("confirmationPassword")}
                    />
                    <Checkbox
                        colorScheme={"gray"}
                        onChange={() => setValeuCheck(!valueCheck)}
                        pt={"1rem"}
                    >
                        <Text fontSize={"0.8rem"}>
                            Concordo com os <Link href={""}>Termos de Uso</Link>{" "}
                            e com a{" "}
                            <Link href={""}>Política de Privacidade</Link>.
                        </Text>
                    </Checkbox>
                    <Button
                        mt={"1rem"}
                        background={"#18181B"}
                        color={"#FEFEFE"}
                        _hover={{ bg: "#4E4E52" }}
                        isDisabled={valueCheck === false ? true : false}
                        isLoading={loading === true ? true : false}
                        type={"submit"}
                    >
                        Cadastrar
                    </Button>
                    <Button
                        mt={"1rem"}
                        background={"transparent"}
                        color={"#18181B"}
                        border={"1px solid #18181B"}
                        onClick={() => Router.back()}
                    >
                        Voltar
                    </Button>

                </Flex>
            </Flex>
        </Flex>
    );}

export default Signup

export const getServerSideProps = withSSTGuest(async () => {
    return {
        props: {},
    };
});
