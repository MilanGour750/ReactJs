import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();

    if (data.error) {
        return (
            <div className="text-center m-4 bg-red-600 text-white p-4 rounded-lg shadow-md">
                Error: {data.error}
            </div>
        );
    }

    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/MilanGour750')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setData(data);
    //             setLoading(false);
    //         })
    //         .catch((err) => {
    //             setError("Error fetching GitHub data");
    //             setLoading(false);
    //         });
    // }, []);

    // if (loading) {
    //     return <div className="text-center m-4 bg-gray-600 text-white p-4">Loading...</div>;
    // }

    // if (error) {
    //     return <div className="text-center m-4 bg-gray-600 text-white p-4">{error}</div>;
    // }

    return (
        <div className="flex flex-col items-center bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <img
                src={data.avatar_url}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white mb-4"
            />
            <h2 className="text-2xl font-semibold">{data.name || data.login}</h2>
            <p className="text-lg mb-2">{data.bio || "No bio available"}</p>
            <div className="flex space-x-4 mb-4">
                <div className="text-center">
                    <p className="font-semibold">Followers</p>
                    <p>{data.followers}</p>
                </div>
                <div className="text-center">
                    <p className="font-semibold">Following</p>
                    <p>{data.following}</p>
                </div>
                <div className="text-center">
                    <p className="font-semibold">Public Repos</p>
                    <p>{data.public_repos}</p>
                </div>
            </div>
            <a
                href={data.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition"
            >
                Visit GitHub Profile
            </a>
        </div>
    );
}

export default Github;

export const githubinfo = async () => {
    try {
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.github.com/users/MilanGour750');

        if (!response.ok) {
            throw new Error('Failed to fetch GitHub data');
        }
        return await response.json();
    } catch (error) {
        return { error: error.message };
    }
};
