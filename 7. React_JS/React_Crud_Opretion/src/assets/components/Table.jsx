import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Table = () => {

  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('') 

  // axios

  const loadUser = async () => {
    const res = await axios.get('http://localhost:3000/users')
    setData(res.data)
    console.log(res.data.users);
  }

  useEffect(() => {
    loadUser();
  }, [])

  const onDeleteUser = (id) => {
     axios.delete(`http://localhost:3000/users/${id}`)
    .then(() => {
      loadUser();
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const filterdata = data.filter((item) => item.username.toLowerCase().includes(searchTerm.toLocaleLowerCase()))

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Users</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all Users. You can add new Users, edit or delete existing
              ones.
            </p>
          </div>
          <div>
            <input
              className="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Search Users"
              onChange={(e)=>{setSearchTerm(e.target.value)}}
            ></input>
          </div>
          <div>
            <NavLink to="/Add">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add new User
              </button>
            </NavLink>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>User</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Proffesion
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Age
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Mobile No.
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Edit
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {filterdata.map((person) => (
                      <tr key={person.id}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={person.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{person.username}</div>
                              <div className="text-sm text-gray-700 font-semibold">{person.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 font-semibold ">{person.proffesion}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-red-200 px-2 text-xs font-semibold leading-5 ">
                           {person.age}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-red-200 px-2 text-xs font-semibold leading-5">
                           {person.number}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <NavLink to={`/Edit/${person.id}`} className="text-gray-700">
                            <FaUserEdit className='text-2xl' />
                          </NavLink>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <button className="text-gray-700" onClick={() => onDeleteUser(person.id)}>
                            <MdDelete className='text-2xl' />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-6">
          <a href="#" className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900">
            <span className="hidden lg:block">&larr; Previous</span>
            <span className="block lg:hidden">&larr;</span>
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            1
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            2
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            3
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            4
          </a>
          <a href="#" className="mx-2 text-sm font-semibold text-gray-900">
            <span className="hidden lg:block">Next &rarr;</span>
            <span className="block lg:hidden">&rarr;</span>
          </a>
        </div>
      </section>
    </>
  )
}

export default Table