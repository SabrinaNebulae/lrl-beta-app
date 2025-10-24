import {Link, router, usePage} from "@inertiajs/react";
import {dashboard, home, login, logout, register, contact, membership} from "@/routes";
import AppLogoIcon from "@/components/app-logo-icon";
import {Button} from "@/components/ui/button";
import type {SharedData} from "@/types";
import {useMobileNavigation} from "@/hooks/use-mobile-navigation";
import {LogOut} from "lucide-react";

export default function NavGuestLayout() {
    const {auth} = usePage<SharedData>().props;

    const cleanup = useMobileNavigation();
    const handleLogout = () => {
        cleanup();
        router.flushAll();
    };

    return (
        <>
            <header
                className="flex  justify-between my-6 w-full max-w-[335px]  text-sm not-has-[nav]:hidden lg:max-w-7xl">
                <div className="flex items-center justify-start">
                    <Link
                        href={home()}
                        className="flex items-center justify-start gap-2 font-medium no-underline"
                    >
                        <div className="mb-1 flex h-9 w-9 items-center justify-center rounded-md">
                            <AppLogoIcon className="size-9  text-[var(--foreground)] dark:text-white"/>
                        </div>
                        <h1 className="text-black">Le Retzien Libre</h1>
                    </Link>
                </div>
                <nav className="flex items-center justify-end gap-4">
                    <Link
                        href={home()}
                        className="inline-block px-5 py-1.5 text-lg leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b] no-underline"
                    >
                        Accueil
                    </Link>
                    <Link
                        href="#"
                        className="inline-block px-5 py-1.5 text-lg leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b] no-underline"
                    >
                        Nos Services
                    </Link>
                    <Link
                        href="#"
                        className="inline-block px-5 py-1.5 text-lg leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b] no-underline"
                    >
                        Le Blog
                    </Link>
                    <Link
                        href={contact()}
                        className="inline-block px-5 py-1.5 text-lg leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b] no-underline"
                    >
                        Contact
                    </Link>
                </nav>
                <nav className="flex items-center justify-end gap-4">
                    {auth.user ? (
                        <>
                            <Link
                                href={dashboard()}
                                className=" no-underline"
                            >
                                <Button variant="outline">Tableau de bord</Button>
                            </Link>

                            <Link
                                className="bg-transparent border-0 shadow-none"
                                href={logout()}
                                onClick={handleLogout}
                                data-test="logout-button"
                            >
                                <Button variant="secondary">Se déconnecter</Button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                href={login()}
                            >
                                <Button variant="outline">Se connecter</Button>
                            </Link>
                            <Link
                                href={membership()}
                            >
                                <Button>Adhérer</Button>
                            </Link>
                        </>
                    )}
                </nav>
            </header>
        </>
    )
}
