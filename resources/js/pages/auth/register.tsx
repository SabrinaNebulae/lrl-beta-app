import RegisteredUserController from '@/actions/App/Http/Controllers/Auth/RegisteredUserController';
import {login} from '@/routes';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardHeaderBar,
    CardTitle,
} from "@/components/ui/card"

import {Form, Head} from '@inertiajs/react';
import {LoaderCircle} from 'lucide-react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

export default function Register() {
    return (
        <AuthLayout
            title="Devenez Adhérent du Retzien Libre"
            description="Saisissez vos informations ci-dessous pour créer un compte"
        >
            <Head title="Adhérer au Retzien Libre"/>

            <Card className="w-full max-w-sm bg-primary">
                <CardHeaderBar/>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Adhérer au Retzien Libre</CardTitle>
                    <CardDescription>
                        Saisissez vos informations ci-dessous pour créer un compte :
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form
                        {...RegisteredUserController.store.form()}
                        resetOnSuccess={['password', 'password_confirmation']}
                        disableWhileProcessing
                        className="flex flex-col gap-6"
                    >
                        {({processing, errors}) => (
                            <>
                                <div className="grid gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Nom*</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="name"
                                            name="name"
                                            placeholder="Nom Complet"
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
                                            tabIndex={2}
                                            autoComplete="email"
                                            name="email"
                                            placeholder="email@exemple.com"
                                        />
                                        <InputError message={errors.email}/>
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="password">Mot de passe*</Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            required
                                            tabIndex={3}
                                            autoComplete="new-password"
                                            name="password"
                                            placeholder="Mot de passe"
                                        />
                                        <InputError message={errors.password}/>
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="password_confirmation">
                                            Confirmation du mot de passe*
                                        </Label>
                                        <Input
                                            id="password_confirmation"
                                            type="password"
                                            required
                                            tabIndex={4}
                                            autoComplete="new-password"
                                            name="password_confirmation"
                                            placeholder="Confirmer le mot de passe"
                                        />
                                        <InputError
                                            message={errors.password_confirmation}
                                        />
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
                                        Adhérer
                                    </Button>
                                </div>
                            </>
                        )}
                    </Form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <div className="text-center text-sm text-muted-foreground">
                        Vous avez déjà un compte ?{' '}
                        <br/>
                        <TextLink href={login()} tabIndex={5}>
                            Se connecter
                        </TextLink>
                    </div>
                </CardFooter>
            </Card>
        </AuthLayout>
    );
}
