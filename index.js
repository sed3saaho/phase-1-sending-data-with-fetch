// Add your code here
function submitData( name, email ) {
    fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            usersname: name,
            usersemail: email,
        }),
    } ).then( function ( response ) {
        return response.json();
    } ).then( function ( object ) {
        console.log( object );
    } ).catch( function ( error ) {
        alert( "Bad things! Ragnarök!" );
        console.log( error.message );
    } );
}
// Testing our code
submitData( "Bazenga", "Bazenga@Moringa.com" );.
