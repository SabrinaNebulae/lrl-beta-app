import {dashboard, home, login, register} from '@/routes';
import {type SharedData} from '@/types';
import {Head, Link, usePage} from '@inertiajs/react';
import {Button} from "@/components/ui/button";
import AppLogoIcon from "@/components/app-logo-icon";
import illustrationImage from '@/img/utils/lrl-illustration.png';
import NavGuestLayout from "@/layouts/nav-guest-layout";


export default function Welcome() {
    const {auth} = usePage<SharedData>().props;

    return (
        <>
            <Head title="Bienvenue">
                <link rel="preconnect" href="https://fonts.bunny.net"/>
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div
                className="flex min-h-screen flex-col items-center bg-[#F5F5F5] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <NavGuestLayout />
                <section className="flex items-center justify-center gap-4 w-full max-w-[335px] lg:max-w-7xl">
                    <div className="flex w-full items-center justify-center gap-4">
                        <div
                            className="flex flex-col w-full items-center accent-middle py-50 text-center justify-center gap-4">
                            <h1 className="text-5xl text-accent max-w-[450px] mb-5">Pour un internet éthique !</h1>
                            <p className="text-xl mb-5">"Dégooglisons"<br/>
                                nos ordinateurs, nos tablettes et nos smartphones.<br/>
                                <i>"Le chemin est long, mais la voie est libre"</i></p>
                            <Link
                                href={register()}
                            >
                                <Button variant="secondary">Adhérer dès maintenant</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex w-full items-center justify-center gap-4">
                        <img src={illustrationImage} alt="illustration"/>
                    </div>
                </section>
            </div>

            <section className="flex bg-accent items-center justify-center p-6 w-full max-w-[335px] lg:max-w-7xl lg:justify-center lg:p-8">TEST</section>
        </>
    );
}
