import {useEffect, useState} from "react";
import {Form, Head, usePage} from "@inertiajs/react";
import {LoaderCircle} from 'lucide-react';
import ContactFormController from "@/actions/App/Http/Controllers/Forms/ContactFormController";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import InputError from "@/components/input-error";
import {Button} from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import NavGuestLayout from "@/layouts/nav-guest-layout";
import {PageProps} from "@/types";
import {FlashMessage} from "@/components/flash-message";

export default function Contact() {
    const {flash} = usePage().props as PageProps;

    const [showFlashMessage, setFlashMessage] = useState(!!flash);

    useEffect(() => {
        if (flash) {
            setFlashMessage(true);
            const timer = setTimeout(() => setFlashMessage(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [flash]);


    return (
        <>
            <Head title="Nous contacter"/>
            <div
                className="flex flex-col items-center bg-[#F5F5F5] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <NavGuestLayout/>

                <section className="flex flex-col h-screen items-center  mt-15 gap-4">
                    <div>
                        <h1>Nous contacter</h1>
                        <p>
                            Vous désirez nous contacter, merci de remplir le formulaire suivant :
                        </p>
                    </div>

                    {showFlashMessage && (
                        <FlashMessage messages={flash ?? {}} />
                    )}

                    <Form
                        {...ContactFormController.store.form()}
                        resetOnSuccess
                        disableWhileProcessing
                    >
                        {({processing, errors}) => (
                            <div className="lg:w-5xl px-10">
                                <div className="flex gap-6 w-full">
                                    <div className="w-1/2">
                                        <div className="grid gap-2 my-4">
                                            <Label htmlFor="lastname">Nom*</Label>
                                            <Input
                                                id="lastname"
                                                type="text"
                                                required
                                                autoFocus
                                                tabIndex={1}
                                                autoComplete="lastname"
                                                name="lastname"
                                                placeholder="Nom"
                                            />
                                            <InputError
                                                message={errors.name}
                                                className="mt-2"
                                            />
                                        </div>

                                        <div className="grid gap-2 my-4">
                                            <Label htmlFor="firstname">Prénom*</Label>
                                            <Input
                                                id="firstname"
                                                type="text"
                                                required
                                                autoFocus
                                                tabIndex={2}
                                                autoComplete="firstname"
                                                name="firstname"
                                                placeholder="Prénom"
                                            />
                                            <InputError
                                                message={errors.name}
                                                className="mt-2"
                                            />
                                        </div>

                                        <div className="grid gap-2 my-4">
                                            <Label htmlFor="email">Adresse Mail*</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                required
                                                tabIndex={3}
                                                autoComplete="email"
                                                name="email"
                                                placeholder="email@exemple.com"
                                            />
                                            <InputError message={errors.email}/>
                                        </div>

                                        <div className="grid gap-2 my-4">
                                            <Label htmlFor="address">Votre adresse postale</Label>
                                            <Input
                                                id="address"
                                                type="text"
                                                required
                                                autoFocus
                                                tabIndex={4}
                                                autoComplete="address"
                                                name="address"
                                                placeholder="Votre adresse postale (facultatif)"
                                            />
                                            <InputError
                                                message={errors.name}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>

                                    <div className="w-1/2">
                                        <div className="grid gap-2 my-4">
                                            <Label htmlFor="subject">Objet de votre demande*</Label>
                                            <Select name="subject" required>
                                                <SelectTrigger tabIndex={5}>
                                                    <SelectValue placeholder="Sélectionnez un objet"/>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Objets</SelectLabel>
                                                        <SelectItem value="info-request">Demande
                                                            d'informations</SelectItem>
                                                        <SelectItem value="service-request">Services</SelectItem>
                                                        <SelectItem value="other">Autres</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="grid gap-2 my-4">
                                            <Label htmlFor="message">Votre message</Label>
                                            <Textarea
                                                className="h-28"
                                                id="message"
                                                name="message"
                                                tabIndex={6}
                                                required
                                                placeholder="Entrez votre message ici..."
                                            />
                                        </div>

                                        <div className="grid gap-2 my-4">
                                            <Label htmlFor="captcha">Captcha</Label>
                                            <Input
                                                id="captcha"
                                                type="text"
                                                autoFocus
                                                tabIndex={7}
                                                name="captcha"
                                                placeholder="Entrez le captcha ci-dessous"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-auto justify-center">
                                    <Button
                                        variant="outline"
                                        type="submit"
                                        className="mt-2"
                                        tabIndex={8}
                                        data-test="register-user-button"
                                    >
                                        {processing && (
                                            <LoaderCircle className="h-4 w-4 animate-spin"/>
                                        )}
                                        Envoyer
                                    </Button>
                                </div>
                            </div>
                        )}
                    </Form>
                </section>
            </div>
        </>
    )
}
