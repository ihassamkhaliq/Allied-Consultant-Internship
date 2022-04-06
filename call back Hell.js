                            // Call Back Hell

const getConnection = () => {
        setTimeout(() => {
                console.log("Get Connection");
                setTimeout(() => {
                        console.log("Get Data");
                        setTimeout(() => {
                                console.log("Format Data");
                                setTimeout(() => {
                                        console.log("Display Data");
                                }, 3000);
                        }, 3000);
                }, 3000);
        }, 5000);
}
getConnection();