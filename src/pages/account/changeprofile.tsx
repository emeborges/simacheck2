import {
    Flex,
    Heading,
    Text,
    Button,
    useToast,
    Select,
    FormControl,
    FormLabel,
    Checkbox,
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
import { api } from "utils/services";

type changePassProps = {
    name: string;
    phone_number: string;
    phone_country: string
    locale: string;
    is_optin: boolean;
};

const signUpFormSchema = yup.object().shape({
    name: yup.string().required("É necessário preencher um nome"),
    phone_number: yup.string(),
    locale: yup.string().required().required("É necessário preencher um idioma."),
    is_optin: yup.boolean().required(),
});



const ChangeProfile = () => {
    const [load, setLoad] = useState<boolean>(false)
    const { register, handleSubmit, formState } = useForm<changePassProps>({
        resolver: yupResolver(signUpFormSchema),
    });
    const { errors } = formState;
    const toast = useToast();
    const { locale } = useTranslation();
    const [uf, setUf] = useState(locale === "pt" ? "br" : "eua");

    const onSubmit: SubmitHandler<changePassProps> = async ({
        name,
        phone_number,
        locale,
        //is_optin,
    }) => {
        setLoad(true)

        const data = {
            name,
            phone_number,
            locale,
        };

        await api
            .put("users/me", data)
            .then(() => {

                toast({
                    title: "Dados atualizado!.",
                    description:
                        "Dados atualizados com sucesso, você será redirecionado",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                    position: "top",
                });
                setTimeout(() => Router.push("/account"), 5000);
                setTimeout(() => Router.reload, 4000)
            })
            .catch(() => {
                toast({
                    title: "Hmm! Algo deu errado.",
                    description:
                        "Por favor, tente novamente mais tarde, ou entre em contato com o suporte.",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                    position: "top",
                });
                setLoad(false)
            });

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
                    p={"3rem 0rem 1rem"}
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
                                label={"Nome*"}
                                placeholder={"Nome*"}
                                autoComplete={"on"}
                                isRequired
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
                                label={"WhatsApp"}
                                placeholder={"WhatsApp"}
                                size={"sm"}
                                masktUF={uf}
                                error={errors.phone_number}
                                {...register("phone_number")}
                            />

                            <FormControl mb={2}>
                                <FormLabel mb={"0"} fontSize={"0.8rem"}>
                                    Idioma*
                                </FormLabel>
                                <Select
                                    placeholder="Selecione um idioma"
                                    size="sm"
                                    focusBorderColor={"black"}
                                    required
                                    {...register("locale")}
                                >
                                    {languages.map((lang) => (
                                        <option
                                            key={lang.code}
                                            value={lang.code}
                                        >
                                            {locale === "pt"
                                                ? lang.namePT
                                                : lang.nameEG}
                                        </option>
                                    ))}
                                </Select>
                            </FormControl>

                            <Checkbox
                                {...register("is_optin")}
                                maxW={"300px"}
                                size={"sm"}
                            >
                                <Text fontSize={"0.75rem"}>
                                    Concorda em receber os melhores conteúdos e
                                    ofertas através deste número de WhatsApp?
                                </Text>
                            </Checkbox>

                            <Button
                                mt={"1rem"}
                                background={"#18181B"}
                                color={"#FEFEFE"}
                                _hover={{ bg: "#4E4E52" }}
                                type={"submit"}
                                isLoading={load}
                            >
                                Salvar
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
