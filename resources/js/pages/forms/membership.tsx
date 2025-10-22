import {Form, Head} from "@inertiajs/react";
import {LoaderCircle} from 'lucide-react';
import MembershipFormController from "@/actions/App/Http/Controllers/Forms/MembershipFormController";
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
import NavGuestLayout from "@/layouts/nav-guest-layout";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Switch} from "@/components/ui/switch";
import {Checkbox} from "@/components/ui/checkbox";

export default function Membership() {
    return (
        <>
            <Head title="Adhérer au Retzien Libre"/>
            <div
                className="flex min-h-screen flex-col items-center bg-[#F5F5F5] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <NavGuestLayout />

                <div className="flex flex-col items-center justify-center gap-4">
                    <div>
                        <h1>Adhérer au Retzien Libre</h1>
                        <p>
                            Saisissez vos informations ci-dessous pour créer une demande d'adhésion :
                        </p>
                    </div>
                    <Form
                        {...MembershipFormController.store.form()}
                        resetOnSuccess
                        disableWhileProcessing
                        className="flex flex-col gap-6"
                    >
                        {({processing, errors}) => (
                            <>
                                <div className="grid gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="lastname">Nom*</Label>
                                        <Input
                                            id="lastname"
                                            type="text"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="lastname"
                                            name="lastname"
                                            placeholder="Votre Nom"
                                        />
                                        <InputError
                                            message={errors.name}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="firstname">Prénom*</Label>
                                        <Input
                                            id="firstname"
                                            type="text"
                                            required
                                            autoFocus
                                            tabIndex={2}
                                            autoComplete="firstname"
                                            name="firstname"
                                            placeholder="Votre Prénom"
                                        />
                                        <InputError
                                            message={errors.name}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="grid gap-2">
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

                                    <div className="grid gap-2">
                                        <Label htmlFor="phone">Téléphone*</Label>
                                        <Input
                                            id="phone"
                                            type="phone"
                                            required
                                            tabIndex={4}
                                            autoComplete="phone"
                                            name="phone"
                                            placeholder="Votre numéro de téléphone"
                                        />
                                        <InputError message={errors.email}/>
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="address">Votre adresse postale*</Label>
                                        <Input
                                            id="address"
                                            type="text"
                                            required
                                            autoFocus
                                            tabIndex={5}
                                            autoComplete="address"
                                            name="address"
                                            placeholder="Votre adresse postale"
                                        />
                                        <InputError
                                            message={errors.name}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="subject">Formule d'adhésion*</Label>
                                        <RadioGroup
                                            defaultValue="comfortable"
                                            required
                                            tabIndex={6}
                                        >
                                            <div className="flex items-center gap-3">
                                                <RadioGroupItem value="default" id="r1" />
                                                <Label htmlFor="short">2 mois</Label>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <RadioGroupItem value="comfortable" id="r2" />
                                                <Label htmlFor="one-year">1 an</Label>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <RadioGroupItem value="compact" id="r3" />
                                                <Label htmlFor="two-year">2 ans</Label>
                                            </div>
                                        </RadioGroup>
                                    </div>

                                    <div className="grid gap-2">
                                        <div className="flex items-center space-x-2">
                                            <Switch id="cloud-access" tabIndex={7}/>
                                            <Label htmlFor="cloud-access">Me créer un accès au service du "cloud" ?</Label>
                                        </div>
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="captcha">Captcha</Label>
                                        <Input
                                            id="captcha"
                                            type="text"
                                            autoFocus
                                            tabIndex={8}
                                            name="captcha"
                                            placeholder="Entrez le captcha ci-dessous"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                id="cgu"
                                                name="cgu"
                                                tabIndex={9}
                                            />
                                            <Label htmlFor="remember">J'ai lu et j'accepte les <a href="#">C.G.U.</a>, je comprends la nécessité des enregistrements de mes données personnelles.</Label>
                                        </div>
                                    </div>

                                    <Button
                                        variant="outline"
                                        type="submit"
                                        className="mt-2 w-full"
                                        tabIndex={5}
                                        data-test="register-user-button"
                                    >
                                        {processing && (
                                            <LoaderCircle className="h-4 w-4 animate-spin"/>
                                        )}
                                        Envoyer
                                    </Button>
                                </div>
                            </>
                        )}
                    </Form>
                </div>
            </div>
        </>
    )
}
