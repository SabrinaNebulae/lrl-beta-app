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
                className="flex min-h-screen flex-col items-center bg-[#F5F5F5] text-[#1b1b18] lg:justify-center dark:bg-[#0a0a0a]">
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
            <div
                className="flex flex-col items-center bg-[#F5F5F5] text-[#1b1b18] lg:justify-center dark:bg-[#0a0a0a]">

                <section className="w-full bg-accent pr-0 py-16">
                    <div className="flex flex-col items-center gap-8 w-full max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-10">Nos services numériques éthiques, libres,
                            ouverts et locaux</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: 'Boîte mail',
                                    description: 'Service de messagerie électronique sécurisé et respectueux de votre vie privée'
                                },
                                {
                                    title: 'Cloud (Nextcloud)',
                                    description: 'Stockage en ligne et collaboration avec vos données hébergées localement'
                                },
                                {title: 'File2link', description: 'Partage de fichiers simplifié et sécurisé'},
                                {
                                    title: 'Hébergement web',
                                    description: 'Solutions d\'hébergement web éthiques et performantes'
                                },
                                {
                                    title: 'Sondage',
                                    description: 'Créez et partagez des sondages en ligne en toute confidentialité'
                                },
                                {
                                    title: 'Liste de diffusion Mail',
                                    description: 'Gérez vos communications de groupe efficacement'
                                }
                            ].map((service, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </section>

                <section className="w-full max-w-7xl py-16 bg-gray-50 dark:bg-gray-900">
                    <h2 className="text-3xl font-bold text-center mb-10">GAFAM : Quels dangers ?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-3">Surveillance massive</h3>
                            <p>Les GAFAM collectent et exploitent vos données personnelles à des fins commerciales</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-3">Monopole numérique</h3>
                            <p>Concentration excessive du pouvoir et dépendance aux services centralisés</p>
                        </div>
                    </div>
                </section>

                <section className="w-full max-w-7xl py-16">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold mb-6">Notre alternative : Le Retzien Libre</h2>
                            <p className="mb-6">Une association locale engagée pour la promotion du logiciel libre et la
                                protection de vos données personnelles.</p>
                            <Link href={register()}>
                                <Button variant="default">Rejoignez-nous</Button>
                            </Link>
                        </div>
                        <div className="lg:w-1/2">
                            <img src={illustrationImage} alt="Le Retzien Libre" className="rounded-lg"/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
