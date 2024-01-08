
function LogOut(){
    sessionStorage.removeItem("token");
    alert("You have been logged out");
    window.location.href = '/';
}

export default LogOut;