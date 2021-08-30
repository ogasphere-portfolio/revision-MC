const app = {
    apiRootUrl: "http://lumenapi.local/",

    init: () => {
        console.log('here');
        users.init();
        accounts.init();

    }
}

document.addEventListener("DOMContentLoaded", app.init);