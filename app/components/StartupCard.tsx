import React from "react";

const StartupCard = ({ post }: { post: any }) => {
    return (
        <div className="bg-gray-900 text-neon-blue border border-purple-600 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:border-neon-blue">
            {/* Card Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform transform hover:scale-110"
                />
                <span className="absolute top-2 right-2 bg-black bg-opacity-50 text-purple-400 px-3 py-1 rounded-md text-sm font-semibold">
                    {post.category}
                </span>
            </div>

            {/* Card Content */}
            <div className="p-4 flex flex-col gap-2">
                <h3 className="text-xl font-bold truncate">{post.title}</h3>
                <p className="text-gray-300 text-sm truncate">{post.description}</p>
                <div className="flex justify-between items-center mt-3">
                    <span className="text-gray-400 text-xs">
                        {new Date(post._createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                        })}
                    </span>
                    <div className="flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-purple-400"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 4a8 8 0 00-8 8c0 3.2 1.873 5.935 4.58 7.18l-.815 3.635a.5.5 0 00.72.544l4.096-2.187a8.01 8.01 0 004.419-.23 8 8 0 00-4.581-15.942z" />
                        </svg>
                        <span>{post.views} views</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartupCard;
