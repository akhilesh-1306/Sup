import React from "react";
import Form from "next/form";
import { FaSearch } from "react-icons/fa";

const SeacrhForm = ({ query }: { query?: string }) => {
    return (
        <Form action="/" scroll={false} className="w-full max-w-md sm:max-w-lg lg:max-w-xl animate-fade-in transition-all duration-500">
            <div className="flex items-center bg-gray-800 border border-neon-blue rounded-md">
                <input
                    name="query"
                    type="text"
                    placeholder="Search for ideas or startups..."
                    className="flex-1 bg-transparent text-neon-blue py-3 px-5 placeholder-gray-500 focus:ring focus:ring-purple-400 outline-none"
                />
                <button type="submit" className="px-4 text-neon-blue hover:text-purple-400">
                    <FaSearch />
                </button>
            </div>
        </Form>
    )
}

export default SeacrhForm;