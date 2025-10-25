import {Form, Head, usePage} from "@inertiajs/react";
import {cn} from "@/lib/utils";
import {CheckCircle2, CheckIcon, LoaderCircle} from 'lucide-react';
import MembershipFormController from "@/actions/App/Http/Controllers/Forms/MembershipFormController";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import InputError from "@/components/input-error";
import {Button} from "@/components/ui/button";
import NavGuestLayout from "@/layouts/nav-guest-layout";
import {Checkbox} from "@/components/ui/checkbox";
import {useEffect, useState} from "react";
import {PageProps} from "@/types";
import {FlashMessage} from "@/components/flash-message";

export default function Membership() {
    const {flash, plans} = usePage().props as PageProps
    const [showFlashMessage, setFlashMessage] = useState(!!flash);
    const [selectedPlan, setSelectedPlan] = useState(plans?.[0]?.identifier ?? null);
    const [amount, setAmount] = useState(plans?.[0]?.price ?? 0);
    const features = [
        "Boîte Mail",
        "NextCloud",
        "Mailing list",
        "Hébergement de site",
        "Sondage",
        "Et plus encore ...",
    ];

    // /!\ Existant à discuter avec client
    /*const today = new Date();
    const actualMonth = today.getMonth() + 1;
    const leftMonths = 12 - actualMonth;*/
    /*const getAmount = (plan: string | null): number => {
        if (!plan) return 0;
        const baseAmount = leftMonths;
        switch (plan) {
            case 'custom':
                return baseAmount;
            case 'one-year':
                return baseAmount + 12;
            case 'two-year':
                return baseAmount + 24;
            default:
                return 0;
        }
    };*/

    useEffect(() => {
        if (plans && selectedPlan) {
            const plan = plans.find(p => p.identifier === selectedPlan);
            if (plan) {
                setAmount(plan.price);
            }
        }
    }, [selectedPlan, plans]);

    useEffect(() => {
        if (flash) {
            setFlashMessage(true);
            const timer = setTimeout(() => setFlashMessage(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [flash]);

    return (
        <>
            <Head title="Adhérer au Retzien Libre"/>
            <div
                className="flex min-h-screen flex-col items-center bg-[#F5F5F5] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <NavGuestLayout/>

                <section className="flex flex-col items-center justify-center gap-4">
                    <div>
                        <h1>Adhérer au Retzien Libre</h1>
                        <p>
                            Saisissez vos informations ci-dessous pour créer une demande d'adhésion :
                        </p>
                    </div>

                    {showFlashMessage && (
                        <FlashMessage messages={flash ?? {}}/>
                    )}

                    <Form
                        {...MembershipFormController.store.form()}
                        resetOnSuccess
                        disableWhileProcessing
                        className="flex flex-col gap-6"
                    >
                        {({processing, errors}) => (
                            <div className="lg:w-5xl px-10">
                                <div className="flex flex-col md:flex-row gap-6 w-full">
                                    <div className="w-full lg:w-1/2">
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
                                                placeholder="Votre Nom"
                                            />
                                            <InputError
                                                message={errors.lastname}
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
                                                placeholder="Votre Prénom"
                                            />
                                            <InputError
                                                message={errors.firstname}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="grid gap-2 my-4">
                                            <Label htmlFor="company">Société</Label>
                                            <Input
                                                id="company"
                                                type="text"
                                                autoFocus
                                                tabIndex={3}
                                                autoComplete="company"
                                                name="company"
                                                placeholder="Votre société"
                                            />
                                            <InputError
                                                message={errors.firstname}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="grid gap-2 my-4">
                                            <Label htmlFor="email">Adresse Mail*</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                required
                                                tabIndex={4}
                                                autoComplete="email"
                                                name="email"
                                                placeholder="email@exemple.com"
                                            />
                                            <InputError message={errors.email}/>
                                        </div>
                                        <div className="grid gap-2 my-4">
                                            <Label htmlFor="phone1">Téléphone*</Label>
                                            <Input
                                                id="phone1"
                                                type="phone"
                                                required
                                                tabIndex={5}
                                                autoComplete="phone"
                                                name="phone1"
                                                placeholder="Votre numéro de téléphone"
                                            />
                                            <InputError message={errors.phone}/>
                                        </div>
                                        <div className="grid gap-2 my-4">
                                            <Label htmlFor="address">Votre adresse*</Label>
                                            <Input
                                                id="address"
                                                type="text"
                                                required
                                                autoFocus
                                                tabIndex={6}
                                                autoComplete="address"
                                                name="address"
                                                placeholder="Votre adresse"
                                            />
                                            <InputError
                                                message={errors.address}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="grid gap-2 my-4">
                                            <Label htmlFor="zipcode">Votre code postale*</Label>
                                            <Input
                                                id="zipcode"
                                                type="text"
                                                required
                                                autoFocus
                                                tabIndex={7}
                                                autoComplete="zipcode"
                                                name="zipcode"
                                                placeholder="Votre code postale"
                                            />
                                            <InputError
                                                message={errors.zipcode}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="grid gap-2 my-4">
                                            <Label htmlFor="city">Votre ville*</Label>
                                            <Input
                                                id="city"
                                                type="text"
                                                required
                                                autoFocus
                                                tabIndex={8}
                                                autoComplete="city"
                                                name="city"
                                                placeholder="Votre ville"
                                            />
                                            <InputError
                                                message={errors.city}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2">
                                        <div className="space-y-4">
                                            <Label htmlFor="package">Formule d'adhésion*</Label>
                                            <div className="grid grid-cols-3 gap-2 my-4">
                                                {plans?.map((plan) => (
                                                    <button
                                                        key={plan.id}
                                                        type="button"
                                                        tabIndex={8}
                                                        onClick={() => setSelectedPlan(plan.identifier)}
                                                        className={cn(
                                                            "flex flex-col items-center justify-center rounded border-3 p-4 transition-colors",
                                                            selectedPlan === plan.identifier
                                                                ? "border-primary"
                                                                : "border-black hover:border-primary"
                                                        )}
                                                    >
                                                        <span className="font-semibold">{plan.name}</span>
                                                        <span className="font-bold text-lg">{plan.price}€</span>
                                                        <span className="text-center text-muted-foreground text-xs">
                                                        {plan.description}
                                                    </span>
                                                    </button>
                                                ))}
                                                <input type="hidden" name="package" value={selectedPlan ?? ''} />
                                                <input type="hidden" name="amount" value={amount} />
                                            </div>
                                            <div className="flex-col gap-6 ">
                                                <div className="text-center">
                                                    <p className="text-center font-semibold text-lg">
                                                        Montant à payer : <br/> <span className="text-primary">{amount} €</span>
                                                    </p>
                                                </div>
                                                <div className="pl-10 space-y-2">
                                                    <h4 className="font-semibold text-sm">Fonctionnalités inclues :</h4>
                                                    <ul className="space-y-2">
                                                        {features.map((feature, index) => (
                                                            <li className="flex items-center gap-2 my-4 text-sm"
                                                                key={index}>
                                                                <CheckIcon className="h-4 w-4 text-primary"/>
                                                                <span>{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="mx-auto justify-center">
                                    <div className="w-[300px] grid gap-2 my-4">
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
                                    <div className="grid gap-2 my-4">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                id="cgu"
                                                name="cgu"
                                                tabIndex={10}
                                                required
                                            />
                                            <Label htmlFor="remember">J'ai lu et j'accepte les <a
                                                href="#">C.G.U.</a>,
                                                je comprends la nécessité des enregistrements de mes données
                                                personnelles.</Label>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <Button
                                            variant="outline"
                                            type="submit"
                                            className="mt-2 w-full max-w-1/3"
                                            tabIndex={11}
                                            data-test="register-user-button"
                                        >
                                            {processing && (
                                                <LoaderCircle className="h-4 w-4 animate-spin"/>
                                            )}
                                            Envoyer
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Form>
                </section>
            </div>
        </>
    )
}
