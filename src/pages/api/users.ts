import { NextApiRequest, NextApiResponse } from "next";

const Users = (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Andre" },
    { id: 2, name: "Pedro" },
    { id: 3, name: "Nathel" },
    { id: 4, name: "Winnie" },
  ];

  return response.json(users);
};

export default Users;
