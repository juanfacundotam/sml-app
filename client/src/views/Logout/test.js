import { useAuth0 } from '@auth0/auth0-react';

const MyComponent = () => {
  const { isAuthenticated, user } = useAuth0();
  const url = 'https://example.com/roles';
  
  const objeto = [
    {
      name: "gus",
      rol: "c-level",
      array: [
        "elemento1",
        "elemento2",
        "elemento3"
      ]
    },
    {
      name: "jose",
      rol: {
        prop1: "valor3",
        prop2: "valor4"
      },
      array: [
        "elemento4",
        "elemento5"
      ]
    }
  ];
  
  if (isAuthenticated && user[url][0] === objeto[0].rol) {
    return console.log("establecido");
  }
  
 
};