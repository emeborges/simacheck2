import {
    Flex,

    Heading,
    Link,

    Button,
    //useToast,
    Select,
    FormControl,
    FormLabel,


} from "@chakra-ui/react";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Input } from "components/Input/";
import { InputTel } from "components/Input/phone";
import Head from 'next/head'
import { withsSSRAuth } from "utils/withsSSRAuth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
//import { api } from "utils/services";
import Router from "next/router";
import { useState } from "react";
import { languages, UFS } from "utils/gerals";
import { useTranslation } from "hooks/useTranslation";

type changePassProps = {
    name: string;
    phone_number: string;
    phone_numberConfirmation: string;
    locale: string;
};

const signUpFormSchema = yup.object().shape({
    name: yup.string(),
    phone_number: yup.string(),
    phone_numberConfirmation: yup
        .string()
        .oneOf([yup.ref("phone_number"), null], "Os telefones devem ser iguais"),
    locale: yup.string()
});



const ChangeProfile = () => {
    const { register, handleSubmit, formState } = useForm<changePassProps>({
        resolver: yupResolver(signUpFormSchema),
    });
    const { errors } = formState;
    //const toast = useToast();
    const { locale } = useTranslation();
    const [uf, setUf] = useState(locale === "pt" ? "br" : "eua");

    const onSubmit: SubmitHandler<changePassProps> = async ({
        name,
        phone_number,
        locale
    }) => {
        console.log(name, phone_number, locale)
        {/*await api
            .post("/auth/password/change", {
                password: password,
                new_password: new_password,
            })
            .then((resp) => {
                console.log(resp);

                toast({
                    title: "Senha trocada com sucesso.",
                    description:
                        "Senha alterado com sucesso, você será redirecionado",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                    position: "top",
                });
                setTimeout(() => Router.push("/account"), 9000);
            })
            .catch((error) => {
                if (error.response.status == 401) {
                    toast({
                        title: "Senha incorreta",
                        description:
                            "Senha anterior ou a nova senha está incorreta, por favor, tente novamente.",
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                        position: "top",
                    });
                } else {
                    toast({
                        title: "Hmm! Algo deu errado.",
                        description:
                            "Por favor, tente novamente mais tarde, ou entre em contato com o suporte.",
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                        position: "top",
                    });
                }
            });*/}
    };

    return (
        <>
            <Flex minH={"98vh"} align={"center"} flexDir={"column"}>
                <Head>
                    <title> Alterar Perfil - SimaCheck</title>
                    <meta name="description" content="" />
                </Head>
                <Header />
                <Flex
                    justifyContent={"center"}
                    align={"center"}
                    flexDir={{ base: "column", md: "row" }}
                    p={"5rem 0rem 1rem"}
                >
                    <Flex
                        w={"100%"}
                        h={"100%"}
                        align={"center"}
                        justify={"center"}
                    >
                        <Flex
                            flexDir={"column"}
                            boxShadow={"0px 4px 10px rgba(0,0,0,0.2)"}
                            p={"2rem 2rem"}
                            maxW={"100%"}
                            minW={{ base: "300px", md: "330px" }}
                            borderRadius={"8px"}
                            transition={"all 0.2s"}
                            _hover={{
                                boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
                            }}
                            as={"form"}
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
                                Alterar Perfil
                            </Heading>
                            <Input
                                label={"Nome"}
                                placeholder={"Nome"}
                                autoComplete={"on"}
                                size={"sm"}
                                error={errors.name}
                                {...register("name")}
                            />
                            <FormControl mb={2}>
                                <FormLabel mb={"0"} fontSize={"0.8rem"}>
                                    País
                                </FormLabel>
                                <Select
                                    placeholder="Selecione um país"
                                    size="sm"
                                    focusBorderColor={"black"}
                                    onChange={(e) => setUf(e.target.value)}
                                >
                                    {UFS.map((uf) => (
                                        <option key={uf.uf} value={uf.uf}>
                                            {locale === "pt"
                                                ? uf.namePT
                                                : uf.nameEG}
                                        </option>
                                    ))}
                                </Select>
                            </FormControl>
                            <InputTel
                                label={"Telefone"}
                                placeholder={"Telefone"}
                                size={"sm"}
                                masktUF={uf}
                                error={errors.phone_number}
                                {...register("phone_number")}
                            />
                            <InputTel
                                label={"Repitir Telefone"}
                                placeholder={"Telefone"}
                                size={"sm"}
                                masktUF={uf}
                                error={errors.phone_numberConfirmation}
                                {...register("phone_numberConfirmation")}
                            />
                            <FormControl mb={2}>
                                <FormLabel mb={"0"} fontSize={"0.8rem"}>
                                    Idioma
                                </FormLabel>
                                <Select
                                    placeholder="Selecione um idioma"
                                    size="sm"
                                    focusBorderColor={"black"}
                                    defaultValue={locale}
                                    {...register("locale")}
                                >
                                    {languages.map((lang) => (
                                        <option key={lang.code} value={lang.code}>
                                            {locale === "pt"
                                                ? lang.namePT
                                                : lang.nameEG}
                                        </option>
                                    ))}
                                </Select>
                            </FormControl>

                            <Button
                                mt={"1rem"}
                                background={"#18181B"}
                                color={"#FEFEFE"}
                                _hover={{ bg: "#4E4E52" }}
                                type={"submit"}
                            >
                                Salvar
                            </Button>
                            <Link onClick={() => Router.back()}>Voltar</Link>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Footer />
        </>
    );}

export default ChangeProfile;

export const getServerSideProps = withsSSRAuth(async () => {
    return {
        props: {},
    };
});
