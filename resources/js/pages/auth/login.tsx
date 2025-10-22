import AuthenticatedSessionController from '@/actions/App/Http/Controllers/Auth/AuthenticatedSessionController';
import InputError from '@/components/input-error';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardHeaderBar,
    CardTitle,
} from "@/components/ui/card"
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { register } from '@/routes';
import { request } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    return (
        <AuthLayout
            title="Se connecter au Retzien Libre"
            description="Entrez votre identifiant et mot de passe pour vous connecter"
        >
            <Head title="Se connecter au Retzien Libre" />
            <Card className="w-full max-w-sm bg-primary">
                <CardHeaderBar />
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Se connecter</CardTitle>
                    <CardDescription>
                        Connectez-vous en remplissant les informations ci-dessous :
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form
                        {...AuthenticatedSessionController.store.form()}
                        resetOnSuccess={['password']}
                        className="flex flex-col gap-6"
                    >
                        {({ processing, errors }) => (
                            <>
                                <div className="grid gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email*</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="email"
                                            placeholder="votre@example.com"
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="grid gap-2">
                                        <div className="flex items-center">
                                            <Label htmlFor="password">Mot de passe*</Label>
                                        </div>
                                        <Input
                                            id="password"
                                            type="password"
                                            name="password"
                                            required
                                            tabIndex={2}
                                            autoComplete="current-password"
                                            placeholder="Votre mot de passe"
                                        />
                                        <InputError message={errors.password} />
                                        {canResetPassword && (
                                            <TextLink
                                                href={request()}
                                                className="ml-auto text-sm"
                                                tabIndex={5}
                                            >
                                                Mot de passe oublié ?
                                            </TextLink>
                                        )}
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <Checkbox
                                            id="remember"
                                            name="remember"
                                            tabIndex={3}
                                        />
                                        <Label htmlFor="remember">Se souvenir de moi</Label>
                                    </div>

                                    <Button
                                        variant="outline"
                                        type="submit"
                                        className="mt-4 w-full"
                                        tabIndex={4}
                                        disabled={processing}
                                        data-test="login-button"
                                    >
                                        {processing && (
                                            <LoaderCircle className="h-4 w-4 animate-spin" />
                                        )}
                                        Se connecter
                                    </Button>
                                </div>
                            </>
                        )}
                    </Form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <div className="text-center text-sm text-muted-foreground">
                        Vous n'avez pas encore de compte ?{' '}
                        <br/>
                        <TextLink href={register()} tabIndex={5}>
                            Adhérer dès maintenant
                        </TextLink>
                    </div>
                </CardFooter>
            </Card>

            {status && (
                <div className="mb-4 text-center text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
        </AuthLayout>
    );
}
