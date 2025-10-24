import {Form, Head} from "@inertiajs/react";
import {cn} from "@/lib/utils";
import {CheckIcon, LoaderCircle} from 'lucide-react';
import MembershipFormController from "@/actions/App/Http/Controllers/Forms/MembershipFormController";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import InputError from "@/components/input-error";
import {Button} from "@/components/ui/button";
import NavGuestLayout from "@/layouts/nav-guest-layout";
import {Checkbox} from "@/components/ui/checkbox";
import {useState} from "react";

export default function Membership() {
    const today = new Date();
    const actualMonth = today.getMonth() + 1;
    const leftMonths = 12 - actualMonth;


    const [selectedPlan, setSelectedPlan] = useState<
        "custom" | "one-year" | "two-year"
    >("one-year");

    const plans = [
        {
            id: "custom" as const,
            name: "Sur-mesure",
            price: `${leftMonths}€`,
            description: "Derniers mois de l'année.",
        },
        {
            id: "one-year" as const,
            name: "Un an",
            price: "12€",
            description: "Pour nous soutenir durant un an.",
        },
        {
            id: "two-year" as const,
            name: "Deux ans",
            price: "24€",
            description: "Pour nous soutenir durant deux ans.",
        },
    ];
    const features = [
        "Boîte Mail",
        "NextCloud",
        "Mailing list",
        "Hébergement de site",
        "Sondage",
        "Et plus encore ...",
    ];

    return (
        <>
            <Head title="Adhérer au Retzien Libre"/>
            <div
                className="flex min-h-screen flex-col items-center bg-[#F5F5F5] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <NavGuestLayout/>

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
                                            message={errors.lastname}
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
                                            message={errors.firstname}
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
                                        <Label htmlFor="phone1">Téléphone*</Label>
                                        <Input
                                            id="phone1"
                                            type="phone"
                                            required
                                            tabIndex={4}
                                            autoComplete="phone"
                                            name="phone1"
                                            placeholder="Votre numéro de téléphone"
                                        />
                                        <InputError message={errors.phone}/>
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="address">Votre adresse*</Label>
                                        <Input
                                            id="address"
                                            type="text"
                                            required
                                            autoFocus
                                            tabIndex={5}
                                            autoComplete="address"
                                            name="address"
                                            placeholder="Votre adresse"
                                        />
                                        <InputError
                                            message={errors.address}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="zipcode">Votre code postale*</Label>
                                        <Input
                                            id="zipcode"
                                            type="text"
                                            required
                                            autoFocus
                                            tabIndex={6}
                                            autoComplete="zipcode"
                                            name="zipcode"
                                            placeholder="Votre code postale"
                                        />
                                        <InputError
                                            message={errors.zipcode}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="city">Votre ville*</Label>
                                        <Input
                                            id="city"
                                            type="text"
                                            required
                                            autoFocus
                                            tabIndex={6}
                                            autoComplete="city"
                                            name="city"
                                            placeholder="Votre ville"
                                        />
                                        <InputError
                                            message={errors.city}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <Label htmlFor="package">Formule d'adhésion*</Label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {plans.map((plan) => (
                                                <button
                                                    className={cn(
                                                        "flex flex-col items-center justify-center rounded border-3 p-4 transition-colors",
                                                        selectedPlan === plan.id
                                                            ? "border-primary"
                                                            : "border-black hover:border-primary"
                                                    )}
                                                    key={plan.id}
                                                    onClick={() => setSelectedPlan(plan.id)}
                                                    type="button"
                                                >
                                                    <span className="font-semibold">{plan.name}</span>
                                                    <span className="font-bold text-lg">{plan.price}</span>
                                                    <span className="text-center text-muted-foreground text-xs">
                                                      {plan.description}
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-sm">Fonctionnalités inclues :</h4>
                                            <ul className="space-y-2">
                                                {features.map((feature, index) => (
                                                    <li className="flex items-center gap-2 text-sm" key={index}>
                                                        <CheckIcon className="h-4 w-4 text-primary"/>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/*<div className="grid gap-2">
                                        <div className="flex items-center space-x-2">
                                            <Switch id="cloud-access" tabIndex={8}/>
                                            <Label htmlFor="cloud-access">Me créer un accès au service du "cloud" ?</Label>
                                        </div>
                                    </div>*/}

                                    <div className="grid gap-2">
                                        <Label htmlFor="captcha">Captcha</Label>
                                        <Input
                                            id="captcha"
                                            type="text"
                                            autoFocus
                                            tabIndex={9}
                                            name="captcha"
                                            placeholder="Entrez le captcha ci-dessous"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                id="cgu"
                                                name="cgu"
                                                tabIndex={10}
                                                required
                                            />
                                            <Label htmlFor="remember">J'ai lu et j'accepte les <a href="#">C.G.U.</a>,
                                                je comprends la nécessité des enregistrements de mes données
                                                personnelles.</Label>
                                        </div>
                                    </div>

                                    <Button
                                        variant="outline"
                                        type="submit"
                                        className="mt-2 w-full"
                                        tabIndex={11}
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
