const users = {
    domElement: document.querySelector('[data-content="users"]'),
    users: false,
    init: () => {
        users.simulateUsers();
        users.displayUsers();
    },

    simulateUsers: () => {
        users.users = [
            {
                "id": 1,
                "firstname": "Sylvie",
                "lastname": "Morvan",
                "address": "chemin Margot Bourgeois\n44073 Lebrunnec",
                "active": 0,
            },
            {
                "id": 1,
                "firstname": "Poulet",
                "lastname": "Piquant",
                "address": "chemin capique",
                "active": 1,
            }
        ]
    },

    fetchUsers: () => {

    },

    displayUsers: () => {
        if(!users.users) {
            alert('Aucune données pour nos utilisateurs');
        }
        users.users.forEach((user) => {
            let tr = document.createElement('tr');

            id = document.createElement('td');
            id.innerHTML = user.id;
            tr.appendChild(id);

            firstname = document.createElement('td');
            firstname.innerHTML = user.firstname;
            tr.appendChild(firstname);

            let lastname = document.createElement('td');
            lastname.innerHTML = user.lastname;
            tr.appendChild(lastname);


            let address = document.createElement('td');
            address.innerHTML = user.address;
            tr.appendChild(address);


            let active = document.createElement('td');
            active.innerHTML = user.active;
            tr.appendChild(active);


            let accounts = document.createElement('td');
            tr.appendChild(accounts);
            users.domElement.appendChild(tr);

        })
    },
}