const USERS = [
    {
      id: 1,
      firstName: 'Ashwani',
      lastName: 'Shrama',
      email: 'ashwani.sharma@gmail.com',
      phoneNumber: '9874561230',
      organization: 'Scalar',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      firstName: 'Ashwani',
      lastName: 'Shrama2',
      email: 'ashwani.sharma2@gmail.com',
      phoneNumber: '9874561230',
      organization: 'Scalar2',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      firstName: 'Ashwani3',
      lastName: 'Shrama',
      email: 'ashwani.sharma3@gmail.com',
      phoneNumber: '9874561230',
      organization: 'Scalar3',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      firstName: "Shubhash",
      lastName: "Nayak",
      email: "shubhash.nayak@gmail.com",
      phoneNumber: "658965895",
      organization: "Freelancing",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      id : 5,
      firstName: "Abhishek",
      lastName: "Sharma",
      email: "abhishek.sh@gmail.com",
      phoneNumber: "564641556",
      organization : "CCL",
      createdAt : new Date(),
      updatedAt : new Date()
  },
  {
      id: 6,
      firstName: "Abhishek",
      lastName: "Sharma",
      email: "abhishek.sh@gmail.com",
      phoneNumber: "564641556",
      organization: "CCL",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      id: 7,
      firstName: "Abhishek",
      lastName: "Sharma",
      email: "abhishek.sh@gmail.com",
      phoneNumber: "564641556",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  ]

  const getUserFromDB = (req, res) =>{
    return USERS;
  }

  const getUserFromDbById = (userId) =>{
    const user = USERS.find((user) => String(user.id) === userId);
    return user;
  }

  const createUserInDB = (userData) =>{
    const updatedUserData = {id : USERS.length + 1, ...userData, createdAt : new Date(), updatedAt  : new Date()};
    USERS.push(updatedUserData);
    return USERS;
  }

  const updateUserById = (userId, userData) =>{
      console.log(userId, userData);
      const user = USERS.find((user) => String(user.id) === userId);
      console.log(user);
      USERS[user.id - 1] = {...user, ...userData}
      return USERS;
  }

  const deleteUserByIdFromDB = (userId) =>{
    const user = USERS.find((user) => String(user.id) === userId);
    USERS.pop(user);
    console.log(user);
  }

  module.exports = {
    getUserFromDB,
    getUserFromDbById,
    createUserInDB,
    updateUserById,
    deleteUserByIdFromDB
  }