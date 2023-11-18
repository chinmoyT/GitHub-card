import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Account = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${props.user}`);
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchUserDetails();
    }, [props.user]);

    if (!user) {
        return <div>Loading...</div>;
    }

    const {
        avatar_url,
        login,
        name,
        public_repos,
        public_gists,
        created_at,
    } = user;

    return (
        <div className="flex items-center justify-center h-screen bg-indigo-200">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full transition-transform transform hover:scale-105">
        <div className="mb-6 text-center">
          <img
            src={avatar_url}
            alt="User Avatar"
            className="mx-auto w-20 h-20 rounded-full mb-4"
          />
          <h1 className="text-xl font-semibold">{name || login}</h1>
          <p className="text-gray-500">@{login}</p>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="publicRepos" className="text-sm">No. of Public Repos</label>
            <input
              type="text"
              id="publicRepos"
              name="publicRepos"
              value={public_repos || 0}
              readOnly
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="publicGists" className="text-sm">No. of Public Gists</label>
            <input
              type="text"
              id="publicGists"
              name="publicGists"
              value={public_gists || 0}
              readOnly
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="createdAt" className="text-sm">Profile Created At</label>
            <input
              type="text"
              id="createdAt"
              name="createdAt"
              value={new Date(created_at).toLocaleDateString()}
              readOnly
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
        </form>
      </div>
    </div>
    );
};

export default Account;
