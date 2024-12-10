import React from "react";
import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";

const Navbar = async () => {
    const session = await auth();
    return (
        <header className="px-5 py-5 bg-black shadow-md border-b border-purple-600">
            <nav className="flex justify-between items-center">
                {/* Brand Logo */}
                <Link href="/">
                    <h2 className="text-2xl font-bold text-neon-blue hover:text-purple-400 transition duration-300">
                        Sup
                    </h2>
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center gap-5">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span className="text-neon-blue hover:text-purple-400 transition duration-300">
                                    Create
                                </span>
                            </Link>

                            <form action={async () => {
                                "use server";
                                await signOut({ redirectTo: "/" });
                            }}>
                                <button
                                    type="submit"
                                    className="text-neon-blue hover:text-purple-400 bg-transparent border border-neon-blue px-3 py-1 rounded-md hover:bg-purple-900 transition duration-300"
                                >
                                    Logout
                                </button>
                            </form>

                            <Link href={`/users/${session?.user?.id}`}>
                                <span className="text-neon-blue hover:text-purple-400 transition duration-300">
                                    {session?.user?.name}
                                </span>
                            </Link>
                        </>
                    ) : (
                        <form action={async () => {
                            "use server";
                            await signIn("github");
                        }}>
                            <button
                                type="submit"
                                className="text-neon-blue hover:text-purple-400 bg-transparent border border-neon-blue px-3 py-1 rounded-md hover:bg-purple-900 transition duration-300"
                            >
                                Login
                            </button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
