import React from "react";
import { FaEye } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";


const StartupCard = ({ post }: { post: any }) => {
    return (
        <div className="bg-gray-900 text-neon-blue border border-purple-600 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:border-neon-blue">
            {/* Card Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform transform"
                />
                <Link href={`/?query=${post.category.toLowerCase()}`}>
                    <span className="absolute top-2 right-2 bg-black bg-opacity-50 text-purple-400 px-3 py-1 rounded-md text-sm font-semibold">
                        {post.category}
                    </span>
                </Link>
            </div>

            {/* Card Content */}
            <div className="p-4 flex flex-col gap-2">
                <Link href={`/startup/${post._id}`}>
                    <h3 className="text-xl font-bold truncate">{post.title}</h3>
                </Link>
                
                <p className="text-gray-300 text-sm truncate">{post.description}</p>
                <div className="flex justify-between items-center mt-3">
                    <span className="text-gray-400 text-xs">
                        {new Date(post._createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                        })}
                        <Link href={`/user/${post.author?._id}`}>
                            <p> {post.author?.name} </p>
                        </Link> 
                    </span>
                    <div>
                    <Link href={`/user/${post.author?._id}`}>
                            <Image src="https://placehold.co/48x48" alt="placeholder" width={48} height={48} className="rounded-full"></Image>
                        </Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaEye />
                        <span>{post.views} views</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartupCard;
