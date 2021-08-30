const accounts = {
    domElement: document.querySelector('[data-content="accounts"]'),
    accounts: false,
    init: () => {
        accounts.simulateAccounts();
        accounts.displayAccounts();
    },

    simulateAccounts: () => {
        accounts.accounts = [
            {
                'id': '1',
                'name': 'Employé'
            },
            {
                'id': '2',
                'name': 'Patron'
            },
        ]
    },

    fetchAccounts: () => {

    },

    displayAccounts: () => {
        if(!accounts.accounts) {
            alert('Aucune données pour nos types de comptes');
        }
        accounts.accounts.forEach((account) => {
            let tr = document.createElement('tr');

            id = document.createElement('td');
            id.innerHTML = account.id;
            tr.appendChild(id);

            content = document.createElement('td');
            content.innerHTML = account.name;
            tr.appendChild(content);

            let userNumber = document.createElement('td');
            tr.appendChild(userNumber);

            accounts.domElement.appendChild(tr);

        })
    },
}